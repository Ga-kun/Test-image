$(function () {

	$('.menuToggle').on('click', function () {
		$('.main-nav').slideToggle(500, function () {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
		$('.main-nav__link').on('click', function () {
			$('.main-nav').hide(100, function(){
				if ($(this).css('display') === 'none') {
					$(this).removeAttr('style');
				}
			});
		});
	});
});