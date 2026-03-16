function calcPrice(){
    var g1=document.getElementById("grocery1").value;
    var g2=document.getElementById("grocery2").value;
    var g3=document.getElementById("grocery3").value;
    document.getElementById('total').innerHTML="The price is "+(parseInt(g1)+parseInt(g2)+parseInt(g3));
}

function greet(name){
    const msg = "hello, "
    function greetName(){
        console.log(msg+name);
    }
    return greetName;
}

const greetJan = greet("jan");
greetJan();
