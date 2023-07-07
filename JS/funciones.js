
const socialLinks = document.querySelectorAll('.social-icons a');
socialLinks.forEach(link => {
    link.addEventListener('click', shareOnSocialMedia);
});

function shareOnSocialMedia(e) {
    e.preventDefault();
    const url = this.href; 
    window.open(url, '_blank', 'width=600,height=400');
}


const btnMenu = document.getElementById('btn-menu');
    btnMenu.addEventListener('click', opacidadvideo);

const nav = document.getElementById('menu-nav')

const video = document.getElementById('video-reel');

let clickon = false;
    
function opacidadvideo(e) {
    e.preventDefault();
    console.log('funciona hasta aca');
    clickon = !clickon;
    if (clickon) {
        console.log('sirve')
        video.style.setProperty("filter", "blur(7px)")
        console.log('anda')
        nav.style.visibility = 'visible'
    } else {
        video.style.setProperty("filter", "none")
        nav.style.visibility = 'hidden'
    }
}
const btnSoundOn = document.getElementById('btn-soundon');
const btnSoundOff = document.getElementById('btn-soundoff');




btnSoundOn.addEventListener('click', toggleSoundOn);
btnSoundOff.addEventListener('click', toggleSoundOff);

function toggleSoundOn(e) {
    e.preventDefault();
    video.muted = false;
    btnSoundOn.style.visibility = 'hidden';
    btnSoundOff.style.visibility = 'visible';
}

function toggleSoundOff(e) {
    e.preventDefault();
    video.muted = true;
    btnSoundOn.style.visibility = 'visible';
    btnSoundOff.style.visibility = 'hidden';
}

const elementos = document.querySelectorAll('.elemento');

elementos.forEach((elemento) => {
    const imagen = elemento.querySelector('img');
    const btnImg = elemento.querySelector('.btn-img');
    const btnInfo = elemento.querySelector('#btn-info');
    const description = elemento.querySelector('.description');
    const btnCerrar = elemento.querySelector('.btn-cerrar');

    let varr = false;

    imagen.addEventListener('click', decenfoco);

    function decenfoco(e) {
        e.preventDefault();
        varr = !varr;
        if (varr) {
            imagen.style.setProperty("filter", "blur(7px)");
            btnImg.style.visibility = 'visible';
        } else {
            imagen.style.setProperty("filter", "none");
            btnImg.style.visibility = 'hidden';
        }

        if (!elemento.classList.contains('description')) {
            description.style.visibility = 'hidden';
        }
    }

    btnInfo.addEventListener('click', () => {
        description.style.visibility = 'visible';
        btnImg.style.visibility = 'hidden';
         // Agregar esta línea para eliminar el filtro
    });

    btnCerrar.addEventListener('click', () => {
        description.style.visibility = 'hidden';
        imagen.style.setProperty("filter", "none");
        varr = !varr;
    });
});


const btnwts = document.getElementById("btnEnviarWhatsAppp")
    btnwts.addEventListener('click', enviarMensaje); 
const mensaje = document.getElementById('mensaje');

function enviarMensaje() {
    
    let numero = "2664981776"; // Ingresa el número de teléfono aquí
    let texto = mensaje.value

            // Generar el enlace de WhatsApp
    var url = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + encodeURIComponent(texto);

            // Abrir WhatsApp en una nueva pestaña
    window.open(url)
}