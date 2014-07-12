// # SoundCloud Custom Player

// Make sure to require [SoundManager2](http://www.schillmania.com/projects/soundmanager2/) before this file on your page.
// And set the defaults for it first:
soundManager.url = '/swfs/';
soundManager.flashVersion = 9;
soundManager.useFlashBlock = false;
soundManager.useHighPerformance = true;
soundManager.wmode = 'transparent';
soundManager.useFastPolling = true;

var consumer_key = "7765a8914aa491a0ae721b57e4f43415"; // My Client ID

if (typeof soundcloud_url === "undefined") {
	soundcloud_url = "http://soundcloud.com/foofighters/sets/wasting-light";
}

var sc_tracks = new Array();

$(function(){

	soundManager.onready(function() {


		// ## SoundCloud ----------------------------------------------------------------------------------------------

		var json_url = 'http://api.soundcloud.com/resolve?url=' + soundcloud_url + '&format=json&consumer_key=' + consumer_key + '&callback=?';
		$.getJSON(json_url, function(playlist){

			var album = playlist.title;

			$.each(playlist.tracks, function(index, track) {

				url = track.stream_url;
				(url.indexOf("secret_token") == -1) ? url = url + '?' : url = url + '&';
				url = url + 'consumer_key=' + consumer_key;

				sc_tracks[index] = {
					track_idx: index,
					track_no: index + 1,
					track_id: 'track_' + track.id,
					title: track.title,
					duration: track.duration,
					url: url,
					album: album
				};

				// ## SoundManager2
				// **Create the sound using SoundManager2**
				soundManager.createSound({

					// Give the sound an id and the SoundCloud stream url we created above.
					id: sc_tracks[index].track_id,
					url: sc_tracks[index].url,

					// On play & resume add a *playing* class to the main player div.
					// This will be used in the stylesheet to hide/show the play/pause buttons depending on state.
					onplay: function() {
						$('.player').addClass('playing');
						$('.title').text(sc_tracks[index].title);
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
			
			$('.title').text(sc_tracks[0].title);

			for (var i=0; i<sc_tracks.length; i++) {
				addMusic(sc_tracks[i]);
			}

		});



		// ## GUI Actions ---------------------------------------------------------------------------------------------

		// Bind a click event to each list item we created above.
		$(document).on('click', '#musiclist tr.track', function(){

			// Create a track variable, grab the data from it, and find out if it's already playing *(set to active)*
			var $track = $(this),
				track_idx = $track.data('track_idx'),
				track_data = sc_tracks[track_idx],
				playing = $track.is('.active');

			if (playing) {
				// If it is playing: pause it.
				soundManager.pause(track_data.track_id);

			} else {
				// If it's not playing: stop all other sounds that might be playing and play the clicked sound.
				if ($track.siblings('tr').hasClass('active')) { soundManager.stopAll(); }
				soundManager.play(track_data.track_id);
			}

			// Finally, toggle the *active* state of the clicked li and remove *active* from and other tracks.
			$track.toggleClass('active').siblings('tr').removeClass('active');

		});

		// Bind a click event to the play / pause button.
		$(document).on('click', '.play, .pause', function(){

			if ( $('#musiclist tr.track').hasClass('active') == true ) {
				// If a track is active, play or pause it depending on current state.
				var track_idx = $('#musiclist .active').data('track_idx');
				soundManager.togglePause( sc_tracks[track_idx].track_id );

			} else {
				// If no tracks are active, just play the first one.
				$('#musiclist tbody tr:first-child').click();
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
			if ( $('tr.track.active').next().click().length == 0 ) {
				$('#musiclist tr.track:first-child').click();
			}

		}

		// **Previous Track**
		var prevTrack = function(){

			// Stop all sounds
			soundManager.stopAll();

			// Click the previous list item after the current active one. 
			// If it does not exist *(there is no previous track)*, click the last list item.
			if ( $('tr.track.active').prev().click().length == 0 ) {
				$('#musiclist tr.track:last-child').click();
			}

		}

	});

});

function addMusic(sc_track) {
	var track_html = "";
	track_html += "<tr class='track' data-track_idx='" + sc_track.track_idx + "'>";
//	track_html += "<td>" + "<a type='audio/mp3' class='sm2_button' href='" + sc_track.url + "'></a>" + "</td>";
	track_html += "<td class='right'>" + sc_track.track_no + ".</td>";
	track_html += "<td>" + sc_track.title + "</td>";
	track_html += "<td>" + sc_track.album + "</td>";
	track_html += "<td>" + convertDuration(sc_track.duration) + "</td>";
	track_html += "</tr>";
	$('#musiclist tbody').append(track_html);
}

function convertDuration(ms) {
	var h = String(Math.floor(ms / 3600000) + 100).substring(1);
	var m = String(Math.floor((ms - h * 3600000)/60000)+ 100).substring(1);
	var s = String(Math.round((ms - h * 3600000 - m * 60000)/1000)+ 100).substring(1);
	var hm = Number(h)*60 + Number(m);
	return hm+':'+s;
}
