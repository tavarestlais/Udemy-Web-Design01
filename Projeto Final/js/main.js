(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var $menu = new Menu({
        container: '.header-nav',
        toggleBtn: '.header-button-menu',
        widthEnabled: 1024
    })

    var $carouselimg = new Carousel({
        container: '.laptop-slider .slideshow',
        itens: 'figure',
        btnPrev:'.prev',
        btnNext:'.next'

    })


    var $carouselquote = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev:'.prev',
        btnNext:'.next'

    })
})()