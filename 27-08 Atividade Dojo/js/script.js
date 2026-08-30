let nome="";
let notas = [];
let media=0;

// As variáveis precisam ser globais, pois mais de uma function utiliza, altera e armazena valores nela.

function gravar() {
    nome = document.getElementById("nomeAluno").value; // Se não colocar esse ".value", ele retorna o elemento html inteiro, ou seja: <input class="form-control" id="nota1" ...>

    notas = [
    document.getElementById("nota1").value,
    document.getElementById("nota2").value,
    document.getElementById("nota3").value,
    document.getElementById("nota4").value,
  ];
}

function calcularMedia(){
    gravar();

    const n1 = parseFloat(notas[0]) || 0; // Esse "|| 0 signfica que se ele não conseguir fazer transformação de String para numero e atribui 0, ou seja: Ou transforma, ou é 0"
    const n2 = parseFloat(notas[1]) || 0;
    const n3 = parseFloat(notas[2]) || 0;
    const n4 = parseFloat(notas[3]) || 0;

    media = (n1+n2+n3+n4) / 4;

    document.getElementById("resultadoMedia").textContent = media.toFixed(2); // Aqui ele manda o valor da media para o HTML e esse toFixed(2) significa que vai com 2 casas decimais
}

function registrarResultado(){

  const preenchido = notas.every((nota) => nota !== "");

  if(preenchido  !== true){
    alert("Preencha todos os campos de notas antes de prosseguir, por favor!!!!");
    return;
  }
  
  if(media >= 6.00){
    window.location.href = "resultado.html?status=APROVADO";
  } else if(media >= 2 && media <= 5.99){
    window.location.href = "resultado.html?status=EXAME";
  } else if(media>=0 && media <=1.99){
    window.location.href = "resultado.html?status=REPROVADO";
  } else {
    window.location.href = "resultado.html?status=VALORES INVALIDOS";
  }
  
}

document.getElementById("nota1").addEventListener("input", calcularMedia);
document.getElementById("nota2").addEventListener("input", calcularMedia);
document.getElementById("nota3").addEventListener("input", calcularMedia);
document.getElementById("nota4").addEventListener("input", calcularMedia);