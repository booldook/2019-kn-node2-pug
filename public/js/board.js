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

function upData() {
	var f = document.updateForm;
	if(f.title.value == "") {
		alert("제목을 작성하세요.");
		f.title.focus();
		return false;
	}
	if(f.content.value == "") {
		alert("내용을 작성하세요.");
		f.content.focus();
		return false;
	}
	return true;
}