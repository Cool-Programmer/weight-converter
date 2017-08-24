// CLASSIC WAY

// // Hide the output display section
// document.getElementById("output").style.display = "none";

// document.getElementById("poundInput").addEventListener('input', function(e){

//     // Show the output
//     document.getElementById("output").style = "initial";
    
//     let inputValPound = e.target.value;

//     let calcGramVal = Math.round(inputValPound/0.00220462);
//     document.getElementById("gramsOutput").innerHTML = calcGramVal;

//     let calcKiloVal = Math.round(inputValPound/2.20462);
//     document.getElementById("kilosOutput").innerHTML = calcKiloVal;

//     let calcOcVal = Math.round(inputValPound/0.0625);
//     document.getElementById("ocOutput").innerHTML = calcOcVal;
// });


// OOP WAY
class Calculator
{

    constructor(gram, kg, oz)
    {
        gram = this.gram;
        kg = this.kg;
        oz = this.oz;
    }

    hide(id) 
    {
        document.getElementById(id).style.display = "none";   
    }

    show(id)
    {
        document.getElementById(id).style.display = "initial";
    }

    calculate(id, weight)
    {
        let that = this;
        document.getElementById("poundInput").addEventListener('input', function(e){
            that.show("output");
            let inputValPound = e.target.value;
            let result = Math.round(inputValPound/weight);
            document.getElementById(id).innerHTML = result;
        });
    }
}

let calc = new Calculator;
calc.hide("output");
calc.calculate("gramsOutput", 0.00220462);
calc.calculate("kilosOutput", 2.20462);
calc.calculate("ocOutput", 0.0625);