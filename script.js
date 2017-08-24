// Hide the output display section
document.getElementById("output").style.display = "none";

document.getElementById("poundInput").addEventListener('input', function(e){

    // Show the output
    document.getElementById("output").style = "initial";
    
    let inputValPound = e.target.value;

    let calcGramVal = Math.round(inputValPound/0.00220462);
    document.getElementById("gramsOutput").innerHTML = calcGramVal;

    let calcKiloVal = Math.round(inputValPound/2.20462);
    document.getElementById("kilosOutput").innerHTML = calcKiloVal;

    let calcOcVal = Math.round(inputValPound/0.0625);
    document.getElementById("ocOutput").innerHTML = calcOcVal;
});