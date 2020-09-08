'use strict';
console.log('test');
const app = {
    // key:"test",
    // value: "1234",
    namnFält: document.createElement('input'),
    namn: namnFält.value,
    lösenFält: document.createElement('input'),
    lösen: lösenFält.value,
    meny: document.getElementById('meny'),
    inKnapp: document.createElement('button'),
    utKnapp: document.createElement('button'),
    inText: document.createTextNode("Vad trevligt att du loggade hit!"),
    utTex: document.createTextNode("Du är nu utloggad. Välkommen åter!"),
    felText: document.createTextNode("Hoppsan, har du glömt koden?"),
}
//OM localStorage är tomt
    //VISA namnFält
    //VISA lösenFält
    //VISA inKnapp

    //LYSSNA på inKnapp
        //VID klick på inKnapp

            //OM namn === test && lösen === 1234 
                //SPARA i localStorage
                //VISA inText
                //VISA utKnapp

                //LYSSNA på utKnapp
                    //VID klick på utKnapp

                        //TÖM localStorage
                        //VISA utText
            //ANNARS
                //VISA felText

//ANNARS
    //VISA inText
    //VISA utKnapp

    //LYSSNA på utKnapp
        //VID klick på utKnapp

            //TÖM localStorage
            //VISA utText
