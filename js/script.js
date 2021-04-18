const frames = ['😊','😃','🤔','😎'];

let posicion=0;
function animarURL(){
    window.location.hash = frames[posicion%frames.length];
    posicion++;
    setTimeout(animarURL,500)
}

animarURL();