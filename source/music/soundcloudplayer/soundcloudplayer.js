// # SoundCloud Custom Player

// Make sure to require [SoundManager2](http://www.schillmania.com/projects/soundmanager2/) before this file on your page.
// And set the defaults for it first:
soundManager.url = '/swfs/';
soundManager.flashVersion = 9;
soundManager.useFlashBlock = false;
soundManager.useHighPerformance = true;
soundManager.wmode = 'transparent';
soundManager.useFastPolling = true;

// Wait for jQuery to load properly
$(function(){

	// Wait for SoundManager2 to load properly
	soundManager.onready(function() {


		// ## SoundCloud ----------------------------------------------------------------------------------------------

		// Pass a consumer key, which can be created [here](http://soundcloud.com/you/apps), and your playlist url.
		// If your playlist is private, make sure your url includes the secret token you were given.
		var consumer_key = "7765a8914aa491a0ae721b57e4f43415", // My Client ID
				url = "http://soundcloud.com/foofighters/sets/wasting-light";

		// Resolve the given url and get the full JSON-worth of data from SoundCloud regarding the playlist and the tracks within.
		var json_url = 'http://api.soundcloud.com/resolve?url=' + url + '&format=json&consumer_key=' + consumer_key + '&callback=?';
		$.getJSON(json_url, function(playlist){

			// I like to fill out the player by passing some of the data from the first track.
			// In this case, you'll just want to pass the first track's title.
			$('.title').text(playlist.tracks[0].title);

			// Loop through each of the tracks
			$.each(playlist.tracks, function(index, track) {

				// Create a list item for each track and associate the track *data* with it.
				$('<li>' + track.title + '</li>').data('track', track).appendTo('.tracks');

				// * Get appropriate stream url depending on whether the playlist is private or public.
				// * If the track includes a *secret_token* add a '&' to the url, else add a '?'.
				// * Finally, append the consumer key and you'll have a working stream url.
				url = track.stream_url;
				(url.indexOf("secret_token") == -1) ? url = url + '?' : url = url + '&';
				url = url + 'consumer_key=' + consumer_key;

				// ## SoundManager2
				// **Create the sound using SoundManager2**
				soundManager.createSound({

					// Give the sound an id and the SoundCloud stream url we created above.
					id: 'track_' + track.id,
					url: url,

					// On play & resume add a *playing* class to the main player div.
					// This will be used in the stylesheet to hide/show the play/pause buttons depending on state.
					onplay: function() {
						$('.player').addClass('playing');
						$('.title').text(track.title);
					},
					onresume: function() {
						$('.player').addClass('playing');
					},
					// On pause, remove the *playing* class from the main player div.
					onpause: function() {
						$('.player').removeClass('playing');
					},
					// When a track finished, call the Next Track function. (Declared at the bottom of this file).
					onfinish: function() {
						nextTrack();
					}

				});

			});

		});


		// ## GUI Actions ---------------------------------------------------------------------------------------------

		// Bind a click event to each list item we created above.
		$(document).on('click', '.tracks li', function(){

			// Create a track variable, grab the data from it, and find out if it's already playing *(set to active)*
			var $track = $(this),
				data = $track.data('track'),
				playing = $track.is('.active');

			if (playing) {
				// If it is playing: pause it.
				soundManager.pause('track_' + data.id);

			} else {
				// If it's not playing: stop all other sounds that might be playing and play the clicked sound.
				if ($track.siblings('li').hasClass('active')) { soundManager.stopAll(); }
				soundManager.play('track_' + data.id);
			}

			// Finally, toggle the *active* state of the clicked li and remove *active* from and other tracks.
			$track.toggleClass('active').siblings('li').removeClass('active');

		});

		// Bind a click event to the play / pause button.
		$(document).on('click', '.play, .pause', function(){

			if ( $('li').hasClass('active') == true ) {
				// If a track is active, play or pause it depending on current state.
				soundManager.togglePause( 'track_' + $('li.active').data('track').id );

			} else {
				// If no tracks are active, just play the first one.
				$('li:first-child').click();
			}

		});

		// Bind a click event to the next button, calling the Next Track function.
		$(document).on('click', '.next', function(){
			nextTrack();
		});

		// Bind a click event to the previous button, calling the Previous Track function.
		$(document).on('click', '.prev', function(){
			prevTrack();
		});


		// ## Player Functions ----------------------------------------------------------------------------------------

		// **Next Track**
		var nextTrack = function(){

			// Stop all sounds
			soundManager.stopAll();

			// Click the next list item after the current active one. 
			// If it does not exist *(there is no next track)*, click the first list item.
			if ( $('li.active').next().click().length == 0 ) {
				$('.tracks li:first').click();
			}

		}

		// **Previous Track**
		var prevTrack = function(){

			// Stop all sounds
			soundManager.stopAll();

			// Click the previous list item after the current active one. 
			// If it does not exist *(there is no previous track)*, click the last list item.
			if ( $('li.active').prev().click().length == 0 ) {
				$('.tracks li:last').click();
			}

		}

	});

});

