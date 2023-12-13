let ataqueJugador 

function iniciarJuego() {
    let btnPetserker = document.getElementById('btn-petserker');
    btnPetserker.addEventListener('click', sleccionarPetserkerJugador);

    let btn_fuego = document.getElementById('btn-fuego');
    btn_fuego.addEventListener('click', ataqueFuego);

    let btn_agua = document.getElementById('btn-agua');
    btn_agua.addEventListener('click', ataqueAgua);

    let btn_tierra = document.getElementById('btn-tierra');
    btn_tierra.addEventListener('click', ataqueTierra);

    let btn_viento = document.getElementById('btn-viento');
    btn_viento.addEventListener('click', ataqueViento);

};

function ataqueFuego(){
    ataqueJugador = 'FUEGO';
    alert(ataqueJugador);
};

function ataqueAgua(){
    ataqueJugador = 'AGUA';
    alert(ataqueJugador);
};

function ataqueTierra(){
    ataqueJugador = 'TIERRA';
    alert(ataqueJugador);
};

function ataqueViento(){
    ataqueJugador = 'VIENTO';
    alert(ataqueJugador);
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
        return alert('selecciona un petserker 🐉');
    };

    seleccionPetserkerEnemigo();
};

function seleccionPetserkerEnemigo() {
    const petserkerEnemiga = document.getElementById('PetserkerEnemiga');
    let petserkerAleatorio = aleatorio(6, 1)
    if (petserkerAleatorio == 6) {
        petserkerAleatorio = 0;
        petserkerEnemiga.innerHTML= 'enemiga es ' + listaPetserkers(petserkerAleatorio);
    }else{
        petserkerEnemiga.innerHTML= 'enemiga es ' + listaPetserkers(petserkerAleatorio);
    }
};

function aleatorio(max, min) {
    let resultado = 0;
    return resultado = Math.floor(Math.random() * (max - min + 1) + 1);
}

function listaPetserkers(num) {
    var petserkers = ['cropo', 'lunetai', 'plichustan', 'floki', 'yinyin', 'minihen'];
    return petserkers[num];
}; 


window.addEventListener('load', iniciarJuego);//evento para escuchar cuando el navegador esta cargado al 100%
