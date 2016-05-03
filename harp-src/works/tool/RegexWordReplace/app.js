$(function(){

	$("#btn").click(function () {
		try {
			var inputText = $("#area1").val();
			var regex  = new RegExp( "☆", "i" );
			var regexG = new RegExp( "☆", "gi" );
			var str = new String( $("#area2").val() );
			var startNum = 1;
			// ☆がいくつあるか調べる
			var myArray = str.match( regexG );
			for (var i=0; i<myArray.length; i++) {
				var num = ""+(i+startNum);
				// ☆→★
				str = str.replace( regex, "★"+num );
			};
			// #area3に表示
			$("#area3").val( str );
		} catch (e) {
		}
	});

});