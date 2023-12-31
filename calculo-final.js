window.addEventListener("load", function () {

    function retornarValorTotal() {

        /* ------------------------------Alimentação----------------------------- */

        var alimentos = 0; //alimentos = tipo "number"

        var alimentosObjectsString = localStorage.getItem('alimentosObjects');
        var alimentosObjects = !alimentosObjectsString ? [0, 0, 0, 0, 0, 0] : JSON.parse(alimentosObjectsString);
        //operador ternário
        //se o localStorage estiver vazio, valores dos alimentos igual a "0"
        //senão, obter valores com JSON.parse, transformando do tipo "string" para "number"

        console.log("valoresAlimentos: " + alimentosObjects)

        var fatoresConversao = {
            carneVer: 0.0013707,
            carnePorco: 0.0004158,
            carneFra: 0.0002097,
            ovo: 0.0002534,
            leite: 0.0002124,
            queijo: 0.0002946
        };
        for (var i = 0; i < alimentosObjects.length; i++) {
            var quantidade = alimentosObjects[i];
            var fatorConversao = fatoresConversao[Object.keys(fatoresConversao)[i]];
            alimentos += fatorConversao * quantidade * 52;
        }

        console.log("alimentos: " + alimentos)


        /* ------------------------transporte terrestre---------------------- */

        var tipoVeiculo = localStorage.getItem('veiculo');       
        var kmRodados = localStorage.getItem('kmRodados');
        var porte = localStorage.getItem('porte');
        var combustivel = tipoVeiculo == 2 ? 1 : parseInt(localStorage.getItem('combustivel'), 10);
        //operador ternário
        //se tipoVeiculo = 2, o combustível é igual a 1
        //senão, combustível é o valor do localStorage

        const fatoresEmissao = {
            1: { // Carro
                1: {
                    1: 0.00014652,
                    2: 0.00013989,
                    3: 0.00010332,
                    4: 0.000146,
                    5: 0.000148
                }, // Pequeno
                2: {
                    1: 0.0001847,
                    2: 0.000168,
                    3: 0.00010999,
                    4: 0.000146,
                    5: 0.00016142
                }, // Médio
                3: {
                    1: 0.00027639,
                    2: 0.00020953,
                    3: 0.00015491,
                    4: 0.000146,
                    5: 0.00021682
                } // Grande
            },
            2: { // Moto
                1: {
                    1: 0.00008306
                }, // Pequeno
                2: {
                    1: 0.0001009
                }, // Médio
                3: {
                    1: 0.00013245
                } // Grande
            }
        };

        //verificar os números salvos, para utilizá-los no cálculo a seguir
        if (tipoVeiculo in fatoresEmissao &&
            porte in fatoresEmissao[tipoVeiculo] &&
            combustivel in fatoresEmissao[tipoVeiculo][porte]) {
            //===== CARRO/MOTO =====
            emissaoVeiculo = (fatoresEmissao[tipoVeiculo][porte][combustivel] * kmRodados) * 365;

        } else if (tipoVeiculo == 3) {
            //===== VAN =====

            emissaoVeiculo = (((0.168 * kmRodados * 35) * 200) / 15) / 1000;
            // 200 = dias letivos;  15 = pessoas na van

        } else if (tipoVeiculo == 4) {
            //===== ONIBUS ======

            emissaoVeiculo = (((0.10303768 * kmRodados * 19) * 230) / 50) / 1000;

        } else {
            emissaoVeiculo = 0;
        }

        console.log("emissaoVeiculo: " + emissaoVeiculo)

        /* ---------------------transporte aereo--------------------- */

        var tempoVoo = localStorage.getItem('horasAviao');
        var numPessoas = localStorage.getItem('qntdPessoas');

        if (tempoVoo && numPessoas) {
            var voos = ((tempoVoo * 4 * 3600 * 2.55) / numPessoas) / 1000;
        } else {
            voos = 0;
        }

        console.log("voos: " + voos)

        /* ------------------------eletricidade--------------------- */

        var eletrica = localStorage.getItem('eletrica');
        var gasNatural = localStorage.getItem('natural');
        var glp = localStorage.getItem('botijao');
        var pessoasCasa = localStorage.getItem('pessoasCasa');

        var energia = (((eletrica * 0.090 * 12) / 1000) + (((gasNatural * 10.55 * 12) * 0.202) / 1000) + ((glp * 54.860 * 0.227 * 12) / 1000)) / pessoasCasa;
        energia = !energia ? 0 : energia;

        console.log("energia: " + (energia))

        /* ------------------------residuos--------------------- */

        var lixoOrg = localStorage.getItem('lixoOrg');
        var residuos = ((lixoOrg / 1000) * 7.666 * 365) / 1000

        console.log("residuos: " + (residuos))

        /* -------------------------RESULTADOS-------------------------- */

        var gastoTotal = energia + voos + alimentos + emissaoVeiculo + residuos;
        var resultadoEmissao = +(gastoTotal.toFixed(2));
        localStorage.setItem('resultadoEmissao', resultadoEmissao);

        var arvores = Math.round(gastoTotal / 0.167);
        localStorage.setItem('arvores', arvores);


        /* GRAFICO */
        const categorias = ['energia', 'voos', 'emissaoVeiculo', 'alimentos', 'residuos'];
        const porcentagens = [];

        categorias.forEach(categoria => {
            const value = eval(categoria);
            const percent = Math.round((value / gastoTotal) * 100);
            porcentagens.push(percent);
        });

        console.log(porcentagens)
        localStorage.setItem('categorias', JSON.stringify(porcentagens));


        setTimeout(function () {
            window.location.href = "./resultado-emissao.html"
        }, 2000);

    }

    try {
        //Verificar se há algum erro
        retornarValorTotal();
    } catch (error) {
        // Redirecionamento para outra página em caso de erro
        window.location.href = "./error.html";
    }
});