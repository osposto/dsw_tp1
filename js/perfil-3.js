document.addEventListener('DOMContentLoaded', () => {
    const movieItems = document.querySelectorAll('.movie-item');
    const modal = document.getElementById('movieModal');

    if (!modal || movieItems.length === 0) return;

    const modalTitle = document.getElementById('modal-title');
    const modalYear = document.getElementById('modal-year');
    const modalDirector = document.getElementById('modal-director');
    const modalSynopsis = document.getElementById('modal-synopsis');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = modal.querySelector('.close-btn');

    const movieData = {
        'alguien-cede': {
            title: 'Alguien tiene que ceder',
            year: '2003',
            director: 'Nancy Meyers',
            synopsis: 'Un soltero acostumbrado a salir con mujeres jóvenes conoce a la madre de su nueva pareja y descubre una conexión inesperada.',
            image: 'img/avdd/pelis/somethings_gotta_give.webp'
        },
        alien: {
            title: 'Alien, el octavo pasajero',
            year: '1979',
            director: 'Ridley Scott',
            synopsis: 'La tripulación de una nave comercial investiga una señal en un planeta remoto y debe enfrentarse a una criatura que ha llegado a bordo.',
            image: 'img/avdd/pelis/alien_octavo.webp'
        },
        terminator: {
            title: 'Terminator',
            year: '1984',
            director: 'James Cameron',
            synopsis: 'Un cyborg enviado desde el futuro busca a una mujer cuyo hijo tendrá un papel decisivo en la guerra entre humanos y máquinas.',
            image: 'img/avdd/pelis/terminator.webp'
        }
    };

    let lastMovieItem = null;

    const closeModal = () => {
        modal.classList.remove('modal-active');
        modal.classList.add('modal-hidden');
        modal.setAttribute('aria-hidden', 'true');
        lastMovieItem?.focus();
    };

    movieItems.forEach((item) => {
        item.tabIndex = 0;
        item.setAttribute('role', 'button');
        item.setAttribute('aria-haspopup', 'dialog');

        const openMovie = () => {
            const data = movieData[item.dataset.movie];
            if (!data) return;

            lastMovieItem = item;
            modalTitle.textContent = data.title;
            modalYear.textContent = data.year;
            modalDirector.textContent = data.director;
            modalSynopsis.textContent = data.synopsis;
            modalImage.src = data.image;
            modalImage.alt = `Póster de ${data.title}`;
            modalImage.style.display = 'block';

            modal.classList.remove('modal-hidden');
            modal.classList.add('modal-active');
            modal.setAttribute('aria-hidden', 'false');
            closeBtn.focus();
        };

        item.addEventListener('click', openMovie);
        item.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openMovie();
            }
        });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('modal-active')) {
            closeModal();
        }
    });
});