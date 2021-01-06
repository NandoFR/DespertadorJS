const relogio = document.getElementById('relogio');
const data = document.getElementById('data');
const comecar = document.getElementById('comecar');

// Definir horario na div
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
            diasS = 'Sabado'
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



    console.log(diasS)
}
//Abrir uma janela
const open = () => {

}
//Fechar uma janela
const close = () => {

}

window.setInterval(horario, 1000, datas, 10000)
window.onload = () => {
    horario();
    datas();
}