window.addEventListener('load', iniciarJuego);//evento para escuchar cuando el navegador esta cargado al 100%


function iniciarJuego() {
    var btnPetserker = document.getElementById('btn-petserker');
    btnPetserker.addEventListener('click', sleccionarPetserkerJugador);
};

function sleccionarPetserkerJugador() {
    const cropo = document.getElementById('cropo');
    const lunetai = document.getElementById('lunetai');
    const plichustan = document.getElementById('plichustan');
    const floki = document.getElementById('floki');
    const yinyin = document.getElementById('yinyin');
    const minihen = document.getElementById('minihen');
    const petserkerJugador = document.getElementById('PetserkerJugador');

    if (cropo.checked) {
        petserkerJugador.innerHTML = listaPetserkers(0);
    }
    else if (lunetai.checked) {
        petserkerJugador.innerHTML = listaPetserkers(1);
    }
    else if (plichustan.checked) {
        petserkerJugador.innerHTML = listaPetserkers(2);
    }
    else if (floki.checked) {
        petserkerJugador.innerHTML = listaPetserkers(3);
    }
    else if (yinyin.checked) {
        petserkerJugador.innerHTML = listaPetserkers(4);
    }
    else if (minihen.checked) {
        petserkerJugador.innerHTML = listaPetserkers(5);
    } else {
        alert('selecciona un petserker 🤬')
    }

    seleccionPetserkerEnemigo();
};

function seleccionPetserkerEnemigo() {
    const petserkerEnemiga = document.getElementById('PetserkerEnemiga');
    var petserkerAleatorio = aleatorio(6, 1)
    if (petserkerAleatorio == 6) {
        petserkerAleatorio = 0;
        petserkerEnemiga.innerHTML= listaPetserkers(petserkerAleatorio);
    }else{
        petserkerEnemiga.innerHTML= listaPetserkers(petserkerAleatorio);
    }
};

function aleatorio(max, min) {
    let resultado = 0;
    return resultado = Math.floor(Math.random() * (max - min + 1) + 1);
}

function listaPetserkers(num) {
    var petserkers = ['cropo', 'lunetai', 'plichustan', 'floki', 'yinyin', 'minihen'];
    return petserkers[num];
}