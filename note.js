	$(document).ready(function(){
    	$('.my-editor').notebook();
    	$(".my-editor").append("<p>Hello everyone</p>");
    	$("p").attr('contenteditable', 'true');
	});