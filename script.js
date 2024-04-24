const textArea = document.getElementById("textArea");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensaje = document.querySelector(".mensaje");
const derecha = document.getElementById("derecha");

const remplazar = (nuevoValor) => {
  mensajeFinal.innerHTML = nuevoValor;
  gato.classList.add("oculto");
  infoDerecha.style.display = "none";
  botonCopiar.style.display = "block";
  derecha.classList.add("ajustar");
  mensajeFinal.classList.add("ajustar");
  textArea.value = "";
};

const reset = () => {
  mensajeFinal.innerHTML = "";
  gato.classList.remove("oculto");
  derecha.classList.remove("ajustar");
  mensajeFinal.classList.remove("ajustar");
  textArea.focus();
  botonCopiar.style.display = "none";
  infoDerecha.style.display = "block";
};

let encriptado = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

botonEncriptar.addEventListener("click", () => {
  const texto = textArea.value.toLowerCase();
  if (texto != "") {
    function encriptar(newText) {
      for (let i = 0; i < encriptado.length; i++) {
        if (newText.includes(encriptado[i][0])) {
          newText = newText.replaceAll(encriptado[i][0], encriptado[i][1]);
        }
      }
      return newText;
    }

    remplazar(encriptar(texto));
  } else {
    alert("Ingrese texto a encriptar");
    reset();
  }
});
botonDesencriptar.addEventListener("click", () => {
  const texto = textArea.value.toLowerCase();
  if (texto != "") {
    function desencriptar(newText) {
      for (let i = 0; i < encriptado.length; i++) {
        if (newText.includes(encriptado[i][1])) {
          newText = newText.replaceAll(encriptado[i][1], encriptado[i][0]);
        }
      }
      return newText;
    }

    remplazar(desencriptar(texto));
  } else {
    alert("Ingrese texto a desencriptar");
    reset();
  }
});

botonCopiar.addEventListener("click", () => {
  let texto = mensajeFinal;
  //navigator.clipboard.writeText(texto.value); No es compatible con celulares
  texto.select();
  document.execCommand("copy");
  reset();
});
