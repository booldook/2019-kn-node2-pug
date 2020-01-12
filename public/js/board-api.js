function getData(id) {
	if(id) url = "/api/get/"+id;
	else url = "/api/get/";
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(res) {
			if(id) makeList(res);
			else viewList(res);
		},
		error: function(xhr) {
			console.log(xhr);
		}
	});
}
function makeList(res) {

}
function viewList(res) {
	
}
getData();
