const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [{"e":"enter"}, {"i":"imes"}, {"a":"ai"}, {"o":"ober"}, {"u":"ufat"}];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        let clave = Object.keys(matrizCodigo[i])[0];
        let valor = matrizCodigo[i][clave];
        
        if(stringEncriptada.includes(clave)){
            stringEncriptada = stringEncriptada.replaceAll(clave, valor);
        }
    }  
    return stringEncriptada;  
}





function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigoA = [{"enter":"e"}, {"imes":"i"}, {"ai":"a"}, {"ober":"o"}, {"ufat":"u"}];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigoA.length; i++){
        let clave = Object.keys(matrizCodigoA[i])[0];
        let valor = matrizCodigoA[i][clave];
        
        if(stringDesencriptada.includes(clave)){
            stringDesencriptada = stringDesencriptada.replaceAll(clave, valor);
        }
    }  
    return stringDesencriptada;  
}






function btnCopiar() {
    let copyText = document.querySelector(".mensaje");
    copyText.select();
    document.execCommand("copy");
  }
  document.querySelector("#copy").addEventListener("click", copy);
  
