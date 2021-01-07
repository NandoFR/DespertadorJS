const relogio = document.getElementById('relogio');
const data = document.getElementById('data');
const comecar = document.getElementById('comecar');
const menuLayout = document.getElementById('menuLayout');
const menuFechar = document.getElementById('menuFechar');
const selectHoras = document.getElementById('selectHoras');
const selectMin = document.getElementById('selectMin');
const volume = document.getElementById('volume');
const alarme = document.getElementById('alarme');
const cancelar = document.getElementById('Cancelar');
const iniciar = document.getElementById('Iniciar');
const testeAlarme = document.getElementById('testeAlarme');
const alarmeTocando = document.getElementById('alarmeTocando');
const horaDefinida = document.getElementById('horaDefinida');
const cancelarAlarme = document.getElementById('cancelarAlarme');
const minutoDefinido = document.getElementById('minutoDefinido');
const tituloDefinido = document.getElementById('tituloDefinido');
const titulo = document.getElementById('titulo');
const alarmeDefinido = document.getElementById('alarmeDefinido');
const alarmeDefinidoMin = document.getElementById('alarmeDefinidoMin');
var podeTocar = false;

//Definir horario na div
const horario = () => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    h < 10 ? h = '0' + h : h
    m < 10 ? m = '0' + m : m
    s < 10 ? s = '0' + s : s
    relogio.innerText = h + ':' + m + ':' + s
}
//Definir data na div
const datas = () => {
    let d = new Date();
    let diasS = d.getDay();
    let diaM = d.getDate();
    let m = d.getMonth();
    let a = d.getFullYear();
    switch (diasS) {
        case 0:
            diasS = 'Domingo'
            break;
        case 1:
            diasS = 'Segunda-Feira'
            break;
        case 2:
            diasS = 'Terça-Feira'
            break;
        case 3:
            diasS = 'Quarta-Feira'
            break;
        case 4:
            diasS = 'Quinta-Feira'
            break;
        case 5:
            diasS = 'Sexta-Feira'
            break;
        case 6:
            diasS = 'Sábado'
    }
    switch (m) {
        case 0:
            m = 'Janeiro'
            break;
        case 1:
            m = 'Fevereiro'
            break;
        case 2:
            m = 'Março'
            break;
        case 3:
            m = 'Abril'
            break;
        case 4:
            m = 'Maio'
            break;
        case 5:
            m = 'Junho'
            break;
        case 6:
            m = 'Julho'
            break;
        case 7:
            m = 'Agosto'
            break;
        case 8:
            m = 'Setembro'
            break;
        case 9:
            m = 'Outubro'
            break;
        case 10:
            m = 'Novembro'
            break;
        case 11:
            m = 'Dezembro'
            break;
    }
    data.innerText = diasS + ', ' + diaM + ' de ' + m + ' de ' + a
}
//Criar as Options dentro do selectHoras
const selectH = () => {
    for (i = 0; i < 24; i++) {
        let o = document.createElement('option');
        o.value = i;
        i < 10 ? o.innerText = '0' + i : o.innerText = i;
        o.classList.add('optionH')
        selectHoras.appendChild(o);
    }
}
//Criar as Options dentro do selectMin
const selectM = () => {
    for (i = 0; i < 60; i++) {
        let o = document.createElement('option');
        o.value = i;
        i < 10 ? o.innerText = '0' + i : o.innerText = i;
        o.classList.add('optionM')
        selectMin.appendChild(o);
    }
}
//Tocar o som do alarme
const somTocar = () => {
    alarme.play();
}
//Parar o som do alarme
const somParar = () => {
    alarme.pause();
    alarme.currentTime = 0;
}
//Tocar o som do alarme quando clicar no icone volume
const volumeTocar = () => {
    somToca r()
    volume.classList.remove('fa-volume-off');
    volume.classList.add('fa-volume-up');
    volume.removeEventListener('click', volumeTocar);
    volume.addEventListener('click', volumeParar);
}
//Parar o som do alarme quando clicar no icone volume
const volumeParar = () => {
    somParar()
    volume.classList.remove('fa-volume-up');
    volume.classList.add('fa-volume-off');
    volume.removeEventListener('click', volumeParar);
    volume.addEventListener('click', volumeTocar);
}
//Tocar o Alarme
const tocarAlarme = () => {
    alarmeTocando.classList.remove('off');
    alarmeTocando.classList.add('alarmeOn')
    let sh = selectHoras.value
    let sm = selectMin.value
    sh < 10 ?
        horaDefinida.innerText = '0' + sh + ':' :
        horaDefinida.innerText = sh + ':'
    sm < 10 ?
        minutoDefinido.innerText = '0' + sm :
        minutoDefinido.innerText = sm
    titulo.value == '' ?
        tituloDefinido.innerText = 'Alarme sem Nome' :
        tituloDefinido.innerText = titulo.value;
    somTocar()
}
//Function do button comecar
const start = () => {
    menuLayout.classList.remove('off');
    menuLayout.classList.add('on');
    selectHoras.selectedIndex = 0;
    selectMin.selectedIndex = 0;
}
//Funcionar o Alarme
const startAlarme = ()=>{
    let d = new Date();
    let sh = selectHoras.value;
    let sm = selectMin.value;
    sh < 10 ? alarmeDefinido.innerText =
        'Alarme Definido para ' +
        '0' + sh + ':' : alarmeDefinido.innerText =
        'Alarme Definido para ' + sh + ':';
    sm < 10 ? 
        alarmeDefinidoMin.innerText ='0' + sm
        : alarmeDefinidoMin.innerText = sm;
    menuLayout.classList.remove('on');
    menuLayout.classList.add('off');
    comecar.removeEventListener('click', start);
    comecar.innerText = 'Cancelar'
    comecar.addEventListener('click', () => {
        podeTocar = false;
        comecar.innerText = 'Começar';
        alarmeDefinido.innerText = '';
        alarmeDefinidoMin.innerText='';
        comecar.addEventListener('click', start);
    });
    podeTocar=true;
    logicAlarme()
}
//Logica do alarme
const logicAlarme = ()=>{
    let d = new Date();
    let sh = selectHoras.value;
    let sm = selectMin.value;
    if (d.getHours() == sh && d.getMinutes() == sm && podeTocar === true) {
        tocarAlarme()
    }
}


//Evento do button Começar
comecar.addEventListener('click', start);
//Evento do button menuFechar
menuFechar.addEventListener('click', () => {
    menuLayout.classList.remove('on');
    menuLayout.classList.add('off');
    podeTocar = false
});
//Evento do icone volume
volume.addEventListener('click', volumeTocar);
//Evento do button cancelar
cancelar.addEventListener('click', () => {
    menuLayout.classList.remove('on');
    menuLayout.classList.add('off');
    podeTocar = false
});
//Evento do button testeAlarme
testeAlarme.addEventListener('click', tocarAlarme)
//Evento do button cancelarAlarme
cancelarAlarme.addEventListener('click', () => {
    alarmeTocando.classList.remove('alarmeOn');
    alarmeTocando.classList.add('off');
    comecar.innerText = 'Começar';
    alarmeDefinido.innerText = '';
    alarmeDefinidoMin.innerText='';
    somParar();
    podeTocar = false;
})
//Evento do button iniciar
iniciar.addEventListener('click', startAlarme)

horario()
datas()
selectH()
selectM()

window.setInterval(() => {
    horario();
    datas();
    logicAlarme();
}, 1000, )