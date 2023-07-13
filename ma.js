
const header = document.getElementById('header');

const bienvenida = document.getElementById('bienvenida');

const contenedor = document.getElementById('container');

const navegador = document.getElementById('navegador');

let vadition = false;

header.addEventListener('click', () => {
    vadition = !vadition;
    if(vadition){
        bienvenida.style.visibility = 'visible';
        navegador.style.marginTop = '3rem'
        navegador.style.height = '2.5rem'
    }else{
        bienvenida.style.visibility = 'hidden';
        navegador.style.height =  '2rem';
        navegador.style.marginTop = '10px';
    }
    
});

const contacto = document.getElementById('contacto');

const icons = document.getElementById('icons-socials');

let validatio = false;

contacto.addEventListener('click', () =>{
    validatio = !validatio;
    if(validatio){
        icons.style.display = 'flex';
    }else{
        icons.style.display = 'none'
    }
});


