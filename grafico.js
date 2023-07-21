/* porcentagem */
var arrayCategorias = JSON.parse(localStorage.getItem('categorias'));
var categorias = ["energy", "voos", "transporte", "comida"];

for (var i = 0; i < categorias.length; i++) {
  var grafCategoria = arrayCategorias[i];
  document.getElementById(categorias[i]).innerHTML = grafCategoria + "%";
}

console.log(arrayCategorias)

/* configurações do gráfico */
var data = {
    datasets: [{
        data: arrayCategorias,
        backgroundColor: [
            '#ebe07c',
            '#60a9ff',
            '#b27f47',
            '#88c340'
        ],
        borderColor: [
            '#51372080',
            '#51372080',
            '#51372080',
            '#51372080'
        ],
        
        borderWidth: 3
    }],
    labels: [
        'Energia',
        'Voos',
        'Transporte',
        'Alimentação'
    ]
};

/* construtor do gráfico */
var ctx = document.getElementById('pie-chart').getContext("2d");
var chart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options:{
        legend: {
            display: false
        }
    }
});