window.addEventListener('load', iniciarJuego);//evento para escuchar cuando el navegador esta cargado al 100%

function iniciarJuego() {
    var btnPetserker = document.getElementById('btn-petserker');
    btnPetserker.addEventListener('click', sleccionarPetserkerJugador);
};

function sleccionarPetserkerJugador() {
    let cropo = document.getElementById('cropo');
    let lunetai= document.getElementById('lunetai');
    let plichustan= document.getElementById('plichustan');
    let floki= document.getElementById('floki');
    let yinyin= document.getElementById('yinyin');
    let minihen= document.getElementById('minihen');
    
    if(cropo.checked){
        alert('seleccionaste cropo');
    }
    else if (lunetai.checked){
        alert('seleccionaste lunetai');
    }
    else if (plichustan.checked){
        alert('seleccionaste plichustan');
    }
    else if (floki.checked){
        alert('seleccionaste floki');
    }
    else if (yinyin.checked){
        alert('seleccionaste yinyin');
    }
    else if (minihen.checked){
    alert('seleccionaste minihen');        
    }
};
