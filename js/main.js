window.addEventListener('load', iniciarJuego);//evento para escuchar cuando el navegador esta cargado al 100%


function iniciarJuego() {
    var btnPetserker = document.getElementById('btn-petserker');
    btnPetserker.addEventListener('click', sleccionarPetserkerJugador);
};

function sleccionarPetserkerJugador() {
    var PetserkerJugador = document.getElementById('PetserkerJugador');
    const cropo = document.getElementById('cropo');
    const lunetai = document.getElementById('lunetai');
    const plichustan = document.getElementById('plichustan');
    const floki = document.getElementById('floki');
    const yinyin = document.getElementById('yinyin');
    const minihen = document.getElementById('minihen');
    const petserkers = ['cropo', 'lunetai', 'plichustan', 'floki', 'yinyin', 'minihen'];
    if (cropo.checked) {
        PetserkerJugador.innerHTML= petserkers[0];
    }
    else if (lunetai.checked) {
        PetserkerJugador.innerHTML= petserkers[1];
    }
    else if (plichustan.checked) {
        PetserkerJugador.innerHTML= petserkers[2];
    }
    else if (floki.checked) {
        PetserkerJugador.innerHTML= petserkers[3];
    }
    else if (yinyin.checked) {
        PetserkerJugador.innerHTML= petserkers[4];
    }
    else if (minihen.checked) {
        PetserkerJugador.innerHTML= petserkers[5];
    } else {
        alert('selecciona un petserker 🤬')
    }
};

