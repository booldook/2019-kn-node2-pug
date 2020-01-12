$("#btUpdate").click(function(){
	location.href = "/pug/update/"+$(this).data("id");
});
$("#btDelete").click(function(){
	if(confirm("정말로 삭세하시겠습니까?")) {
		location.href = "/pug/delete/"+$(this).data("id");
	}
});
$("#btList").click(function(){
	location.href = "/pug";
});