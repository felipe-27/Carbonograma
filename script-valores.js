/* atalho de comentario: alt + shift + A  */

//o getElement consegue trazer os valores dos inputs
//mas ele só atualiza se tiver dentro da função

//o localStorage permite acessar valores salvos em um armazenamento interno
//independente da pág em que estivermos

function validVar(valor) { //validar variável - se houver campos vazios, igualar a 0
  if (valor === undefined || valor === null || valor === '') {
    return 0;
  }
  return valor;
}


function chamarAlimentos() {
  var checkboxes = ['botoes', 'botoes1', 'botoes2', 'botoes3', 'botoes4', 'botoes5'];

  var alimentosObjects = [];

  checkboxes.forEach(function (name) {
    var checkbox = document.querySelector('input[name="' + name + '"]:checked');
    if (checkbox.checked) {
      alimentosObjects.push(checkbox.value);
    }
  });

  localStorage.setItem('alimentosObjects', JSON.stringify(alimentosObjects));
}


function verCombustivel() {
  if (localStorage.getItem('veiculo') == 2) { //esconder combustível se for moto
    document.getElementById("verCombustivel").style.display = "none";
  } else {
    document.getElementById("verCombustivel").style.display = "flex";
  }
  requestAnimationFrame(function () {});
}

function chamarVeiculos() {

  var veiculo = document.getElementById("idVeiculo").value;
  var porte = document.getElementById("idPorte").value;
  var combustivel = document.getElementById("idCombustivel").value;
  var kmRodados = document.getElementById("kmRodados").value;
  kmRodados = validVar(kmRodados); //se campo for vazio, variavel = 0

  localStorage.setItem("veiculo", veiculo);
  localStorage.setItem("porte", porte);
  localStorage.setItem("combustivel", combustivel);
  localStorage.setItem("kmRodados", kmRodados);

  verCombustivel();
}


function chamarVoos() {
  var horasAviao = document.getElementById("horasAviao").value;
  var qntdPessoas = document.getElementById("qntdPessoas").value;

  localStorage.setItem("horasAviao", horasAviao);

  if (qntdPessoas == 0) {
    qntdPessoas = 1;
  }
  localStorage.setItem("qntdPessoas", qntdPessoas);
}


function chamarEnergia() {
  var eletrica = document.getElementById("eletrica").value;
  var natural = document.getElementById("natural").value;
  var botijao = document.getElementById("botijao").value;
  var pessoasCasa = document.getElementById("pessoasCasa").value;

  localStorage.setItem("eletrica", eletrica);
  localStorage.setItem("natural", natural);
  localStorage.setItem("botijao", botijao);

  if (pessoasCasa == null || "0") {
    pessoasCasa = 1;
  }

  if (pessoasCasa == null || "0") {
    pessoasCasa = 1;
  }
  localStorage.setItem("pessoasCasa", pessoasCasa);
}

var selectedLanguage = localStorage.getItem("language");
console.log(selectedLanguage);

if (selectedLanguage = "pt") {
  t1 = "Deseja sair?";
  t2 = "Ao fechar o formulário, os campos preenchidos NÃO serão salvos!";
  t3 = "Cancelar";
  t4 = "Sair";
}
if (selectedLanguage = "en") {
  t1 = "Do you want to exit?";
  t2 = "When closing this forms, the completed fields WILL NOT be saved!";
  t3 = "Cancel";
  t4 = "Exit";
}


function closeAlert() {
  swal({
      title: t1,
      text: t2,
      buttons: [t3, t4],
      dangerMode: true,
      closeOnClickOutside: false,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location.href = "./home-calculo.html"
      }
    });
}