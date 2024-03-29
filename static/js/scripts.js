/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function onCounterVisible(callback) {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback();
                observer.disconnect();
            }
        });
    }, { threshold: 1.0 });

    counters.forEach(counter => observer.observe(counter));
}

// Function to slide diamond when user scrolls to it
function slideDiamond() {
    var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let fadedIn = false; //text fade

    window.addEventListener('scroll', function() {
        var diamond = document.querySelector('.blue-diamond');
        var wdiamond = document.querySelector('.white-diamond');
        var fadeimage = document.querySelector('.impact-image');
        var diamondTop = diamond.getBoundingClientRect().top;
        var diamondBottom = diamond.getBoundingClientRect().bottom;
        var windowHeight = window.innerHeight;
        var st = window.pageYOffset || document.documentElement.scrollTop;

        // Check if diamond has come into view while scrolling down
        if (diamondTop < windowHeight && st > lastScrollTop) {
            diamond.style.left = '-5rem';
            diamond.style.visibility = 'visible';
            wdiamond.style.left = '-10rem';
            wdiamond.style.visibility = 'visible';
            fadeimage.style.visibility = 'hidden';
            element.classList.add('fade-in');
        } 
        // Image reveal function
        const imageSections = document.querySelectorAll('.portfolio-link');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const overlay = entry.target.querySelector('.portfolio-overlay');
                    overlay.style.transform = 'scaleY(0)'; // Shrink the overlay from the bottom
               // } else {
               //     const overlay = entry.target.querySelector('.portfolio-overlay');
               //     overlay.style.transform = 'scaleY(1)'; // Reset the overlay to full height
                }
            });
        }, { threshold: 0.1 });

        imageSections.forEach(imageSection => observer.observe(imageSection));
/*
        // Add Fade-in animation to your image and text
        document.querySelectorAll('.fade-in-element').forEach(element => {
            element.classList.add('fade-in');
        });

        // Check if diamond is out of view while scrolling up
        else if (st < lastScrollTop ) {
            diamond.style.left = '-100%';
            diamond.style.visibility = 'hidden';
        }
*/
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    });
}

slideDiamond();
// Strategy Display hidden Text
let buttons = document.querySelectorAll('.cross-button');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('rotated');
        this.nextElementSibling.classList.toggle('revealed');
        this.classList.toggle('changed');
    });
});

// Counter Animation
function startAnimation() {
    function animateCounter() {
        const counters = document.querySelectorAll('.counter');
        const speed = 10000;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-target'));
                const count = parseInt(counter.innerText);
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }
    document.addEventListener('DOMContentLoaded', animateCounter);

    onCounterVisible(() => {
        document.removeEventListener('DOMContentLoaded', animateCounter);
        animateCounter();
    });
}
document.addEventListener('DOMContentLoaded', startAnimation);
