window.sr = ScrollReveal();
      // Add class to <html> if ScrollReveal is supported
      // Note: this method is deprecated, and only works in version 3
      if (sr.isSupported()) {
        document.documentElement.classList.add('sr');
      }


        sr.reveal('.bottom', {
          duration: 2000,
          origin:'bottom',
          mobile:true
        });
        sr.reveal('.top', {
          duration: 2000,
          origin:'top',
          distance:'3em',
          mobile:true
        });
        sr.reveal('.right', {
          duration: 1000,
          origin:'right',
          distance:'5em',
          mobile:true,
        },1500);
        sr.reveal('.left', {
          duration: 1000,
          origin:'left',
          distance:'5em',
          mobile:true
        });
        sr.reveal('.reveal_bottom', {
           duration: 1000,
          origin:'bottom',
          distance:'5em',
          mobile:true
        });
      



      // use rotation in reveal configuration
      sr.reveal('.reveal', { 
        container: '.revealContainer', 
      rotate: {y: 50, z:60},
      // x: 20, y: 80, 
      duration:2000,
    },2000);



 // Smooth Scrolling
      $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });