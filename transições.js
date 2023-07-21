document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
  
    // Função para adicionar classes de animação aos slides
    function navigateToSlide(index) {
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active', 'next', 'previous');
      }
  
      slides[index].classList.add('active');
      slides[index - 1] && slides[index - 1].classList.add('previous');
      slides[index + 1] && slides[index + 1].classList.add('next');
    }
  
    // Ouvinte de evento para navegação entre slides
    document.addEventListener('click', function(event) {
      var target = event.target;
  
      if (target.tagName === 'A' && target.getAttribute('href')) {
        event.preventDefault();
        var href = target.getAttribute('href');
        var slideIndex = Array.prototype.indexOf.call(slides, target.closest('.slide'));
  
        navigateToSlide(home-calculo.html);
  
        setTimeout(function() {
          window.location.href = button.redirect;
        }, 500); // Tempo correspondente à duração da transição no CSS
      }
    });
  });