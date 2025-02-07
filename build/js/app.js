document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

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

