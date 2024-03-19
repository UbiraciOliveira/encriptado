const textArea = document.getElementById("textoOriginal");
const mensagem = document.getElementById("textoCriptografado");
const btnCriptografar = document.getElementById("btnCriptografar");
const btnCopiar = document.getElementById("btnCopiar");

btnCopiar.addEventListener("click", function() {
    textArea.value = "";  
    const textoCriptografado = document.getElementById("textoCriptografado").textContent;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textoCriptografado;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
        
    alert("Texto copiado para a área de transferência!");
    alert("Cole aqui seu texto");
});

btnCriptografar.addEventListener("click", function() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.textContent = textoEncriptado;  
    textArea.value = ""; 
});

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}
btnDescriptografar.addEventListener("click", function() {
    const textodesencriptar = desencriptar(textArea.value);
    mensagem.textContent = textodesencriptar;
    textArea.value = "";    
});

function desencriptar(stringDescriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptada;    
}

