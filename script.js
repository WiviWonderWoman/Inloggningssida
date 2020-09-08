'use strict';
console.log('test');
const app = {
    key = "test",
    value = "1234",
    namnFält = document.createElement('input'),
    namn = namnFält.value,
    lösenFält = document.createElement('input'),
    lösen = lösenFält.value,
    meny = document.getElementById('meny'),
    inKnapp = document.createElement('button'),
    utKnapp = document.createElement('button'),
    inText = document.createTextNode("Vad trevligt att du hittade hit! Logga gärna in!"),
    utText = document.createTextNode("Du är nu utloggad. Välkommen åter!"),
    felText = document.createTextNode("Hoppsan, har du glömt koden?"),
}
