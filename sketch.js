
//* MISSÃO AURA */

/* DECLARAÇÃO DAS VARIÁVEIS */
let user_info;
let nascimento_info;

/* ARRAY DE PERFIS */
const perfis = [
  {
    id: 1,
    nome: "Nestha",
    profissao: "Engenheira de Sistemas",
    categoria: "Construção",
    descricao: "Nestha busca o controle absoluto e o silêncio no coração mecânico da nave como engenheira de sistemas. O que ela mais ama fazer é escutar o zumbido perfeito e harmonioso do reator de fusão quântica logo após passar horas calibrando as redes de dados e o suporte à vida com precisão cirúrgica. Ela encontra uma satisfação sombria e silenciosa em reconfigurar manualmente os escudos de defesa ou os códigos de pressurização no meio de alertas de emergência. Para Nestha, lidar com a arquitetura digital e mecânica da nave é a função perfeita, pois os sistemas operam com lógica pura, não mentem e dependem unicamente de seu foco disciplinado para manter a estrutura inteira funcionando sem falhas.",
    imagem: "img/nestha.jpg",
    recomendacao: "Você vai cuidar dos equipamentos da nave."
  },
  {
    id: 2,
    nome: "Nehemia",
    função: "Cientista Exploradora",
    categoria: "Investigação",
    descricao: "Nehemia encontra seu propósito nos mistérios do universo como cientista exploradora. O que ela mais ama fazer é passar horas isolada no laboratório de análises avançadas, processando dados de sensores de longo alcance e decifrando fenômenos cósmicos ou assinaturas atmosféricas de mundos distantes. Nos momentos de calmaria, adora cruzar informações de novos elementos da tabela periódica descobertos no espaço profundo. Para Nehemia, a ciência é uma busca incessante pela verdade, e ela sente um prazer genuíno ao solucionar enigmas matemáticos e biológicos complexos, gerando o conhecimento teórico necessário para que a tripulação saiba exatamente o que esperar lá fora.",
    imagem: "img/nehemia.jpg",
    recomendacao: "Você vai investigar os mistérios do planeta."
  },
  {
    id: 3,
    nome: "Feyre",
     nome: "Explorador de Campo",
    categoria: "Exploração",
    descricao: "Feyre vive para a ação física na linha de frente como exploradora de campo. O que ela verdadeira ama fazer é ser a primeiríssima a cruzar a eclusa e pisar na superfície de um mundo desconhecido, sentindo a gravidade e o terreno hostil desafiarem suas botas. Ela adora a adrenalina de pilotar o jipe de reconhecimento por cânions alienígenas perigosos, mapear perímetros desconhecidos a pé e coletar amostras físicas diretamente da fonte. Feyre vê o campo como um espaço de liberdade total e se recusa a ficar presa a telas e relatórios, usando sua resistência e coragem para desbravar os limites de cada nova terra e garantir que o solo seja seguro para os outros.",
    imagem: "img/feyre.jpg",
    recomendacao: "Você vai explorar o terreno desconhecido."
  },
  {
    id: 4,
    nome: "Amren",
    nome: "Estrategista da Missão",
    categoria: "Planejamento",
    descricao: "Amren opera nos bastidores de forma implacável como a estrategista da missão. O que ela realmente ama fazer é antecipar desastres, desenhando planos de contingência frios e cirúrgicos que cobrem todas as variáveis possíveis de erro humano ou perigo alienígena. Nos momentos de crise, ela adora o xadrez mental de coordenar as ações de cada membro da tripulação, alocando recursos escassos com eficiência máxima a partir da sala de controle. Amren vê a estratégia como a linha tênue entre o sucesso absoluto e o esquecimento no vácuo; ela sente uma satisfação cortante ao provar que sua mente analítica está sempre três passos à frente do próprio destino da missão.",
    imagem: "img/a.jpg",
    recomendacao: "Você vai organizar e planejar a expedição."
  }
];

/* FUNÇÃO DO P5.JS */
function setup() {
  noCanvas();
}

/* DATA DE HOJE */
function dataHoje() {
  let hoje = new Date();

  return hoje.getFullYear() + "-" +
    String(hoje.getMonth() + 1).padStart(2, "0") + "-" +
    String(hoje.getDate()).padStart(2, "0");
}

document.getElementById("nascimento").max = dataHoje();

/* FUNÇÃO PARA CALCULAR A IDADE */
function calcularIdade(data) {
  let partes = data.split("-");
  let idade = new Date().getFullYear() - Number(partes[0]);
  let hoje = new Date();

  if (
    hoje.getMonth() + 1 < Number(partes[1]) ||
    (
      hoje.getMonth() + 1 === Number(partes[1]) &&
      hoje.getDate() < Number(partes[2])
    )
  ) {
    idade--;
  }

  return idade;
}

/* FUNÇÃO DE ALERTA */
function alerta(texto) {
  document.getElementById("msg_alerta").textContent = texto;
  document.getElementById("alerta").style.visibility = "visible";
}

/* FUNÇÃO PARA FECHAR O ALERTA */
function fecharAlerta() {
  document.getElementById("alerta").style.visibility = "hidden";
}

