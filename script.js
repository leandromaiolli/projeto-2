const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
        {
            enunciado: "Você pensa sobre as consequências de suas ações?",
            alternativas: [
                {
                    texto:"Sim, pois elam podem atingir outras pessoas além de mim.",
                    afirmação:"Você é uma pessoa com carisma, buscando sempre ofercer empatia as pessoas."
                },
                {
                    texto:"Não, pois minha vida é mais importante.",
                    afirmação:"Você é uma pessoa que, algumas vez, pode ser um pouco apática, demostrando certa rigidez."
                }
                
                
            ]
        },
        {
            enunciado: "Você é capaz de aceitar mudanças?",
            alternativas: [
                {
                    texto: "Sim, sou uma pessoa flexível.",
                    afirmacao: "Sempre busca uma solução para o problema, tornando-se alguém 'bom de briga'."
                },
                {
                    texto: "Não, sou rígido(a) perante meus ideais",
                    afirmacao: "Articula seus pensamentos a seu favor, em busca de sempre persuadir a quem se comunica a aceitar seu pensamento"
                }
            ]
    },
        {
            enunciado: "Você consegue aprender com os seus erros?",
            alternativas: [
                {
                    texto:"Sim, pois os erros auxiliam para o conhecimento.",
                    afirmação:"Sabe aceitar erros e consegue os conciliar com seus propósitos."
                },
                {
                    texto:"Não, pois erros significam fracassos.",
                    afirmação:"Você é estremamente focado em seus objetivos, o qual seu mínimo é seu máximo."
                }
            ]
        },
        {
            enunciado: "Você se considera uma pessoa comunicativa?",
            alternativas: [
                {
                    texto: "Sim, pois sou sociável e dialético(a).",
                    afirmação:"A conversa e a socialização são seu ponto forte!, fazer novos amizades deve ser moleza."
                },
                {
                    texto:"Não, pois o silêncio é seu sinônimo de paz.",
                    afirmação:"O famosos JOVEM VELHO, gosta de ficar em casa e o silêncio é um dos seus maiores prazeres."
                }  
            ]
        },
        {
            enunciado: "Você acredita ser organizado(a) em sua vida?",
            alternativas: [
                {
                    texto: "Sim, pois a vida é construida por ações efetivadas e planejadas.",
                    afirmação:"Muito certo e focado em tudo, as vezes, até demais, buscando sempre o sucesso"
                },
                {
                    texto:"Não, pois a vida é baseada nas experiências e vivências no presente.",
                    afirmação:"Viver o real é sua ideia, acredita que se deve aproveitar o agora, pois a incerteza do amanhã torna o hoje especial"
                }  
            ]
        },
    ]

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";
    
    function mostraPergunta() {
        if(atual >= perguntas.length){
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent =""
        mostraAlternativas();
    }
    function mostraAlternativas() {
        for(const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativa.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostasSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    function  respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacoes;
        historiaFinal += afirmacoes + " ";
        Atual++;
        mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Você é...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }
    mostraPergunta();