const relogio = document.getElementById('relogio');
const data = document.getElementById('data');
const comecar = document.getElementById('comecar');
const menuLayout = document.getElementById('menuLayout');
const menuFechar = document.getElementById('menuFechar');
const selectHoras = document.getElementById('selectHoras');
const selectMin = document.getElementById('selectMin');

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
const selectH = () =>{
    for(i=0;i<24;i++){
        let o = document.createElement('option');
        o.value = i;
        i<10?o.innerText='0'+i:o.innerText=i;
        o.classList.add('optionH')
        selectHoras.appendChild(o);
    }
}
//Criar as Options dentro do selectMin
const selectM = () =>{
    for(i=0;i<60;i++){
        let o = document.createElement('option');
        o.value = i;
        i<10?o.innerText='0'+i:o.innerText=i;
        o.classList.add('optionM')
        selectMin.appendChild(o);
    }
}

//Evento do button Começar
comecar.addEventListener('click',()=>{
    menuLayout.classList.remove('off');
    menuLayout.classList.add('on');
});
//Evento do button menuFechar
menuFechar.addEventListener('click',()=>{
    menuLayout.classList.remove('on');
    menuLayout.classList.add('off');
});



horario()
datas()
selectH()
selectM()
window.setInterval(horario, 1000, datas, 5000)