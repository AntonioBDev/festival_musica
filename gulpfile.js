import {src, dest, watch} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass);

export function css(done){
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('build/css'))

    done();
}

export function dev(){
    watch('src/scss/app.scss',css)
}


export function hola(done){
//  const texto = document.createElement("H1");
//  const body = document.querySelector("body");
//  texto.textContent = "Hola mundo";
//  texto.classList.add("color-blanco")
//  body.appendChild(texto)
    console.log("hola")

    done();// indicacion de que la tarea a terminado 
 
}