(function($) {
	var items = $('.slides li').width();
	$('.gallery').flexslider({
		animation: 'slide',
		slideshow: false,
		controlNav: false,
		directionNav: false,
		itemWidth: items,
		itemMargin: 8,
		minItems: 1,
		maxItems: 2
	});

/////// responsive menu

	$('<select />').appendTo('#navigation');

	$('<option />', {
    	'selected': 'selected',
    	'value': '',
    	'text': '- Menu -'
	}).appendTo('#navigation select');

	$('nav a').each(function () {
    	var el = $(this);
   		$('<option />', {
        	'value': el.attr('href'),
        	'text': el.text()
    	}).appendTo('#navigation select');
	});

	$('#navigation select').change(function () { window.location = $(this).find('option:selected').val();});

/////// imagenes equipo

	$('.thumbnail').each(function(){
	    var imageUrl = $(this).find('img').attr('src');
		$(this).css('background-image', 'url("' + imageUrl + '")');
	});

/////// mosaico laboratorio
	$('#mosaic').freetile({
		selector: 'article'
	});

/////// tabs
	$('.nav-tabs li:first').addClass('active').show();
	$('.content.tabs:first').show();

	$('.nav-tabs li').on('click', function() {
		$('.nav-tabs li').removeClass('active');
		$(this).addClass('active');
		$('.content.tabs').hide();
		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn();
		//$('html, body').stop().animate({scrollTop: $(activeTab).offset().top}, 1000);
		return false;
	});

/////// sub menu laboratorio
  $('.sub-menu a').on('click', function(e) {
    e.preventDefault();

    var term = $(this).attr('href');

    $('#mosaic article').not('.'+term).fadeOut();
    $('#mosaic article.'+term).fadeIn();

    $('.active').removeClass('active');
    $(this).parent().addClass('active');
  });

/////// form aplicar
	 $('.aplicar').on('click', function() {
		var scrollPoint = $(this).attr('href');
		$('.contact-frame').slideDown(800);
		$('html, body').stop().animate({scrollTop: $(scrollPoint).offset().top}, 1000);
		return false;
  	});

})(jQuery);
