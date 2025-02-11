document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
    navegacionFija();
    resaltarEnlace();
    scrollNav();
});

function navegacionFija(){
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    document.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed');
        }else{
            header.classList.remove('fixed');
        }
    });

    
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    const CANTIDAD_IMAGENES = 16;

    for(let i = 1;i <= CANTIDAD_IMAGENES; i++ ){
        const imagen = document.createElement('IMG');

        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'Imagen Galeria';

        //Event Handler
        imagen.onclick = function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i){
    const modal = document.createElement('DIV');
    const body = document.querySelector('body');
    const imagen = document.createElement('IMG'); 
    const cerrarModalBtn = document.createElement('BUTTON');

    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen Galeria';
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.textContent = 'X';

    modal.classList.add('modal');
    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);

    body.classList.add('overflow-hidden');
    body.appendChild(modal);

    modal.onclick = cerrarModal
    cerrarModalBtn.onclick =cerrarModal
}

function cerrarModal(){
    const modal = document.querySelector('.modal');
    const body = document.querySelector('body');
    modal.classList.add('fade-out');

    setTimeout(()=>{
        modal?.remove();
        body.classList.remove('overflow-hidden');
    },500)
}

function resaltarEnlace(){
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach(section =>{
            const sectionTop = section.offsetTop // propiedad: retorna la distancia del elemento actual respecto al borde superior del nodo 
            const sectionHeight = section.clientHeight//Propiedad: devuelve la altura de un elemento en píxeles, incluyendo el padding pero no las barras horizontales, el borde o el margen.
            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id;
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual){
                const header = document.querySelector('.header');

                link.classList.add('active');
                if(link.getAttribute('href') === '#boletos'){
                    header.classList.add('zindex');
                }else{
                    header.classList.remove('zindex');
                }
            }
        })
    })
}

function scrollNav(){
    const navlinks = document.querySelectorAll('.navegacion-principal a');
     
    navlinks.forEach(link => {
        link.addEventListener('click', e =>{
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);
            section.scrollIntoView({behavior: 'smooth'});
        })
    });
}
