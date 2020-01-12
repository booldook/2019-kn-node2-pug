function delList(id) {
	$.ajax({
		url: '/api/delete',
		type: "DELETE",
		dataType: "json",
		data: {id: id},
		success: function(res) {
			console.log(res);
			getData();
		},
		error: function(xhr) {
			console.log(xhr);
		}
	});
}

$("#btSave").click(function(){
	var id = document.form1.id.value;
	var type = "POST";
	var url = "/api/post";
	if(id != "") {
		type = "PUT";
		url = "/api/put";
	}
	$.ajax({
		url: url,
		type: type,
		dataType: "json",
		data: {
			id: id,
			title: document.form1.title.value,
			content: document.form1.content.value,
			writer: document.form1.writer.value,
		},
		success: function(res) {
			document.form1.reset();
			if(res.serverStatus == 2) getData();
		},
		error: function(xhr) {
			console.log(xhr);
		}
	});
});

function getData(id) {
	if(id) url = "/api/get/"+id;
	else url = "/api/get/";
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(res) {
			if(id) viewList(res);
			else makeList(res);
		},
		error: function(xhr) {
			console.log(xhr);
		}
	});
}
function makeList(res) {
	console.log(res);
	$("#title").html(res.title);
	var html = '';
	for(var i in res.data) {
		html += '<tr>';
		html += '<td>'+res.data[i].id+'</td>';
		html += '<td onclick="getData('+res.data[i].id+');">'+res.data[i].title+'</td>';
		html += '<td>'+res.data[i].writer+'</td>';
		html += '<td>'+res.data[i].wdate+'</td>';
		html += '<td>'+res.data[i].rnum+'</td>';
		html += '<td><button class="btn btn-sm btn-danger" onclick="delList('+res.data[i].id+');">삭제</button></td>';
		html += '</tr>';
	}
	$("#listTb > tbody").html(html);
}
function viewList(res) {
	var f = document.form1;
	f.id.value = res.data[0].id;
	f.title.value = res.data[0].title;
	f.content.value = res.data[0].content;
	f.writer.value = res.data[0].writer;
}
getData();
