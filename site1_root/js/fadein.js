$(function() {
	$('.list-mv02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv02');
		}
		else{
			$(this).stop().removeClass('mv02');
		}
	});
});