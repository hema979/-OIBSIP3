let convert = () => {

    val = document.getElementById("degrees").value;
    types = document.querySelector("#type").value;
    r = document.getElementById("result");
    
    if(types == "Farenheit"){
        let res = ((9*val)/5)+32 
        r.innerHTML = res.toFixed(4)+"F" ;

    }
    else{

        let res2 = (5*(val-32))/9
        r.innerHTML = res2.toFixed(4)+"C";
    }
}
