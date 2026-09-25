document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // PERFIL 2 - ORLANDO SPOSTO
    // Función dinámica: Modal interactivo para películas favoritas
    // ---------------------------------------------------------
    const movieItems = document.querySelectorAll('.movie-item');
    const modal = document.getElementById('movieModal');
    
    if (modal && movieItems.length > 0) {
        const modalTitle = document.getElementById('modal-title');
        const modalDirector = document.getElementById('modal-director');
        const modalSynopsis = document.getElementById('modal-synopsis');
        const modalQuote = document.getElementById('modal-quote');
        const modalImage = document.getElementById('modal-image');
        const closeBtn = document.querySelector('.close-btn');

        // Base de datos de películas
        const movieData = {
            silencio: {
                title: "El Silencio de los Inocentes",
                director: "Jonathan Demme",
                synopsis: "Una joven cadete del FBI debe pedir ayuda a un asesino caníbal encarcelado para atrapar a otro asesino en serie que despelleja a sus víctimas.",
                quote: '"Uno del censo intentó hacerme una encuesta. Me comí su hígado con unos cuantos frijoles y un excelente Chianti."',
                image: "img/osposto/pelis/silencio_inocentes.webp"
            },
            padrino: {
                title: "El Padrino",
                director: "Francis Ford Coppola",
                synopsis: "El envejecido patriarca de una dinastía del crimen organizado en Nueva York transfiere el control de su imperio clandestino a su hijo, desencadenando traiciones y violencia.",
                quote: '"Le haré una oferta que no podrá rechazar."',
                image: "img/osposto/pelis/el_padrino.webp"
            },
            alien: {
                title: "Alien",
                director: "Ridley Scott",
                synopsis: "La tripulación de la nave espacial Nostromo es despertada de su sueño criogénico para investigar una transmisión desconocida proveniente de una luna desolada.",
                quote: '"En el espacio, nadie puede oírte gritar."',
                image: "img/osposto/pelis/alien.webp"
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
                }
            });
        });

        // Cerrar modal al hacer clic en la "X"
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('modal-active');
            modal.classList.add('modal-hidden');
        });

        // Cerrar modal al hacer clic fuera de la caja de contenido
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('modal-active');
                modal.classList.add('modal-hidden');
            }
        });
    }
});
