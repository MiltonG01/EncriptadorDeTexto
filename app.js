function Ecriptadortxt() {
    let texto = document.getElementById("txtarea").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("mensajetxtaencriptar");
    
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("listaencriptado").value = textoCifrado;
      document.getElementById("txtarea").value = "";
      document.getElementById("imgmuñeco").style.display = 'none';
      document.getElementById("mostrarTXTecriptado").style.display = 'block';
      document.getElementById("boton").style.display = 'block';
      document.getElementById("mensajetxtencriptado").style.display = 'none';
    } else {
      
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      
      document.getElementById("imgmuñeco").style.display = 'block';
    }
  }

  function Desencriptartxt() {
    let texto = document.getElementById("txtarea").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("mensajetxtaencriptar");
    
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("listaencriptado").value = textoCifrado;
      document.getElementById("txtarea").value = "";
      document.getElementById("imgmuñeco").style.display = 'none';
      document.getElementById("mostrarTXTecriptado").style.display = 'block';
      document.getElementById("boton").style.display = 'block';
      document.getElementById("mensajetxtencriptado").style.display = 'none';
    } else {
      
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
      document.getElementById("imgmuñeco").style.display = 'block';
    }
  }

function copiartexto(){

    let txtcopiado = document.getElementById("listaencriptado");
    txtcopiado.select();
    txtcopiado.setSelectionRange(0,9999);
    document.execCommand("copy")

}