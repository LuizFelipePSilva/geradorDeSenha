function geradorDeSenha() {
  let passoword = document.getElementById('passowordLenght').value
  let resultado = [];
  const char = 'ABCDEFGHIJKLMNOPMNOPQRpqrstuvwxyzÁÉefghijklmnGHMNOPQRpqrstuvwxyzÁÉefghijklmnGHIJKLMNOPQRpqrstuvwIJKLMNOPQRpqrstuvwxyzÁÉefghijklmnGHIJKLMNOPQRpqrstuvwMNOPQRpqrstuvwQRSTUVWXYtuvwxyz234MNOPQRpqrstuvwxyzÁÉefghijklmnGHIJKLMNOPQRpqrstuvw56789efghijklmnoDEFGHÁÉÍÓÚÂÊÎÔÛÃÕZabcdMNOPQRpqrstuvwxyzÁÉefghijklmnGHIJKLMNOPQRpqrstuvw0123456789GHIJKLMNOPQRpqrstuvwxyzÁÉefghijklmnGHIJKLMNOPQRpqrstuvwxyzÁÉEFGHIJKLMNOPQRpqrstuvwxyzÁÉÍÓÚÂÊÎÔÛÃÕÀÈÌÒÙÄËÏÖÜÇáéíóúâêîôûãõàèìòùäëïöüç0123456789';
  for (let i = 0; i < passoword; i++) {
    let x = Math.floor(Math.random() * char.length);
    let indice = char[x];
    resultado.push(indice);
  }
  
  let stringSenha = resultado.join("");
  document.getElementById('passwordResult').textContent = stringSenha;
}

function verificar () {
  console.log(document.getElementById('passowordLenght').value)
  let passoword = document.getElementById('passowordLenght').value
  if(!passoword) {
    alert("Insira digitos para criar sua senha")
  }
  if(passoword >= 1 & passoword <= 8){
    geradorDeSenha()
    alert("Recomendamos o uso de uma senha com mais de 12 digitos!")
  }
  if(passoword > 8) {
    geradorDeSenha()
  }
}

function copiarSenha() {
  const senha = document.getElementById('passwordResult').textContent;
  
  if (senha) {
    navigator.clipboard.writeText(senha)
      .then(() => {
        alert("Senha copiada para a área de transferência!");
      })
      .catch(err => {
        alert("Erro ao copiar a senha: " + err);
      });
  } else {
    alert("Gere uma senha primeiro!");
  }
}
