'use strict';

//Kontroll
console.log('test');

//Samlar de flesta variabler som properties till ettt objekt
const app = 
{
    key: "test",
    value: "1234",
    inKnapp: document.createElement('button'),
    utKnapp: document.createElement('button'),
    reKnapp: document.createElement('button'),   
}

//Funktionen för välkomnstsidan
function welcomePage() 
{
    document.body.innerHTML = "";
    document.body.insertAdjacentHTML("afterbegin",`<br /><h1 id = "h1">VÄLKOMMEN!</h1><br/ ><br/ >`);
    app.utKnapp.innerText = 'Logga ut';

    //Lyssnar efter klick, tömmer minnet, visar avskedsmeddeland, tillbaka knapp
    document.body.appendChild(app.utKnapp).addEventListener('click', function() 
    {
        localStorage.clear();

        //Kontroll
        console.log(localStorage);

        document.body.innerHTML = "";
        document.body.insertAdjacentHTML("afterbegin",`<br /><h1 id = "h1">TACK FÖR BESÖKET!</h1><br/ ><br/ >`);
        document.body.appendChild(app.reKnapp).innerText = "Tillbaka";
        
        //Lyssar efter klick och anropar funktionen för inloggningssidan
        app.reKnapp.addEventListener('click', function()
        {
            inlogPage();
        });
    });
};

//Funktion för inloggningssidan
function inlogPage() 
{
    document.body.innerHTML = "";
    document.body.insertAdjacentHTML("afterbegin",`<br /><h1 id = "h1">LOGGA IN</h1><label for= "namnFält">Användarnamn</label><br/ >
    <input id = "namnFält"></input><br /><label for= "lösenFält">Lösenord</label><br/ ><input id = "lösenFält"></input><br /><br />`);
    app.inKnapp.innerText = 'Logga in';

    //Lyssar efter klick och läser av inmatat
    document.body.appendChild(app.inKnapp).addEventListener('click', function()
    {
        const namn = namnFält.value;
        const lösen = lösenFält.value;

        //Kontroll
        console.log(namn);
        console.log(lösen);

        //Om rätt användarnamn och lösenord, spara, anropa funktionen för välkomstsidan
        if (namn === app.key && lösen === app.value)
        {
            localStorage.setItem("user", namn);
            localStorage.setItem("code", lösen);
            welcomePage();

            //Kontroll
            console.log(localStorage);
        }

        //Annars om fel anv.namn och lösenord, visa fel meddelande och försök igen knapp
        else if (namn !== app.key && lösen !== app.value)
        {
            document.body.innerHTML = "";
            document.body.insertAdjacentHTML("afterbegin",`<br /><h1 id = "h1">HOPPSAN!</h1><br/ ><p>Har du glömt dina inloggningsuppgifter?</p><br/ >`);
            document.body.appendChild(app.reKnapp).innerText = 'Försök igen';

            //Lyssar efter klick och anropar funktionen för inloggningssidan
            app.reKnapp.addEventListener('click', function()
            {
                inlogPage();

                //Kontroll
                console.log(localStorage);
            });
        }      
    });
};

//Om användare är inloggad, anropar funktionen för välkomstsidan
if (localStorage.length === 2)
{
    welcomePage();
}

//Annars anropas funktionen för inloggningssidan
else
{
    inlogPage();
}