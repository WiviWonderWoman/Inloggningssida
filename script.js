'use strict';
console.log('test');
const app = {
    key: "test",
    value: "1234",
    meny: document.getElementById('meny'),
    inKnapp: document.createElement('button'),
    utKnapp: document.createElement('button'),
    reKnapp: document.createElement('button'),   
}
localStorage;
console.log(localStorage);
if (localStorage.length === 1){
    welcomePage();
}
else{
    inlogPage();
}
function inlogPage(){
    document.body.innerHTML = "";
    document.body.insertAdjacentHTML("afterbegin",`<br /><h1 id = "h1">LOGGA IN</h1><label for= "namnFält">Användarnamn</label><br/ >
    <input id = "namnFält"></input><br /><label for= "lösenFält">Lösenord</label><br/ ><input id = "lösenFält"></input><br /><br />`);
    app.inKnapp.innerText = 'Logga in';

    document.body.appendChild(app.inKnapp).addEventListener('click', function(){
        const namn = namnFält.value;
        const lösen = lösenFält.value;
        console.log(namn);
        console.log(lösen);

        if (namn === app.key && lösen === app.value){
            localStorage.setItem(namn, lösen);
            welcomePage();
            console.log(localStorage);
        }

        else if (namn !== app.key && lösen !== app.value){
            document.body.innerHTML = "";
            document.body.insertAdjacentHTML("afterbegin",`<br /><h1 id = "h1">HOPPSAN!</h1><br/ ><p>Har du glömt dina inloggningsuppgifter?</p><br/ >`);
            document.body.appendChild(app.reKnapp).innerText = 'Försök igen';
            app.reKnapp.addEventListener('click', function(){
                inlogPage();
                console.log(localStorage);
             });
        }      
    });
};
console.log(localStorage);

function welcomePage(){
    document.body.innerHTML = "";
    document.body.insertAdjacentHTML("afterbegin",`<br /><h1 id = "h1">VÄLKOMMEN!</h1><br/ ><br/ >`);
    app.utKnapp.innerText = 'Logga ut';
    document.body.appendChild(app.utKnapp).addEventListener('click', function(){
        localStorage.clear();
        console.log(localStorage);
        document.body.innerHTML = "";
        document.body.insertAdjacentHTML("afterbegin",`<br /><h1 id = "h1">TACK FÖR BESÖKET!</h1><br/ ><br/ >`);
        document.body.appendChild(app.reKnapp).innerText = "Tillbaka";
        app.reKnapp.addEventListener('click', function(){
            inlogPage();
        });
    });
};