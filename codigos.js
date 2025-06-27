document.addEventListener('DOMContentLoaded', () => {
  // --- ANIMAÇÃO DE SCROLL (REVELAR SEÇÕES) ---
  // Esta função usa IntersectionObserver para adicionar a classe 'visible'
  // às seções quando elas entram na tela, criando um efeito de "fade in".
  const sectionsToAnimate = document.querySelectorAll('main section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 
  });

  // Adiciona a classe 'hidden' para o estado inicial e começa a observar cada seção.
  sectionsToAnimate.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });


  // --- FORMULÁRIO DE CONTATO ---
  // Lembre-se: este formulário apenas mostra um alerta. Para funcionar de verdade,
  // você precisará de um serviço como o Formspree.io.
  // const form = document.getElementById('form-contato');
  // if (form) {
  //   form.addEventListener('submit', function(e) {
  //     e.preventDefault(); // Impede o envio padrão do formulário
  //     alert('Mensagem enviada com sucesso! (Isso é uma demonstração)');
  //     form.reset(); // Limpa os campos do formulário
  //   });
  // }

 AOS.init({
      duration: 800,      // Duração da animação em milissegundos
      easing: 'ease-in-out', // Curva de aceleração da animação
      once: true,         // Animação acontece apenas uma vez por elemento
      delay: 100,         // Atraso geral para o início da animação
    });

// --- INICIA A GLIGHTBOX ---
    // Esta linha procura todos os links com a classe 'glightbox' e os ativa.
    const lightbox = GLightbox({
        loop: true, // Permite navegar entre os vídeos dentro do lightbox
    });

    // --- CÓDIGO PARA INICIAR O SLIDER DE PORTFÓLIO (Swiper) ---
    const swiper = new Swiper('.portfolio-slider', {
        // ... suas configurações do swiper ...
    });

  // --- ROLAGEM SUAVE AO CLICAR NOS LINKS DO MENU ---
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });


  // --- EVENTO DE ROLAGEM (MENU ATIVO E BOTÃO "VOLTAR AO TOPO") ---
  const allSections = document.querySelectorAll('main section');
  const allNavLinks = document.querySelectorAll('nav a');
  const backToTopBtn = document.getElementById('back-to-top'); 

  // Verifica se o botão realmente existe antes de adicionar o evento de clique
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    window.addEventListener('scroll', () => {
      let currentSectionId = '';

      // Lógica para destacar o link do menu ativo
      allSections.forEach(section => {
        const sectionTop = section.offsetTop;
        // O valor 80 é um ajuste para a altura do seu header fixo
        if (window.scrollY >= sectionTop - 80) {
          currentSectionId = section.getAttribute('id');
        }
      });

      allNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });

      // Lógica para mostrar/esconder o botão "Voltar ao Topo"
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
  }
});
  // ---SLIDER DE PORTFÓLIO ---
    const swiper = new Swiper('.portfolio-slider', {
        // Efeito do slider
        effect: 'coverflow', 
        grabCursor: true,    
        centeredSlides: true, 
        slidesPerView: 'auto', 
        loop: true,          // Permite navegar infinitamente
        
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false, 
        },

        // Navegação por setas
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

