$(function(){

	$("#btn").click(function () {
		try {
			var inputText = $("#area1").val();
			var regex = new RegExp( inputText, "gi" );
			var str = $("#area2").val();
			var myArray = str.match( regex );
			var resultText = "";
			for (var i=0; i<myArray.length; i++) {
				resultText += myArray[i] + "\r\n";
			};
			// #area3に表示
			$("#area3").val(resultText);
		} catch (e) {
		}
	});

});