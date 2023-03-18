let value;

function choice(number){
    value = number;
    localStorage.setItem('value-save', value);
}
function submit(){
    if(value != undefined){
        window.location.href="result.html";
    }
}

function write(){
    document.getElementById("score-value").innerHTML =  localStorage.getItem('value-save');
}