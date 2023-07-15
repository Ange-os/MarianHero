
const header = document.getElementById('header');

const bienvenida = document.getElementById('bienvenida');

const contenedor = document.getElementById('container');

const navegador = document.getElementById('navegador');

let vadition = false;

header.addEventListener('click', () => {
    vadition = !vadition;
    if(vadition){
        bienvenida.style.visibility = 'visible';
        navegador.style.marginTop = '3.2rem'
        navegador.style.height = '2.5rem'
    }else{
        bienvenida.style.visibility = 'hidden';
        navegador.style.height =  '1.5rem';
        navegador.style.marginTop = '10px';
    }
});
    
    var prevScrollpos = window.pageYOffset;
    
    window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
        navegador.style.display = "block";
    } else {
        header.style.top = "-180px";
        navegador.style.display = "none"
    }
    prevScrollpos = currentScrollPos;
    });