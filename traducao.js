
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
            aplicativo: "Carbonograma versão 3 (beta)",
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
            t10: "Atualmente, problemas como o desmatamento e a urbanização são os principais vilões que agem a favor do aquecimento global, poisdestroem a camada vegetal e permitem que as árvores, depois de cortadas, emitam o carbono que estavam armazenando.",
            t11: " Assim, o reflorestamento surge como uma saída para mitigar os efeitos trazidos por esses processos antrópicos, se tornando uma solução viável para a população.",
            t12: "A partir disto, podemos entender agora como reflorestar uma área a partir do plantio de uma muda, isto é, uma planta jovem que, sob oscuidados corretos, há de se tornar uma grande árvore no futuro.",
            t13: "Ainda tem dúvidas sobre como plantar uma árvore? Confira agora mesmo um pequeno manual",
        },
        Bem1: {
            titulo2: "Como fazer o bem",
            t14: "1º - Encontre o local ideal",
            t15: " Primeiramente, analise tanto visualmente quanto biologicamente o terreno onde a árvore será plantada, lembre-se: cada tipo de árvore admite um comportamento distinto frente ao seu local de plantio.",
            t16: "Logo, é presumível que certas espécies demandem de locais mais úmidos e outras, por exemplo, de áreas mais secas. Uma dica interessante é que você se atente à coloração da terra sob a qual será plantada a muda: caso ela seja mais escura, significa que ela é mais rica em nutrientes, por outra lado, caso ela seja mais clara, ela terá menos nutrientes. ",
        },
        Bem2: {
            titulo2: "Como fazer o bem",
            t17: "2º - Escolha as medidas",
            t18: "Entrando agora em detalhes mais técnicos, para que uma árvore possa crescer adequadamente, é necessário tomar as medidas certas em relação ao buraco em que a planta será colocada:",
            t19: "Para árvores com mais de 1,80 metros, é necessário um buraco de 60cm de profundidade, caso o solo seja fofo, 60 cm de largura. Caso você utilize mudas menores, buracos de aproximadamente um palmo de fundura já dão conta do recado.",

        },
        Bem3: {
            titulo2: "Como fazer o bem",
            t20: "3º - Decidindo o adubo",
            t21: "Em seguida, precisamos falar sobre o adubamento da terra, processo vital para o crescimento sadio da muda e para seu enraizamento no solo.",
            t22: " Assim, convém saber que adubos como calcário, esterco de gado e de galinha, compostos orgânicos ou húmus de galinha costumam ser os mais comuns.",
            t23: "No entanto, antes de decidir qual será o melhor produto a ser utilizado, conheça a árvore que você pretende plantar, já que cada espécie necessita de um tipo de adubo."

        },
        Bem4: {
            titulo2: "Como fazer o bem",
            t24: "4º - Hora de plantar!",
            t25: "Por fim, é chegada a hora de plantar. Para tal, retire a embalagem da muda com cuidado para não desmanchar o torrão de protege as raízes.",
            t26: "Coloque a muda na vertical e preste atenção à altura do torrão em relação ao solo, após isso, complete o espaço com terra. Pronto,você acabou de plantar a sua primeira árvore!"

        },
        Bem5: {
            titulo2: "Como fazer o bem",
            t27: "5º - Mantendo os cuidados",
            t28: " Agora, para manter a sua muda crescendo de forma saudável, molhe-a periodicamente a fim de manter o solo sempre úmido, sem excessos.",
            t29: "Caso sinta conveniente, faça adubações complementares ao longo do tempo."


        },
        ação: {
            titulo3: "Mostre sua ação",
            t30: "Você acabou de plantar uma árvore ou promover qualquer outro benefício ao meio ambiente e está se sentindo orgulhoso(a) de seutrabalho?",
            t31: "Compartilhe com a gente! Grave o seu vídeo ou tire uma foto da ação que você está se empenhando e envie para nós através de nossas redes sociais:",
        },
        equipe: {
            titulo4: "Sobre nós",
            t32: "Somos um time formado por sete jovens criativos e dedicados que lutam pelo mesmo objetivo:",
            t33: "Criar um aplicativo que mimetize o sistema da calculadora de carbono desenvolvida anteriormente pelo nosso colégio, ao passo em que, adicionemos à sua carcaça original melhorias de caráter tecnológico e artístico congruentes com a época em que vivemos.",
            t34: "Nossa equipe",
        },
        nos: {
            titulo4: "Sobre nós",
            t35: "Representamos a ",
            t36: ", uma entidade sem fins lucrativos estruturada pelo engenheiro Salvador Arena e formalmente constituída em 1964. Seu principal intuito é ser um suporte social que estenda a mão àqueles que estejam em condição de vulnerabilidade social.",
            t37: "Nesse interim, a missão a ser exercida pela nossa equipe é dar continuidade ao pensamento altruísta de Salvador Arena, através do apoio ou da realização de projetos e programas sociais nas áreas da educação, saúde, habitação e assistência social, em prol de uma sociedade melhor e mais igualitária.",
            t38: "Conheça a equipe que desenvolveu o aplicativo",
            t3: "Nossa equipe",



        }

    },
    en: {
        homeOptions: {
            title: "Options",
            subtitle: "About",
            aplicativo: "Carbonograma version 3 (beta)",
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
        },
        Bem1: {
            titulo2: "Doing Good",
            t14: "1° - Find the ideal location",
            t15: "First off all, you should analyze both visually and biologically the land where you want to plant your tree and remember: each type of tree admits a different behavior due to its planting site.",
            t16: " So, it is predictable that some species require more humid places whilst others, for example, need drier places. An interesting hint is that you pay attention to the coloring of the land where you will plant the seedling: generally, if it is darker, it is richer in nutrients, otherwise, if it is clearer, it will have less nutrients. ",
        },
        Bem2: {
            titulo2: "Doing Good",
            t17: "2° - Choose the measures",
            t18: "Now talking about some specific details, for a tree to grow properly, it is really important that the measures of the planting land fit with the size of the tree:",
            t19: "For trees with more than 1,80 meters (5,9 feet), you will need a 60 centimeters deep hole, and in case that it is a fluffy soil, 60 centimeters of width. On the other hand, if you are planning to grow smaller seedlings, holes about a foot deep will handle it. ",

        },
        Bem3: {
            titulo2: "Doing Good",
            t20: "3° - Choosing the fertilizer:",
            t21: "Moving on, we need to talk about fertilizing the soil, a vital process for the healthy growth of the seedling and for its rooting in the soil.",
            t22: "Therefore, it is worth knowing that fertilizers such as limestone, cattle and chicken manure, organic compounds or chicken humus are usually the most common.",
            t23: "However, before deciding which will be the best product to use, get to know the tree you intend to plant, as each species needs a different type of fertilizer.",


        },
        Bem4: {
            titulo2: "Doing Good",
            t24: "4° - Time to grow",
            t25: "Finally, it is time to plant. To do this, carefully remove the packaging from the seedling so as not to break the clod that protects the roots.",
            t26: "Place the seedling vertically and pay attention to the height of the root ball in relation to the ground, after that, fill in the space with soil. That's it, you've just planted your first tree!",
        },
        Bem5: {
            titulo2: "Doing Good",
            t27: "5° - Keeping care: ",
            t28: "Now, to keep your seedling growing in a healthy way, water it periodically in order to keep the soil always moist, without excesses.",
            t29: "If you feel convenient, add additional fertilizers over time.",
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
        }


    }

}