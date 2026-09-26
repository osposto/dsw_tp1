document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // LÓGICA DE PERFIL 1 (Guillermo Escobar): Modal de Películas
    // LÓGICA DE PERFIL 1 (Guillermo Escobar): Modal con Efecto Rebote
    // ---------------------------------------------------------
    console.log("Script de perfil-1 cargado correctamente.");

    // Elementos del DOM
    const movieItems = document.querySelectorAll('.movie-item');
    const modal = document.getElementById('movieModal');

    // Solo ejecutamos si estamos en la página que tiene el modal (perfil-1)
    if (modal && movieItems.length > 0) {
        const modalContent = modal.querySelector('.modal-content');
        const modalTitle = document.getElementById('modal-title');
        const modalDirector = document.getElementById('modal-director');
        const modalSynopsis = document.getElementById('modal-synopsis');
        const modalQuote = document.getElementById('modal-quote');
        const modalImage = document.getElementById('modal-image');
        const closeBtn = document.querySelector('.close-btn');

        // Base de datos de películas de Guillermo Escobar
        const movieData = {
            depredador: {
                title: "Depredador",
                director: "John McTiernan",
                synopsis: "Depredador (1987) narra la historia de un equipo de rescate de élite estadounidense liderado por el Mayor Alan (\"Dutch\") Schaeffer (Arnold Schwarzenegger), que es enviado a una densa jungla en América Central con la misión de rescatar a un rehén de una facción guerrillera.",
                quote: '"Si sangra, podemos matarlo."',
                image: "img/gescobar/pelis/depredador.webp"
            },
            johnwick: {
                title: "John Wick",
                director: "Chad Stahelski y David Leitch",
                synopsis: "John Wick (2014) es una película de acción estadounidense protagonizada por Keanu Reeves como el personaje principal, John Wick, un exasesino a sueldo que busca venganza tras la muerte de su perro, un regalo de su difunta esposa.",
                quote: '"John no era exactamente el Coco. Era a quien envías a matar al maldito Coco."',
                image: "img/gescobar/pelis/johnwick.webp"
            },
            prometheus: {
                title: "Prometheus",
                director: "Ridley Scott",
                synopsis: "Prometeo (Prometheus, 2012) es una película de ciencia ficción y terror dirigida por Ridley Scott que sirve como precuela conceptual de la saga Alien. La historia trata sobre una tripulación que viaja a un planeta lejano en busca de los creadores de la humanidad, pero termina descubriendo una oscura amenaza biológica que pone en peligro a toda la Tierra.",
                quote: '"Las cosas más grandes tienen un comienzo muy pequeño."',
                image: "img/gescobar/pelis/prometheus.webp"
            }
        };

        // Función para cerrar el modal con animación de salida
        const closeModal = () => {
            if (modal.classList.contains('modal-hidden')) return;

            if (modalContent) {
                const bounceOut = modalContent.animate([
                    { transform: 'scale(1) translateY(0)', opacity: 1 },
                    { transform: 'scale(1.05) translateY(-8px)', opacity: 0.9, offset: 0.25 },
                    { transform: 'scale(0.3) translateY(50px)', opacity: 0 }
                ], {
                    duration: 250,
                    easing: 'ease-in',
                    fill: 'forwards'
                });

                bounceOut.onfinish = () => {
                    modal.classList.remove('modal-active');
                    modal.classList.add('modal-hidden');
                };
            } else {
                modal.classList.remove('modal-active');
                modal.classList.add('modal-hidden');
            }
        };

        // Asignar eventos de clic a cada película en la lista
        movieItems.forEach(item => {
            item.addEventListener('click', () => {
                const movieId = item.getAttribute('data-movie');
                const data = movieData[movieId];

                if (data) {
                    modalTitle.textContent = data.title;
                    modalDirector.textContent = data.director;
                    modalSynopsis.textContent = data.synopsis;
                    modalQuote.textContent = data.quote;

                    if (data.image) {
                        modalImage.src = data.image;
                        modalImage.style.display = 'block';
                    } else {
                        modalImage.style.display = 'none';
                    }

                    // Mostrar modal quitando la clase hidden y agregando active
                    modal.classList.remove('modal-hidden');
                    modal.classList.add('modal-active');

                    // Efecto de aparición con rebote elástico (Bounce In) mediante Web Animations API
                    if (modalContent) {
                        modalContent.animate([
                            { transform: 'scale(0.2) translateY(-80px)', opacity: 0 },
                            { transform: 'scale(1.12) translateY(12px)', opacity: 0.9, offset: 0.5 },
                            { transform: 'scale(0.9) translateY(-6px)', opacity: 1, offset: 0.7 },
                            { transform: 'scale(1.03) translateY(2px)', opacity: 1, offset: 0.85 },
                            { transform: 'scale(1) translateY(0)', opacity: 1 }
                        ], {
                            duration: 550,
                            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            fill: 'forwards'
                        });
                    }
                }
            });
        });

        // Cerrar modal al hacer clic en la "X"
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        // Cerrar modal al hacer clic fuera de la caja de contenido
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Cerrar modal con la tecla Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('modal-active')) {
                closeModal();
            }
        });
    }
});
