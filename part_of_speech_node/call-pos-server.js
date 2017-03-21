/**
 * Created by ekim on 21/3/17.
 */

$(document).ready(function () {

	$("#getposbtn").on('click', function () {

		$.ajax({
			type: 'POST',
			url: "http://localhost:8080",
			data: {
				"op": "pos",
				"sentence": $('#sentence').val(),
			},
			dataType: "json",
			success: function (resultData) {
				$("#posresult").html(JSON.stringify(( resultData) ));
				console.log(resultData);
			},
			error: function (xhr, status, error) {
				$("#posresult").html("Network connection error. Please check with your network administrator. Error:" + status);
			}
		});

	});

});
