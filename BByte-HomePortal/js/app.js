window.onload = function () {
    console.log("chạy");
    new WOW().init();
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    $(function () {

        if ($('.owl-2').length > 0) {
            $('.owl-2').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                margin: 20,
                smartSpeed: 1000,
                autoplay: true,
                nav: false,
                dots: false,
                pauseOnHover: false,
                responsive: {
                    600: {
                        margin: 20,
                        nav: false,
                        items: 2
                    },
                    1000: {
                        margin: 20,
                        stagePadding: 0,
                        nav: false,
                        items: 3
                    }
                }
            });
        }

        countUp('.counter0');
        countUp('.counter1');
        countUp('.counter2');
        countUp('.counter3');

        
       

    })

    

    // Header Sticky
    window.addEventListener("scroll", function () {
        let navbarArea = this.document.getElementById('navbar-area');
        if (window.pageYOffset > 0) {
            navbarArea.classList.add('nav-on-scroll');
        }
        else {
            navbarArea.classList.remove('nav-on-scroll');
        }
    })

    
}

function showDropdownMenu(obj) {
    var dropDownMenu = obj.parentNode.parentNode.lastChild;
    
    if (dropDownMenu.style.display == 'block') {
        dropDownMenu.style.display = 'none';
        obj.classList.remove('fa-minus');
        obj.classList.add('fa-plus');
    }
    else {
        dropDownMenu.style.display = 'block';
        obj.classList.add('fa-minus');
        obj.classList.remove('fa-plus');
    }
    const pmMenus = document.querySelectorAll('.p-m-menu');

    pmMenus.forEach(pmm => {
        if (obj === pmm) {
            
        }
        else {
            var dropMenu = pmm.parentNode.parentNode.lastChild;
            dropMenu.style.display = 'none';
            pmm.classList.remove('fa-minus');
            pmm.classList.add('fa-plus');
        }
    });


    // Button Hover JS
    $(function () {
        $('.default-btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });
    });


    
}
window.initializeCarousel = () => {
    

// originally forked from https://codepen.io/kkick/pen/oWZMov

}



function countUp(cl) {
    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach(entry => {
            const el = entry.target
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, {
                    duration: 2000,
                    delay: 16,
                })
                el.classList.add('is-visible')
            }
        })
    }

    const IO = new IntersectionObserver(callback, { threshold: 1 })

    const el = document.querySelector(cl)
    IO.observe(el)

    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    $('.dropdown').on('hide.bs.dropdown', function (e) {
        e.preventDefault();
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function () {
            $(this).closest('.dropdown').removeClass('open');
            $(this).closest('.dropdown').find('.dropdown-toggle').attr('aria-expanded', 'false');
        });
    });



}
