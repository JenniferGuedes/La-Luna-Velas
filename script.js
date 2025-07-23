/*Navbar desktop e mobile*/
function showsideBar () {
const sidebar = document.querySelector(".sidebar");
sidebar.style.display = "flex";
}

function hidesideBar () {
const sidebar = document.querySelector(".sidebar");
sidebar.style.display = "none";
}

/*Showcase do produto - Página única*/

const products = {
  rose60: {
    name: "Brinde Rosé",
    description: `
Celebre cada instante com um aroma encantador que
eleva o ambiente e o coração. “Brinde Rosé” é
uma fragrância festiva, sofisticada e delicadamente romântica,
onde a efervescência do champanhe encontra a doçura
suculenta do morango maduro — um brinde aos sentidos.


🌬️ Notas Olfativas
• Top Notes: framboesa fresca, néctar de pêssego e leve cítrico — trazendo leveza e vivacidade ao abrir o ritual olfativo.
• Heart Notes: champanhe efervescente, morangos doces e pétalas de rosa — criando uma harmonia romântica e elegante no corpo da vela.
• Base Notes: baunilha macia, jacinto e musk suave — acrescentando calor, profundidade e um toque gourmand que prolonga a sensação de celebração.

O blend resulta em uma fragrância vibrante, feminina, sofisticada e levemente doce, ideal para criar uma atmosfera de encanto e leveza.


🔮 Essência & Propósito

Vertida com cera vegetal de alta pureza e pavio de algodão, “Brinde Rosé” foi criada para ser uma experiência sensorial envolvente. Cada vela carrega a intenção de transformar o cotidiano em celebração — acenda e permita que cada nota desperte boas energias, memórias e delicadeza.


🌙 Ritual de Uso
1. Primeira queima: deixe toda a superfície derreter (2–3 horas) para liberar toda a magia da fragrância.
2. Manutenção: aparar o pavio entre 4–5 mm assegura uma chama limpa e aroma nítido.
3. Ambiente ideal: perfeita para encontros românticos, celebrações íntimas, relaxar com vinho ou iniciar um momento de autocuidado elegante.


🧘 Benefícios Sensoriais
• Promove sensação de leveza, alegria e romantismo.
• Preenche o ambiente com sofisticação, equilíbrio entre frescor e doçura.
• Ideal para renovar o ar em espaços sociais, criar atmosferas acolhedoras e despertar memórias afetivas.
    `,
    price: "R$ 00,00",
    images: [
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ]
  },



  coraline: {
    name: "Coraline",
    description: ` Desperte um universo sonhador dentro de sua casa com “Coraline” — uma fragrância vibrante, intrigante e cheia de personalidade. Inspirada pela ousadia da personagem querida Coraline e pela sensação lúdica do outro mundo, esta vela mistura a picância suave da pimenta rosa com nuances doces e delicadas, criando um feitiço aromático inolvidável.



🌬️ Notas Olfativas
	•	Top notes: explosão fresca e picante de pimenta rosa, clara, frutada-floral e levemente cítrica, despertando curiosidade e energia suave no ambiente.
	•	Heart notes: nuances florais e adocicadas que equilibram a ardência com um toque elegante e feminil, evocando delicadeza e surpreendendo os sentidos.
	•	Base notes: fundo acolhedor dos açúcares sutis e musk suave, conferindo profundidade e equilíbrio sem exageros.

A combinação resulta em um aroma espirituoso — ao mesmo tempo estimulante e aconchegante, perfeito para adicionar um toque de magia ao cotidiano.



🔮 Essência & Propósito

Produzida com cera vegetal pura e pavio de algodão, a vela “Coraline” foi criada para trazer leveza, frescor e um leve sorriso a quem a acende. Seu nome homenageia o universo encantado do filme, enquanto o aroma celebra a energia vibrante da pimenta rosa: divertida, sofisticada e cheia de vida.



🌙 Ritual de Uso
	1.	Primeira queima: deixe derreter a superfície inteira (1–2 horas), liberando todos os acordes da fragrância.
	2.	Cuidados: aparar o pavio a cerca de 5 mm antes de cada uso garante queima limpa e aroma puro.
	3.	Hora ideal: perfeita para espaços criativos, leituras à luz suave, momentos de reflexão ou simplesmente para renovar o ambiente com um toque inesperado.



🧘 Benefícios Sensoriais
	•	Estimula o humor, traz clareza mental e eleva a energia do ambiente com frescor e leveza.
	•	Traz um aroma moderno, elegante e com um charme discreto — ideal para autopreservação sensorial.
	•	Notas de pimenta rosa estimulam a circulação, purificam o ar e oferecem uma experiência olfativa vivificante
    `,
    price: "R$ 29,90",
    images: [
      "images/coralineCandle.jpg",
      "images/coralineCandle2.jpg",
      "images/coralineCandle3.jpg"
    ]
  }
};

//Montar o showcase

function loadProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = products[productId];

  if (!product) {
    document.getElementById("detailedProduct").innerHTML = "<p>Produto não encontrado.</p>";
    return;
  }

  document.title = `${product.name} | La Luna Velas`;

  const thumbnails = product.images.map((img, i) => `
    <img src="${img}" class="thumbnail" onclick="switchImage('${img}')" alt="Imagem ${i + 1}">
  `).join("");


document.getElementById("detailedProduct").innerHTML = `
  <section class="productStack">
    <h2 class="productTitle"><strong>${product.name}</strong></h2>

    <img id="mainImage" src="${product.images[0]}" class="mainImage" alt="${product.name}">

    <section class="imageGalleryRow">
      ${product.images.map(img => `
        <img src="${img}" class="thumbnail" onclick="switchImage('${img}')" alt="Miniatura">
      `).join("")}
    </section>

    <p class="price"><strong>${product.price}</strong></p>
    <input type="text" id="cep" placeholder="Digite seu CEP">
    <button onclick="calculateShipping()">Calcular Frete</button>
    <a href="#" class="buyButton specialCandle">Comprar</a>
  </section>

  <section class="textSection">
    <p class="productDescription">${product.description}</p>
  </section>
`;
}


//Funções extras

function switchImage(image) {
  document.getElementById("mainImage").src = image;
}

function calculateShipping() {
  const zip = document.getElementById("cep").value;
  if (zip.length < 8) {
    alert("Digite um CEP válido.");
    return;
  }
  alert(`Frete para ${zip} calculado! (simulado) 🎁`);
}


/*Especiais de Halloween*/
function controlSpecialButtonsByMonth() {
  const today = new Date();
  const month = today.getMonth(); // January = 0, October = 9

  const specialButtons = document.querySelectorAll(".buyButton.specialCandle");

  specialButtons.forEach(button => {
    if (month === 9) {
      // October: enable
      button.disabled = false;
      button.classList.remove("buyButtonDisabled");
      button.title = "Available for purchase!";
    } else {
      // Other months: disable
      button.disabled = true;
      button.classList.add("buyButtonDisabled");
      button.title = "Available only in October 🎃";
    }
  });
}

controlSpecialButtonsByMonth();


//chamar tudo
if (window.location.pathname.includes("product.html")) {
  loadProductPage();
  controlSpecialButtonsByMonth();
}
