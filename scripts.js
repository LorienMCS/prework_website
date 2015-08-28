$(document).ready(function(){
	var gif = $('#gifMovie');
	var img = $('#gifStill');
	img.hide();
	$('button').on('click',function(){
		if(($(this).text()) == ('Turn GIF off')){
			gif.hide();
			img.show();
			$(this).text('Turn GIF on');
		} else {
			img.hide();
			gif.show();
			$(this).text('Turn GIF off');
		}
	});
});