/* FUNÇÃO PARA MOSTRAR O PERFIL */
function mostrarPerfil(perfil) {
  let area = document.getElementById("perfis_resultado");

  let card = document.createElement("div");
  card.className = "perfil-card";

  let titulo = document.createElement("h3");
  titulo.textContent = perfil.nome;
  card.appendChild(titulo);

  let categoria = document.createElement("p");
  categoria.className = "categoria";
  categoria.textContent = perfil.categoria;
  card.appendChild(categoria);

  let imagem = document.createElement("img");
  imagem.src = perfil.imagem;
  imagem.alt = perfil.nome;
  imagem.className = "imagem-perfil";

  imagem.onerror = function () {
    imagem.hidden = true;
  };

  card.appendChild(imagem);

  let descricao = document.createElement("p");
  descricao.textContent = perfil.descricao;
  card.appendChild(descricao);

  let recomendacao = document.createElement("p");
  recomendacao.textContent = "Recomendação para a missão: " + perfil.recomendacao;
  card.appendChild(recomendacao);

  area.appendChild(card);
}

/* FUNÇÃO PRINCIPAL */
function fazer_login() {
  /* LIMPAR AS BORDAS VERMELHAS */
  let campos = ["user", "nascimento", "p1", "p2", "p3", "p4"];

  for (let i = 0; i < campos.length; i++) {
    document.getElementById(campos[i]).classList.remove("erro");
  }

  /* PEGAR AS INFORMAÇÕES */
  user_info = document.getElementById("user").value.trim();
  nascimento_info = document.getElementById("nascimento").value;

  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;
  let p3 = document.getElementById("p3").value;
  let p4 = document.getElementById("p4").value;

  let msg = document.getElementById("msg");

  msg.textContent = "";
  document.getElementById("resultado").hidden = true;
  document.getElementById("perfis_resultado").replaceChildren();

  /* VALIDAÇÃO DOS CAMPOS */
  if (user_info.length === 0) {
    document.getElementById("user").classList.add("erro");
    alerta("Informe seu nome!");

  } else if (nascimento_info === "") {
    document.getElementById("nascimento").classList.add("erro");
    alerta("Informe sua data de nascimento!");

  } else if (nascimento_info > dataHoje()) {
    document.getElementById("nascimento").classList.add("erro");
    alerta("A data de nascimento não pode ser futura!");

  } else if (p1 === "" || p2 === "" || p3 === "" || p4 === "") {
    if (p1 === "") document.getElementById("p1").classList.add("erro");
    if (p2 === "") document.getElementById("p2").classList.add("erro");
    if (p3 === "") document.getElementById("p3").classList.add("erro");
    if (p4 === "") document.getElementById("p4").classList.add("erro");

    alerta("Responda às quatro perguntas!");

  } else {
    /* CALCULAR A IDADE */
    let idade = calcularIdade(nascimento_info);

    /* PONTUAÇÃO DOS PERFIS */
    let pontos = [0, 0, 0, 0];

    pontos[Number(p1) - 1]++;
    pontos[Number(p2) - 1]++;
    pontos[Number(p3) - 1]++;
    pontos[Number(p4) - 1]++;

    /* ENCONTRAR A MAIOR PONTUAÇÃO */
    let maior = Math.max(...pontos);
    let quantidade = 0;

    for (let i = 0; i < pontos.length; i++) {
      if (pontos[i] === maior) {
        quantidade++;
      }
    }

    /* MOSTRAR NOME E IDADE */
    document.getElementById("dados_participante").textContent =
      "Participante: " + user_info + " | Idade: " + idade + " anos.";

    /* VERIFICAR EMPATE */
    if (quantidade > 1) {
      let aviso = document.createElement("p");
      aviso.className = "aviso-empate";
      aviso.textContent = "Você empatou entre estes perfis:";
      document.getElementById("perfis_resultado").appendChild(aviso);

      for (let i = 0; i < pontos.length; i++) {
        if (pontos[i] === maior) {
          mostrarPerfil(perfis[i]);
        }
      }

    } else {
      /* ENCONTRAR E MOSTRAR O PERFIL VENCEDOR */
      for (let i = 0; i < pontos.length; i++) {
        if (pontos[i] === maior) {
          mostrarPerfil(perfis[i]);
        }
      }
    }

    document.getElementById("resultado").hidden = false;

    msg.style.color = "#ffffff";
    msg.textContent = "Perfil identificado com sucesso!";

    document.getElementById("resultado").scrollIntoView({
      behavior: "smooth"
    });
  }
}

/* BOTÃO DE DESCOBRIR O PERFIL */
let botao = document.getElementById("login");

document.getElementById("valida").addEventListener("submit", function(evento) {
  evento.preventDefault();
  fazer_login();
});

/* BOTÃO DE FECHAR O ALERTA */
let fechar = document.getElementById("fechar_alerta");
fechar.addEventListener("click", fecharAlerta);

/* BOTÃO PARA REFAZER O TESTE */
let refazer = document.getElementById("refazer");

refazer.addEventListener("click", function() {
  document.getElementById("valida").reset();

  document.getElementById("msg").textContent = "";
  document.getElementById("dados_participante").textContent = "";
  document.getElementById("perfis_resultado").replaceChildren();
  document.getElementById("resultado").hidden = true;

  fecharAlerta();

  document.getElementById("tela_login").scrollIntoView({
    behavior: "smooth"
  });
});
