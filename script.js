const buton1 = document.getElementById('raspuns1');
const buton2 = document.getElementById('raspuns2');
const buton3 = document.getElementById('raspuns3');
const buton4 = document.getElementById('raspuns4');
const butonStart = document.getElementById('butonStart');
const urmatorul = document.getElementById('urmatorul-buton');
const intrebareElement = document.getElementById('intrebare');
const stergeButon = document.getElementById('sterge-buton');
const clasamentButon = document.getElementById('butonScor');
const pozitieElemente = document.getElementById('raspuns-container');
let validareButon1 = 0;
let validareButon2 = 0;
let validareButon3 = 0;
let validareButon4 = 0;
let i = 0;
let corect = 0;
let scor = 0;

fetch('http://localhost:3000/toate').then(response =>{
    return response.json()
}).then(data =>{
    console.log(data[0].intrebare);
    console.log(data[0].raspunsuri[0][0]);
    console.log(data[0].raspunsuri[1][0]);
    console.log(data[0].raspunsuri[2][0]);
    console.log(data[0].raspunsuri[3][0]);
    butonStart.addEventListener('click',function start(){
        butonStart.style.display = 'none';
        clasamentButon.style.display = 'none';
        urmatorul.style.display = 'flex';
        stergeButon.style.display = 'flex';
        buton1.style.display = 'inline';
        buton2.style.display = 'inline';
        buton3.style.display = 'inline';
        buton4.style.display = 'inline';
        intrebareElement.innerText = data[0].intrebare;
        buton1.innerText = data[0].raspunsuri[0][0];
        buton2.innerText = data[0].raspunsuri[1][0];
        buton3.innerText = data[0].raspunsuri[2][0];
        buton4.innerText = data[0].raspunsuri[3][0];
    });
    urmatorul.addEventListener('click',()=>{
        validareButon1 = 0;
        validareButon2 = 0;
        validareButon3 = 0;
        validareButon4 = 0;
        scor+=corect;
        buton1.style.backgroundColor = 'darkolivegreen';
        buton2.style.backgroundColor = 'darkolivegreen';
        buton3.style.backgroundColor = 'darkolivegreen';
        buton4.style.backgroundColor = 'darkolivegreen';
        i+=1;
        if (i>=data.length){
            i = 0;
            scorSalvat = scor;
            numeSalvat = window.prompt('Introduceti numele dvs','utilizator');
            urmatorul.style.display = 'none';
            stergeButon.style.display = 'none';
            buton1.style.display = 'none';
            buton2.style.display = 'none';
            buton3.style.display = 'none';
            buton4.style.display = 'none';
            butonStart.style.display = 'inline';
            clasamentButon.style.display = 'inline';
            if (numeSalvat != null){
            localStorage.setItem(numeSalvat,scorSalvat);
            }
            alert(`Scorul este: ${scor}`);
            scor = 0;
        }
        //intrebareElement.innerText = intrebari[i].intrebare;
        intrebareElement.innerText = data[i].intrebare;
        //buton1.innerText = intrebari[i].raspuns[0][0];
        //buton2.innerText = intrebari[i].raspuns[1][0];
        //buton3.innerText = intrebari[i].raspuns[2][0];
        //buton4.innerText = intrebari[i].raspuns[3][0];
        buton1.innerText = data[i].raspunsuri[0][0];
        buton2.innerText = data[i].raspunsuri[1][0];
        buton3.innerText = data[i].raspunsuri[2][0];
        buton4.innerText = data[i].raspunsuri[3][0];
    })
    buton1.addEventListener('click',()=>{
        if (validareButon1 == 0){
            buton1.style.backgroundColor = 'darkorange';
            validareButon1 = 1;
        }
        if (validareButon1 == 1 && data[i].raspunsuri[0][1] == "true"){
            corect = 1;
        }
    });
    buton2.addEventListener('click',()=>{
        if (validareButon2 == 0){
            buton2.style.backgroundColor = 'darkorange';
            validareButon2 = 1;
        }
        if (validareButon2 == 1 && data[i].raspunsuri[1][1] == "true"){
            corect = 1;
        }
    });
    buton3.addEventListener('click',()=>{
        if (validareButon3 == 0){
            buton3.style.backgroundColor = 'darkorange';
            validareButon3 = 1;
        }
        if (validareButon3 == 1 && data[i].raspunsuri[2][1] == "true"){
            corect = 1;
        }
    });
    buton4.addEventListener('click',()=>{
        if (validareButon4 == 0){
            buton4.style.backgroundColor = 'darkorange';
            validareButon4 = 1;
        }
        if (validareButon4 == 1 && data[i].raspunsuri[3][1] == "true"){
            corect = 1;
        }
    });

    
    stergeButon.addEventListener('click',()=>{
        buton1.style.backgroundColor = 'darkolivegreen';
        buton2.style.backgroundColor = 'darkolivegreen';
        buton3.style.backgroundColor = 'darkolivegreen';
        buton4.style.backgroundColor = 'darkolivegreen';
        validareButon1 = 0;
        validareButon2 = 0;
        validareButon3 = 0;
        validareButon4 = 0;
    })
    
    clasamentButon.addEventListener('click',()=>{
        if(localStorage.length == 0){
            let elementInexistent = document.createElement('p');
            elementInexistent.innerText = 'Nu s-a gasit nici-un scor anterior';
            pozitieElemente.appendChild(elementInexistent);
        }
        butonStart.style.display = 'none';
        clasamentButon.style.display = 'none';
        for (let i = 0;i<localStorage.length;i++){
        let element = document.createElement('p');
        element.style.margin = '1vw';
        element.innerText = `Scorul lui ${localStorage.key(i)} a fost: ${localStorage.getItem(localStorage.key(i))}`;
        pozitieElemente.appendChild(element);
        }
    })
});






