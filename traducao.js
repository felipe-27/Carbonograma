function traduzir() {
    if (!localStorage.getItem("language")) {
        // Se não existir, cria a chave com o valor padrão
        localStorage.setItem("language", "pt");
        // Recarrega a página para refletir a atualização no localStorage
        location.reload();
    } else {
        var selectedLanguage = localStorage.getItem("language");
    }
    updateTexts(selectedLanguage, currentPage);
}

function updateTexts(language, page) {
    var elements = document.getElementsByName("identificar");
    for (var i = 0; i < elements.length; i++) {
        var key = elements[i].getAttribute("data-key");
        elements[i].textContent = translations[language][page][key];
    }
}

// exemplo de textContent:
//  translations[pt][homeOptions][title]  => valor "Opções"
//  translations[en][homeOptions][title]  => valor "Options"

var translations = {
    pt: {
        homeOptions: {
            title: "Opções",
            subtitle: "Sobre o aplicativo",
            aplicativo: "Carbonograma versão 5 (beta)",
            copyright: "Copyright © Centro Educacional da Fundação Salvador Arena",
            selecione: "Selecione um idioma",
        },
        homeCalculo: {
            title: "Calculadora",
            subtitle: "Descubra agora quanto gás carbônico é gerado pelos costumes do seu dia a dia",
            start: "Começar"

        },
        homeBem: {
            titulo: "Boas vindas!",
            t1: "Sobre nós",
            t2: "Acesse um resumo sobre os desenvolvedores e a sua instituição de ensino",
            t3: "CONFIRA",
            t4: "Como fazer o bem",
            t5: "Ainda tem dúvidas sobre como plantar uma árvore? Confira agora mesmo um pequeno manual",
            t7: "Mostre sua ação",
            t8: "Temos uma ótima alternativa para você que acabou de plantar sua primeira muda!",
        },
        Bem: {
            titulo2: "Como fazer o bem",
            t9: "Ajude o meio ambiente!",
            t10: "Nos dias atuais, problemas como o desmatamento e a urbanização são os principais contribuintes para o aquecimento global, pois destroem a vegetação e liberam o carbono armazenado pelas árvores quando elas são cortadas.",
            t11: "Assim, o reflorestamento surge como uma ótima solução para diminuirmos os efeitos desses processos, devido a sua praticidade e o baixo custo exigido.",
            t12: "A partir disso, podemos entender como reflorestar uma área por meio do plantio de mudas, que são plantas jovens que, com os cuidados adequados, se tornarão grandes árvores no futuro.",
            t13: "Ainda tem dúvidas sobre como plantar uma árvore? Confira agora mesmo um pequeno manual",
            n1: "Próximo",
        },
        Bem1: {
            titulo2: "Como fazer o bem",
            t14: "1º - Encontre o local ideal",
            t15: " Primeiramente, analise tanto visualmente quanto biologicamente o terreno onde a árvore será plantada, lembre-se: cada tipo de árvore admite um comportamento distinto frente ao seu local de plantio.",
            t16: "Logo, é presumível que certas espécies demandem de locais mais úmidos e outras, por exemplo, de áreas mais secas. Uma dica interessante é que você se atente à coloração da terra sob a qual será plantada a muda: caso ela seja mais escura, significa que ela é mais rica em nutrientes, por outra lado, caso ela seja mais clara, ela terá menos nutrientes. ",
            n1: "Próximo",
            n2: "Anterior",
        },
        Bem2: {
            titulo2: "Como fazer o bem",
            t17: "2º - Escolha as medidas",
            t18: "Entrando agora em detalhes mais técnicos, para que uma árvore possa crescer adequadamente, é necessário tomar as medidas certas em relação ao buraco em que a planta será colocada:",
            t19: "Para árvores com mais de 1,80 metros, é necessário um buraco de 60cm de profundidade, caso o solo seja fofo, 60 cm de largura. Caso você utilize mudas menores, buracos de aproximadamente um palmo de fundura já dão conta do recado.",
            n1: "Próximo",
            n2: "Anterior",
        },
        Bem3: {
            titulo2: "Como fazer o bem",
            t20: "3º - Decidindo o adubo",
            t21: "Em seguida, precisamos falar sobre o adubamento da terra, processo vital para o crescimento sadio da muda e para seu enraizamento no solo.",
            t22: " Assim, convém saber que adubos como calcário, esterco de gado e de galinha, compostos orgânicos ou húmus de galinha costumam ser os mais comuns.",
            t23: "No entanto, antes de decidir qual será o melhor produto a ser utilizado, conheça a árvore que você pretende plantar, já que cada espécie necessita de um tipo de adubo.",
            n1: "Próximo",
            n2: "Anterior",
        },
        Bem4: {
            titulo2: "Como fazer o bem",
            t24: "4º - Hora de plantar!",
            t25: "Por fim, é chegada a hora de plantar. Para tal, retire a embalagem da muda com cuidado para não desmanchar o torrão de protege as raízes.",
            t26: "Coloque a muda na vertical e preste atenção à altura do torrão em relação ao solo, após isso, complete o espaço com terra. Pronto,você acabou de plantar a sua primeira árvore!",
            n1: "Próximo",
            n2: "Anterior",
        },
        Bem5: {
            titulo2: "Como fazer o bem",
            t27: "5º - Mantendo os cuidados",
            t28: "Agora, para manter a sua muda crescendo de forma saudável, molhe-a periodicamente a fim de manter o solo sempre úmido, sem excessos.",
            t29: "Caso sinta conveniente, faça adubações complementares ao longo do tempo.",
            n1: "Entendi",
            n2: "Anterior",
        },
        ação: {
            titulo3: "Mostre sua ação",
            t30: "Você acabou de plantar uma árvore ou promover qualquer outro benefício ao meio ambiente e está se sentindo orgulhoso(a) de seu trabalho?",
            t31: "Compartilhe com a gente! Grave o seu vídeo ou tire uma foto da ação que você está se empenhando e envie para nós através de nossas redes sociais:",
        },
        equipe: {
            titulo4: "Sobre nós",
            t32: "Somos um time composto por sete jovens criativos e dedicados, unidos pelo mesmo propósito:",
            t33: "Desenvolver um aplicativo que reproduza o sistema da calculadora de carbono previamente desenvolvida em nosso colégio, incorporando-lhe melhores tecnológicas e estéticas para o seu uso.",
            t34: "Nossa equipe",
        },
        nos: {
            titulo4: "Sobre nós",
            t35: "Representamos a ",
            t36: ", uma entidade sem fins lucrativos estruturada pelo engenheiro Salvador Arena e formalmente constituída em 1964. Nosso principal objetivo é fornecer suporte social àqueles que se encontram em situação de vulnerabilidade.",

            t37: "Nossa equipe tem a missão de dar continuidade ao pensamento altruísta de Salvador Arena, por meio do apoio e da realização de projetos e programas sociais nas áreas da educação, saúde, habitação e assistência social, com o objetivo de promover uma sociedade mais justa e igualitária.",
            t38: "Conheça a equipe que desenvolveu o aplicativo",
            t3: "Nossa equipe",

        },
        calculo: {
            a1: "Próximo",
            a2: "Anterior",
            a3: "Finalizar",
            //calculo
            b1: "Pronto para os Cálculos?",
            b2: "Responda algumas questões para o sistema do nosso aplicativo realizar os cálculos necessários.",
            b3: "No final, saiba quantas árvores você teria que plantar para recompensar as taxas de carbono que você emitiu!",
            b4: "Caso seja questionado sobre um produto ou serviço que você não tenha utilizado, deixe os campos em branco.",
            b5: "Começar",
            b6: "Voltar",

            //energia
            b7: "Energia",
            b8: "Diga a quantidade por mês que você usa de:",
            b9: "Energia elétrica",
            b10: "Gás natural",
            b11: "Botijão de gás (GLP)",
            b12: "botijões",
            b13: "Quantas pessoas moram na sua casa?",
            b14: "*Incluindo você",

            //error
            b17: "Tem algo errado! Está faltando alguma coisa........",
            b18: "Recalcular",
            b19: "Sair",
            b20: "Por favor cheque novamente as informações fornecidas. Certifique-se que colocou tudo certo",
            b21: "Lembre-se: Caso seja perguntado sobre algum produto ou serviço que você não tenha utilizado, preencha as lacunas com o número 0.",

            //transporte-terrestre
            t1: "Transporte",
            b22: "Escolha seu veículo",
            c3: "Carro",
            c4: "Moto",
            c5: "Van",
            c6: "Ônibus",
            b23: "Por favor preencha este campo",
            b24: "Qual o porte do veículo?",
            b25: "Porte",
            b26: "Pequeno",
            b27: "Médio",
            b28: "Grande",
            b29: "Escolha o tipo de combustível",
            b30: "Gasolina",
            b31: "Diesel",
            b32: "Híbrido",
            b33: "Flex",
            b34: "GNV",
            b35: "Em média, quantos km por dia você se desloca?",
            bb35: "Em média, quantas horas por dia você se desloca? (em decimal)",


            //alimentacao
            b36: "Alimentos",
            b37: "Durante a semana, com que frequência você consome:",
            b38: "Não consumo",
            b39: "Diariamente",
            b40: "Carne Vermelha",
            b41: "Carne de Frango",
            b42: "Carne de Porco",
            b43: "Leite",
            b44: "Ovos",
            b45: "Queijo",

            //voos            
            v1: "Voos",
            b46: " Por quantas horas você viajou de avião no último ano? ",
            b47: "Qual a quantidade de passageiros, em média, de cada voo?",
            b48: "*Caso não saiba, use 300",

            //resultados 
            b50: "Resultados",
            b51: "Emissão",
            b52: "Árvores",
            b53: "Gráfico",
            b54: "Total das suas emissões:",
            b55: "(tonCO2 por ano)",
            b56: "COMPARE",
            b57: "Média de emissões per capita no Brasil:",
            b58: "(tonCO2 por ano)",
            bdicas: "Dicas para fazer o bem",
            b59: "CALCULAR NOVAMENTE",
            b60: "Energia doméstica",
            b61: "Transporte aéreo",
            b62: "Transporte terrestre",
            b63: "Alimentação",
            b64: "Árvores necessárias para compensação:",
            b65: "Resíduos",
        },

        residuos: {
            v1: "Resíduos",
            b47: "Quantos gramas de lixo orgânico você produz por dia?",
            b48: "*Caso não saiba, use 400",
            a1: "Próximo",
            a2: "Anterior",
            a3: "Finalizar",
        },

    },
    en: {
        calculo: {
            a1: "Next",
            a2: "Previous",
            a3: "Finished",
            //calculo
            b1: "READY TO CALCULATE?",
            b2: "Answer some questions for our application system to perform the necessary calculations.",
            b3: "In the end, find out how many trees you would have to plant to reward the carbon taxes you emitted! ",
            b4: "If you are asked about a product or service that you have not used, leave the fields blank.",
            b5: "Start",
            b6: "Back",
            v1: "Flight            ",

            //energia
            b7: "Energy",
            b8: "How much per month do you use of:",
            b13: "How many people live in your house?",
            b14: "*Including you",
            b9: "Eletric Energy",
            b10: "Natural gas",
            b11: "Gas Canister",

            //error
            b17: "There's something wrong! Something's missing....",
            b18: "Recalculate",
            b19: "Exit",
            b20: "Please double-check the information provided. Make sure you put everything right",
            b21: "Remember: If you are asked about a product or service that you have not used, fill in the blanks with the number 0.",

            //transporte-terrestre
            t1: "Transport",
            b22: "Choose your vehicle",
            c3: "Car",
            c4: "Motorcycle",
            c5: "Van",
            c6: "Bus",
            b23: "Please fill in this field",
            b24: "What is the size of the vehicle?",
            b25: "Size",
            b26: "Small",
            b27: "Medium",
            b28: "Large",
            b29: "Choose the type of fuel",
            b30: "Gasoline",
            b31: "Diesel",
            b32: "Hybrid",
            b33: "Flex",
            b34: "GNV",
            b35: "How many km per day do you travel?",
            bb35: "On average, how many hours a day do you commute? (in decimal)",


            //alimentacao
            b36: "Alimentation",
            b37: "During the week, how often do you consume:",
            b38: "I don't consume",
            b39: "Daily",
            b40: "Beef",
            b41: "Chiken",
            b42: "Pork",
            b43: "Milk",
            b44: "Eggs",
            b45: "Cheese",
            b46: " How many hours have you traveled by plane in the last year? ",
            b47: "What is the average number of passengers on each flight?",
            b48: "*If you don't know, use 300",

            //resultados 
            b50: "Results", // esse eu coloquei em varias paginas talvez haja algum tipo de problema porém não achei nenhum en quanto eu fiz 
            b51: "Emission",
            b52: "Trees",
            b53: "Graph",
            b54: "Total emissions:",
            b55: "(tonCO2 per year)",
            b56: "COMPARE",
            b57: "Average emissions per capita in Brazil:",
            b58: "(tonCO2 per year)",
            bdicas: "Tips on Doing Good",
            b59: "CALCULATE AGAIN",
            b60: "Domestic Energy",
            b61: "Air Transport",
            b62: "Land transportation",
            b63: "Alimentation",
            b64: "Trees needed for clearing:",
            b65: "Waste",
        },
        residuos: {
            v1: "Waste",
            b47: "How many grams of organic waste do you generate per day?",
            b48: "*If you don't know, use 400",
            a1: "Next",
            a2: "Previous",
            a3: "Finished",
        },

        homeOptions: {
            title: "Options",
            subtitle: "About",
            aplicativo: "Carbonograma version 5 (beta)",
            copyright: "Copyright © Centro Educacional da Fundação Salvador Arena",
            selecione: "Choose a language",
        },
        homeCalculo: {
            title: "Calculator",
            subtitle: "Find out now how much carbon dioxide is generated by your day-to-day habits",
            start: "Start now"
        },
        homeBem: {
            titulo: "Welcome!",
            t1: "About us",
            t2: "A brief description about our developers and the founding institution",
            t3: "CHECK IT OUT!",
            t4: "Doing Good",
            t5: "Still got some doubts about how you can plant a tree? Check our guide right now!",
            t7: "Show your actions!",
            t8: "We have a great idea for you who have just planted your first seedling!",
        },
        Bem: {
            titulo2: "Doing Good",
            t9: "Help Nature!",
            t10: "Nowadays, problems such as the deforestation and the urbanization are the main villains that act in favor of the global warming, after all, they deteriorate the vegetal layer and allow the trees, after being cut, to emit the carbon they were storin",
            t11: " Because of so, the reforestation shows up as a great output to mitigate the effects brought by these anthropic processes, becoming then a viable solution to the population. ",
            t12: "From that moment on we can understand how to reforest an area from planting a seedling, that is, a young plant that under proper circumstances will become a great tree in the future.",
            t13: "Still have questions about how to plant a tree? Check out a little manual right now",
            n1: "Next"
        },
        Bem1: {
            titulo2: "Doing Good",
            t14: "1° - Find the ideal location",
            t15: "First off all, you should analyze both visually and biologically the land where you want to plant your tree and remember: each type of tree admits a different behavior due to its planting site.",
            t16: " So, it is predictable that some species require more humid places whilst others, for example, need drier places. An interesting hint is that you pay attention to the coloring of the land where you will plant the seedling: generally, if it is darker, it is richer in nutrients, otherwise, if it is clearer, it will have less nutrients. ",
            n1: "Next",
            n2: "Previous",
        },
        Bem2: {
            titulo2: "Doing Good",
            t17: "2° - Choose the measures",
            t18: "Now talking about some specific details, for a tree to grow properly, it is really important that the measures of the planting land fit with the size of the tree:",
            t19: "For trees with more than 1,80 meters (5,9 feet), you will need a 60 centimeters deep hole, and in case that it is a fluffy soil, 60 centimeters of width. On the other hand, if you are planning to grow smaller seedlings, holes about a foot deep will handle it. ",
            n1: "Next",
            n2: "Previous",
        },
        Bem3: {
            titulo2: "Doing Good",
            t20: "3° - Choosing the fertilizer:",
            t21: "Moving on, we need to talk about fertilizing the soil, a vital process for the healthy growth of the seedling and for its rooting in the soil.",
            t22: "Therefore, it is worth knowing that fertilizers such as limestone, cattle and chicken manure, organic compounds or chicken humus are usually the most common.",
            t23: "However, before deciding which will be the best product to use, get to know the tree you intend to plant, as each species needs a different type of fertilizer.",
            n1: "Next",
            n2: "Previous",
        },
        Bem4: {
            titulo2: "Doing Good",
            t24: "4° - Time to grow",
            t25: "Finally, it is time to plant. To do this, carefully remove the packaging from the seedling so as not to break the clod that protects the roots.",
            t26: "Place the seedling vertically and pay attention to the height of the root ball in relation to the ground, after that, fill in the space with soil. That's it, you've just planted your first tree!",
            n1: "Next",
            n2: "Previous",
        },
        Bem5: {
            titulo2: "Doing Good",
            t27: "5° - Keeping care: ",
            t28: "Now, to keep your seedling growing in a healthy way, water it periodically in order to keep the soil always moist, without excesses.",
            t29: "If you feel convenient, add additional fertilizers over time.",
            n1: "Alright",
            n2: "Previous",
        },
        ação: {
            titulo3: "Show your action",
            t30: "Have you just planted a tree or promoted any other benefit to the environment and are feeling proud of your work?",
            t31: "Share it with us! Record your video or take a picture of the action you are taking and send it to us through our social networks.",

        },
        equipe: {
            titulo4: "ABOUT US",
            t32: "We are a team made up of seven creative and dedicated young people who fight for the same goal:",
            t33: "To create an application that mimics the carbon calculator system previously developed by our school, while adding congruent technological and artistic improvements to its original shell. Improving it to our actual days.",
            t34: "Team Work",

        },
        nos: {
            titulo4: "ABOUT US",
            t35: "We represent the ",
            t36: ", a non-profit organization structured by the engineer Salvador Arena and formally constituted in 1964. Its main purpose is to be a social support that extends a hand to those who are in a condition of social vulnerability.",
            t37: "In the meantime, the mission to be carried out by our team is to continue the altruistic thinking of Salvador Arena, through the support or implementation of social projects and programs in the areas of education, health, housing, and social assistance, in favor of a better society and more egalitarian.",
            t38: "Discover the team that developed the app",
            t3: "Check it out!",
        },

    }

}