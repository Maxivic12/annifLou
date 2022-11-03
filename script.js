function connectWithCode(code) {
    if('une pute' == code){
        document.getElementById('mdp-page').style.display = 'none';
        document.getElementById('connected-page').style.display = 'block';
    }else{
        document.getElementById('popup').className = 'bouger';
        setTimeout(function() {
            document.getElementById('popup').className = 'still';
        }, 4000);
    }
}

function clic(){
    var input = document.getElementById('text_input');
    connectWithCode(input.value);3
}