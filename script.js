/*Navbar desktop e mobile*/
function showsideBar () {
const sidebar = document.querySelector(".sidebar");
sidebar.style.display = "flex";
}

function hidesideBar () {
const sidebar = document.querySelector(".sidebar");
sidebar.style.display = "none";
}

//Transition para a homepage
 const button = document.getElementById('enterButton');
if (button) {
  button.addEventListener('click', function(e) {
    e.preventDefault(); 
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = button.href;
    }, 1000); 
  });
}

//Carrinho

// Adicionar produto ao carrinho e salvar no localStorage
function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Produto adicionado ao carrinho! 🛒");
}

// Atualizar o contador com base no localStorage
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.length;
  const counter = document.getElementById('cart-count');
  if (counter) {
    counter.textContent = count;
    counter.style.display = count > 0 ? 'inline' : 'none';
  }
}

//  Ativar botão "Comprar" ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount(); // garante que o contador reflita o localStorage

  const productId = getProductIdFromURL();
  const buyButton = document.querySelector(".buyButton");

  if (buyButton && productId) {
    buyButton.onclick = () => addToCart(productId);
  }

  const buyButtons = document.querySelectorAll(".buyButton");
  buyButtons.forEach(button => {
    const productId = button.getAttribute("data-id");
    if (productId) {
      button.onclick = (event) => {
        event.preventDefault();
        console.log("Comprando:", productId);
        addToCart(productId);
      };
    }
  });
});

// Capturar ID do produto da URL
function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

//
function toggleCartModal() {
  const modal = document.getElementById("cartModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function clearCart() {
  localStorage.removeItem("cart");
  updateCartCount();
  document.getElementById("cartItems").innerHTML = "<li>Carrinho vazio.</li>";
}

function goToCheckout() {
  window.location.href = "checkout.html";
}

function renderCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cartItems");

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Carrinho vazio.</li>";
    return;
  }

  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `Produto: ${item}`;
    cartList.appendChild(li);
  });
}


//Modal

function toggleCartDropdown() {
  const dropdown = document.getElementById("cartDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function renderCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cartItems");

  cartList.innerHTML = cart.length === 0
    ? "<li>Carrinho vazio.</li>"
    : cart.map(item => `<li>${item}</li>`).join("");
}


/*Showcase do produto - Página única*/
//Brinde Rosé
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

  rose90: {
    name: "Brinde Rosé",
    description:`Celebre cada instante com um aroma encantador que
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
• Ideal para renovar o ar em espaços sociais, criar atmosferas acolhedoras e despertar memórias afetivas.`,
    price: "R$00,00",
    images: [
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ]

  },
  
  rose160: {
    name: "Brinde Rosé",
    description:`Celebre cada instante com um aroma encantador que
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
• Ideal para renovar o ar em espaços sociais, criar atmosferas acolhedoras e despertar memórias afetivas.`,
    price: "R$00,00",
    images: [
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ]

  },

  rosemelts: {
    name: "Brinde Rosé",
    description:`Descubra o ritual encantador dos wax melts da La Luna Velas — pequenos fragmentos perfumados de cera 100% vegetal, feitos para derreter em difusores e liberar fragrâncias intensas que transformam o ambiente com suavidade e mistério.

Feitos à mão com essência premium, os wax melts são uma alternativa prática e elegante às velas tradicionais. Sem pavio, sem chama, apenas aroma puro se espalhando pelo ar — ideal para criar uma atmosfera mística, romântica ou terapêutica.



🌿 Como Usar:
	1.	Escolha um difusor (rechaud ou elétrico);
	2.	Adicione 1 a 3 pedacinhos de wax melt (dependendo do tamanho do espaço);
	3.	Aqueça e deixe a magia perfumada preencher o ar.

Após o uso, basta esperar esfriar e remover a cera solidificada para usar outra fragrância.

🌙 Por que usar wax melts La Luna?
	•	Feitos com cera 100% vegetal, sem parafina.
	•	Aromas intensos, duradouros e cuidadosamente equilibrados.
	•	Veganos e cruelty-free.
	•	Formatos fofos (corações, cubos, estrelas…) que encantam desde o visual até o olfato.
	•	Perfeitos para quem busca sensações, memórias e aconchego a cada derretida.



La Luna Velas convida você a acender não apenas um aroma, mas um estado de espírito.
Derreta um pedacinho do seu dia e sinta o perfume da transformação. 🌒`,
    price: "R$9,99",
    images: [
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ]

  },

  //Vanilla

  vanilla60: {
    name: "Vanilla Swirl",
    description:`Permita que a suavidade da baunilha ganhe vida no ar — “Vanilla Swirl” é um abraço perfumado, delicado e acolhedor, capaz de transformar qualquer ambiente em um refúgio de aconchego e introspecção.



🕯️ Notas Olfativas

Inspirada nas melhores interpretações gourmet da baunilha, esta vela envolve os sentidos com:
	•	Top note: baunilha cremosa reminiscentemente doce, como o primeiro aroma de baunilha de qualidade.
	•	Heart note: textura amanteigada e levemente doce (lembrando buttercream ou creme), suavemente equilibrada por toques florais ou lácteos.
	•	Base note: calor sedoso de baunilha pura, caramelizada e envolta por sutis nuances de musk ou tonka bean, resultando em profundidade e elegância sensual.

Essa composição cria uma fragrância gourmand refinada, doce sem exageros, aconchegante sem pesar.



🔮 Essência e Propósito

Produzida artesanalmente com cera vegetal de alta pureza e pavio de algodão, a vela “Vanilla Swirl” oferece queima limpa e constante. Pensada para acalmar, aquecer e reestabelecer o equilíbrio emocional, é perfeita para momentos de introspecção, autocuidado e relaxamento místico.



🌙 Ritual de Uso
	•	Primeira queima: deixe a superfície derreter por completo (cerca de 2–3 horas), garantindo que todo o aroma se desenvolva desde o início.
	•	Manutenção: aparar o pavio a cerca de 5 mm antes de cada uso mantém a queima estável e evita fumaça ou resíduos.
	•	Ambiente ideal: acenda em noites tranquilas, ao som suave de música instrumental ou entre páginas de um livro — espaço propício para acalmar a mente e nutrir a alma.



🧘 Benefícios Sensoriais
	•	Promove sensação de calma, bem-estar e nostalgia afetiva.
	•	A fragrância gourmand atua como um tônico emocional: reconforta sem adoçar demais, e acalma sem perder elegância.
	•	Ideal para meditação, journaling, rituais de banho ou para transformar simples momentos em cerimônias sensoriais.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ]
  },
  
  vanilla90: {
    name: "Vanilla Swirl",
    description:`Permita que a suavidade da baunilha ganhe vida no ar — “Vanilla Swirl” é um abraço perfumado, delicado e acolhedor, capaz de transformar qualquer ambiente em um refúgio de aconchego e introspecção.



🕯️ Notas Olfativas

Inspirada nas melhores interpretações gourmet da baunilha, esta vela envolve os sentidos com:
	•	Top note: baunilha cremosa reminiscentemente doce, como o primeiro aroma de baunilha de qualidade.
	•	Heart note: textura amanteigada e levemente doce (lembrando buttercream ou creme), suavemente equilibrada por toques florais ou lácteos.
	•	Base note: calor sedoso de baunilha pura, caramelizada e envolta por sutis nuances de musk ou tonka bean, resultando em profundidade e elegância sensual.

Essa composição cria uma fragrância gourmand refinada, doce sem exageros, aconchegante sem pesar.



🔮 Essência e Propósito

Produzida artesanalmente com cera vegetal de alta pureza e pavio de algodão, a vela “Vanilla Swirl” oferece queima limpa e constante. Pensada para acalmar, aquecer e reestabelecer o equilíbrio emocional, é perfeita para momentos de introspecção, autocuidado e relaxamento místico.



🌙 Ritual de Uso
	•	Primeira queima: deixe a superfície derreter por completo (cerca de 2–3 horas), garantindo que todo o aroma se desenvolva desde o início.
	•	Manutenção: aparar o pavio a cerca de 5 mm antes de cada uso mantém a queima estável e evita fumaça ou resíduos.
	•	Ambiente ideal: acenda em noites tranquilas, ao som suave de música instrumental ou entre páginas de um livro — espaço propício para acalmar a mente e nutrir a alma.



🧘 Benefícios Sensoriais
	•	Promove sensação de calma, bem-estar e nostalgia afetiva.
	•	A fragrância gourmand atua como um tônico emocional: reconforta sem adoçar demais, e acalma sem perder elegância.
	•	Ideal para meditação, journaling, rituais de banho ou para transformar simples momentos em cerimônias sensoriais.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   vanilla160: {
    name: "Vanilla Swirl",
    description:`Permita que a suavidade da baunilha ganhe vida no ar — “Vanilla Swirl” é um abraço perfumado, delicado e acolhedor, capaz de transformar qualquer ambiente em um refúgio de aconchego e introspecção.



🕯️ Notas Olfativas

Inspirada nas melhores interpretações gourmet da baunilha, esta vela envolve os sentidos com:
	•	Top note: baunilha cremosa reminiscentemente doce, como o primeiro aroma de baunilha de qualidade.
	•	Heart note: textura amanteigada e levemente doce (lembrando buttercream ou creme), suavemente equilibrada por toques florais ou lácteos.
	•	Base note: calor sedoso de baunilha pura, caramelizada e envolta por sutis nuances de musk ou tonka bean, resultando em profundidade e elegância sensual.

Essa composição cria uma fragrância gourmand refinada, doce sem exageros, aconchegante sem pesar.



🔮 Essência e Propósito

Produzida artesanalmente com cera vegetal de alta pureza e pavio de algodão, a vela “Vanilla Swirl” oferece queima limpa e constante. Pensada para acalmar, aquecer e reestabelecer o equilíbrio emocional, é perfeita para momentos de introspecção, autocuidado e relaxamento místico.



🌙 Ritual de Uso
	•	Primeira queima: deixe a superfície derreter por completo (cerca de 2–3 horas), garantindo que todo o aroma se desenvolva desde o início.
	•	Manutenção: aparar o pavio a cerca de 5 mm antes de cada uso mantém a queima estável e evita fumaça ou resíduos.
	•	Ambiente ideal: acenda em noites tranquilas, ao som suave de música instrumental ou entre páginas de um livro — espaço propício para acalmar a mente e nutrir a alma.



🧘 Benefícios Sensoriais
	•	Promove sensação de calma, bem-estar e nostalgia afetiva.
	•	A fragrância gourmand atua como um tônico emocional: reconforta sem adoçar demais, e acalma sem perder elegância.
	•	Ideal para meditação, journaling, rituais de banho ou para transformar simples momentos em cerimônias sensoriais.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   vanillamelts: {
    name: "Vanilla Swirl",
    description:`Descubra o ritual encantador dos wax melts da La Luna Velas — pequenos fragmentos perfumados de cera 100% vegetal, feitos para derreter em difusores e liberar fragrâncias intensas que transformam o ambiente com suavidade e mistério.

Feitos à mão com essência premium, os wax melts são uma alternativa prática e elegante às velas tradicionais. Sem pavio, sem chama, apenas aroma puro se espalhando pelo ar — ideal para criar uma atmosfera mística, romântica ou terapêutica.



🌿 Como Usar:
	1.	Escolha um difusor (rechaud ou elétrico);
	2.	Adicione 1 a 3 pedacinhos de wax melt (dependendo do tamanho do espaço);
	3.	Aqueça e deixe a magia perfumada preencher o ar.

Após o uso, basta esperar esfriar e remover a cera solidificada para usar outra fragrância.

🌙 Por que usar wax melts La Luna?
	•	Feitos com cera 100% vegetal, sem parafina.
	•	Aromas intensos, duradouros e cuidadosamente equilibrados.
	•	Veganos e cruelty-free.
	•	Formatos fofos (corações, cubos, estrelas…) que encantam desde o visual até o olfato.
	•	Perfeitos para quem busca sensações, memórias e aconchego a cada derretida.



La Luna Velas convida você a acender não apenas um aroma, mas um estado de espírito.
Derreta um pedacinho do seu dia e sinta o perfume da transformação. 🌒`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

  //Velvet Coffee

  velvet60: {
    name:"Velvet Coffee",
    description: `Entre num ritual aromático que desperta a alma: “Velvet Coffee” é uma experiência olfativa intensa, sofisticada e acolhedora. Desperta memórias de cafés sombreados e manhãs serenas com uma chama que embala os sentidos.



  🌸 Notas Olfativas
	•	Top notes: aroma inebriante de grãos de café recém-torrados, encorpados e vibrantes, que evocam a energia do espresso.
	•	Heart notes: doçura cremosa e gentil, como leite aveludado, toque de açúcar mascavo ou caramelo — equilibrando o aroma com leveza e sofisticação.
	•	Base notes: profundidade quente de cacau, baunilha suave e nuances amadeiradas, deixando uma sensação reconfortante que se prolonga no ambiente.



  🔮 Essência e Intenção

  Feita artesanalmente com cera vegetal pura e pavio de algodão, “Velvet Coffee” foi criada para trazer elegância aromática e presença sensorial. Cada vela é vertida com cuidado, com foco em acender emoções e fortalecer o momento presente.



  🌙 Ritual de Uso
	1.	Primeira queima: permita que a superfície queime por toda a largura do recipiente (1–2 horas), garantindo uma propagação uniforme do aroma.
	2.	Cuidados: aparar o pavio a 5 mm antes de cada uso mantém a chama estável e pura.
	3.	Ambiente ideal: perfeito para manhãs introspectivas, escritórios criativos, meditação com um livro ou para acompanhar um café — abrindo portas à concentração e ao conforto.



  🧘 Benefícios Sensoriais
	•	Desperta a mente e acalma os nervos com uma fragrância encorpada e energizante.
	•	Transforma espaços em cenários acolhedores e tranquilos, ideais para introspecção ou conversas íntimas.
	•	Combina intensidade com suavidade, sendo sofisticada sem ser agressiva.`,
    price:"R$00,00",
    images:[
       "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

  velvet90: {
    name: "Velvet Coffee",
    description:`Entre num ritual aromático que desperta a alma: “Velvet Coffee” é uma experiência olfativa intensa, sofisticada e acolhedora. Desperta memórias de cafés sombreados e manhãs serenas com uma chama que embala os sentidos.



  🌸 Notas Olfativas
	•	Top notes: aroma inebriante de grãos de café recém-torrados, encorpados e vibrantes, que evocam a energia do espresso.
	•	Heart notes: doçura cremosa e gentil, como leite aveludado, toque de açúcar mascavo ou caramelo — equilibrando o aroma com leveza e sofisticação.
	•	Base notes: profundidade quente de cacau, baunilha suave e nuances amadeiradas, deixando uma sensação reconfortante que se prolonga no ambiente.



  🔮 Essência e Intenção

  Feita artesanalmente com cera vegetal pura e pavio de algodão, “Velvet Coffee” foi criada para trazer elegância aromática e presença sensorial. Cada vela é vertida com cuidado, com foco em acender emoções e fortalecer o momento presente.



  🌙 Ritual de Uso
	1.	Primeira queima: permita que a superfície queime por toda a largura do recipiente (1–2 horas), garantindo uma propagação uniforme do aroma.
	2.	Cuidados: aparar o pavio a 5 mm antes de cada uso mantém a chama estável e pura.
	3.	Ambiente ideal: perfeito para manhãs introspectivas, escritórios criativos, meditação com um livro ou para acompanhar um café — abrindo portas à concentração e ao conforto.



  🧘 Benefícios Sensoriais
	•	Desperta a mente e acalma os nervos com uma fragrância encorpada e energizante.
	•	Transforma espaços em cenários acolhedores e tranquilos, ideais para introspecção ou conversas íntimas.
	•	Combina intensidade com suavidade, sendo sofisticada sem ser agressiva.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

  velvet160: {
    name: "Velvet Coffee",
    description:`Entre num ritual aromático que desperta a alma: “Velvet Coffee” é uma experiência olfativa intensa, sofisticada e acolhedora. Desperta memórias de cafés sombreados e manhãs serenas com uma chama que embala os sentidos.



  🌸 Notas Olfativas
	•	Top notes: aroma inebriante de grãos de café recém-torrados, encorpados e vibrantes, que evocam a energia do espresso.
	•	Heart notes: doçura cremosa e gentil, como leite aveludado, toque de açúcar mascavo ou caramelo — equilibrando o aroma com leveza e sofisticação.
	•	Base notes: profundidade quente de cacau, baunilha suave e nuances amadeiradas, deixando uma sensação reconfortante que se prolonga no ambiente.



  🔮 Essência e Intenção

Feita artesanalmente com cera vegetal pura e pavio de algodão, “Velvet Coffee” foi criada para trazer elegância aromática e presença sensorial. Cada vela é vertida com cuidado, com foco em acender emoções e fortalecer o momento presente.



  🌙 Ritual de Uso
	1.	Primeira queima: permita que a superfície queime por toda a largura do recipiente (1–2 horas), garantindo uma propagação uniforme do aroma.
	2.	Cuidados: aparar o pavio a 5 mm antes de cada uso mantém a chama estável e pura.
	3.	Ambiente ideal: perfeito para manhãs introspectivas, escritórios criativos, meditação com um livro ou para acompanhar um café — abrindo portas à concentração e ao conforto.



  🧘 Benefícios Sensoriais
	•	Desperta a mente e acalma os nervos com uma fragrância encorpada e energizante.
	•	Transforma espaços em cenários acolhedores e tranquilos, ideais para introspecção ou conversas íntimas.
	•	Combina intensidade com suavidade, sendo sofisticada sem ser agressiva.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

  velvetmelts: {
    name: "Velvet Coffee",
    description:`Descubra o ritual encantador dos wax melts da La Luna Velas — pequenos fragmentos perfumados de cera 100% vegetal, feitos para derreter em difusores e liberar fragrâncias intensas que transformam o ambiente com suavidade e mistério.

Feitos à mão com essência premium, os wax melts são uma alternativa prática e elegante às velas tradicionais. Sem pavio, sem chama, apenas aroma puro se espalhando pelo ar — ideal para criar uma atmosfera mística, romântica ou terapêutica.



🌿 Como Usar:
	1.	Escolha um difusor (rechaud ou elétrico);
	2.	Adicione 1 a 3 pedacinhos de wax melt (dependendo do tamanho do espaço);
	3.	Aqueça e deixe a magia perfumada preencher o ar.

Após o uso, basta esperar esfriar e remover a cera solidificada para usar outra fragrância.

🌙 Por que usar wax melts La Luna?
	•	Feitos com cera 100% vegetal, sem parafina.
	•	Aromas intensos, duradouros e cuidadosamente equilibrados.
	•	Veganos e cruelty-free.
	•	Formatos fofos (corações, cubos, estrelas…) que encantam desde o visual até o olfato.
	•	Perfeitos para quem busca sensações, memórias e aconchego a cada derretida.



La Luna Velas convida você a acender não apenas um aroma, mas um estado de espírito.
Derreta um pedacinho do seu dia e sinta o perfume da transformação. 🌒`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

  //Sortilege de Cerise

  cerise60: {
    name: "Sortilège de Cerise",
    description:`Desperte seus sentidos com um feitiço feito de doçura e elegância. A vela “Sortilège de Cerise” combina a intensidade suculenta das cerejas maduras com a profundidade acolhedora da avelã tostada — uma dança aromática que envolve o espaço em pura magia olfativa.



🌬️ Notas Olfativas
	•	Cereja Rubi: doce, frutada e vibrante, como beijos ao entardecer.
	•	Avelã Tostada: textura quentinha e envolvente que se funde à base doce.
	•	Toque de baunilha e caramelo leve: para estender a sensação de conforto e sensualidade.

Essa combinação cria um aroma rico, misterioso e delicadamente gourmand — como um feitiço que desperta memórias e inspira doçura presente.



🔮 Essência & Intenção

Produzida com cera vegetal de altíssima pureza e pavio de algodão, “Sortilège de Cerise” foi pensada para oferecer queima uniforme e prolongada. Cada vela é vertida com atenção ritualística, carregando vibrações de acolhimento, paixão e elegância.



🌙 Ritual de Uso
	1.	Primeira queima: deixe derreter toda a superfície por 2–3 horas.
	2.	Cuidados: mantenha o pavio aparado a cerca de 5 mm para garantir que a chama seja estável e pura.
	3.	Uso intuitivo: ideal para momentos noturnos, cafés com amigos ou reflexões íntimas.



🧘 Benefícios Sensoriais
	•	Cria um ambiente acolhedor, sensual e envolvente.
	•	Traz presença para os sentidos e estimula memórias afetivas.
	•	Perfeita para relaxar, meditar ou em ocasiões especiais como jantares e celebrações íntimas.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   cerise90: {
    name: "Sortilège de Cerise",
    description:`Desperte seus sentidos com um feitiço feito de doçura e elegância. A vela “Sortilège de Cerise” combina a intensidade suculenta das cerejas maduras com a profundidade acolhedora da avelã tostada — uma dança aromática que envolve o espaço em pura magia olfativa.



🌬️ Notas Olfativas
	•	Cereja Rubi: doce, frutada e vibrante, como beijos ao entardecer.
	•	Avelã Tostada: textura quentinha e envolvente que se funde à base doce.
	•	Toque de baunilha e caramelo leve: para estender a sensação de conforto e sensualidade.

Essa combinação cria um aroma rico, misterioso e delicadamente gourmand — como um feitiço que desperta memórias e inspira doçura presente.



🔮 Essência & Intenção

Produzida com cera vegetal de altíssima pureza e pavio de algodão, “Sortilège de Cerise” foi pensada para oferecer queima uniforme e prolongada. Cada vela é vertida com atenção ritualística, carregando vibrações de acolhimento, paixão e elegância.



🌙 Ritual de Uso
	1.	Primeira queima: deixe derreter toda a superfície por 2–3 horas.
	2.	Cuidados: mantenha o pavio aparado a cerca de 5 mm para garantir que a chama seja estável e pura.
	3.	Uso intuitivo: ideal para momentos noturnos, cafés com amigos ou reflexões íntimas.



🧘 Benefícios Sensoriais
	•	Cria um ambiente acolhedor, sensual e envolvente.
	•	Traz presença para os sentidos e estimula memórias afetivas.
	•	Perfeita para relaxar, meditar ou em ocasiões especiais como jantares e celebrações íntimas.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   cerise160: {
    name: "Sortilège de Cerise",
    description:`Desperte seus sentidos com um feitiço feito de doçura e elegância. A vela “Sortilège de Cerise” combina a intensidade suculenta das cerejas maduras com a profundidade acolhedora da avelã tostada — uma dança aromática que envolve o espaço em pura magia olfativa.



🌬️ Notas Olfativas
	•	Cereja Rubi: doce, frutada e vibrante, como beijos ao entardecer.
	•	Avelã Tostada: textura quentinha e envolvente que se funde à base doce.
	•	Toque de baunilha e caramelo leve: para estender a sensação de conforto e sensualidade.

Essa combinação cria um aroma rico, misterioso e delicadamente gourmand — como um feitiço que desperta memórias e inspira doçura presente.



🔮 Essência & Intenção

Produzida com cera vegetal de altíssima pureza e pavio de algodão, “Sortilège de Cerise” foi pensada para oferecer queima uniforme e prolongada. Cada vela é vertida com atenção ritualística, carregando vibrações de acolhimento, paixão e elegância.



🌙 Ritual de Uso
	1.	Primeira queima: deixe derreter toda a superfície por 2–3 horas.
	2.	Cuidados: mantenha o pavio aparado a cerca de 5 mm para garantir que a chama seja estável e pura.
	3.	Uso intuitivo: ideal para momentos noturnos, cafés com amigos ou reflexões íntimas.



🧘 Benefícios Sensoriais
	•	Cria um ambiente acolhedor, sensual e envolvente.
	•	Traz presença para os sentidos e estimula memórias afetivas.
	•	Perfeita para relaxar, meditar ou em ocasiões especiais como jantares e celebrações íntimas.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   cerisemelts: {
    name: "Sortilège de Cerise",
    description:`Descubra o ritual encantador dos wax melts da La Luna Velas — pequenos fragmentos perfumados de cera 100% vegetal, feitos para derreter em difusores e liberar fragrâncias intensas que transformam o ambiente com suavidade e mistério.

Feitos à mão com essência premium, os wax melts são uma alternativa prática e elegante às velas tradicionais. Sem pavio, sem chama, apenas aroma puro se espalhando pelo ar — ideal para criar uma atmosfera mística, romântica ou terapêutica.



🌿 Como Usar:
	1.	Escolha um difusor (rechaud ou elétrico);
	2.	Adicione 1 a 3 pedacinhos de wax melt (dependendo do tamanho do espaço);
	3.	Aqueça e deixe a magia perfumada preencher o ar.

Após o uso, basta esperar esfriar e remover a cera solidificada para usar outra fragrância.

🌙 Por que usar wax melts La Luna?
	•	Feitos com cera 100% vegetal, sem parafina.
	•	Aromas intensos, duradouros e cuidadosamente equilibrados.
	•	Veganos e cruelty-free.
	•	Formatos fofos (corações, cubos, estrelas…) que encantam desde o visual até o olfato.
	•	Perfeitos para quem busca sensações, memórias e aconchego a cada derretida.



La Luna Velas convida você a acender não apenas um aroma, mas um estado de espírito.
Derreta um pedacinho do seu dia e sinta o perfume da transformação. 🌒`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },
  //Lavender Haze

  lavender60: {
    name: "Lavender Haze",
    description:`🌫️💜 Vela “Lavender Haze” – La Luna Velas

Permita que a calmaria da lavanda envolva seu ambiente em um véu de serenidade. Com o nome evocativo “Lavender Haze”, esta vela traz um aroma floral e suave que acalma a mente e desperta a alma.



🌸 Notas Olfativas
	•	Lavanda francesa pura: notas florais frescas e delicadas, que evocam campos violetas banhados pela neblina da manhã.
	•	Toque doce e herbal: nuances sutis de ervas secas que elevam a fragrância sem pesar.
	•	Base suave: possível presença de musk ou âmbar leve, conferindo profundidade e continuidade ao aroma.

O resultado é um perfume refinado e equilibrado — floral, etéreo e profundamente relaxante.



🌿 Essência e Intenção

Produzida artesanalmente com cera 100% vegetal e pavio de algodão, Lavender Haze foi pensada para promover um ritual de cuidado e bem-estar. Cada vela é vertida com consciência, trazendo o propósito de acender tranquilidade e presença interior.



🕯️ Ritual de Uso
	1.	Na primeira queima, permita que toda a superfície derreta (2–3 horas), garantindo que o aroma seja liberado de forma homogênea.
	2.	Antes de cada uso, aparar o pavio a cerca de 5 mm mantém a chama estável e a aromatização limpa.
	3.	Ideal para ambientes de descanso, leitura, ioga ou meditação — momentos que pedem uma atmosfera de calma e introspecção.



🧘 Benefícios Sensorial & Aromaterapia
	•	Contribui para reduzir o estresse e a ansiedade, acalmando a mente e o corpo.
	•	Melhora a qualidade do sono e facilita o repouso profundo.
	•	Ajuda a aliviar dores de cabeça e tensão muscular, especialmente nas regiões do pescoço e ombros.
	•	Estimula a clareza mental e o foco, sendo útil para momentos de concentração ou estudo.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   lavender90: {
    name: "Lavender Haze",
    description:`🌫️💜 Vela “Lavender Haze” – La Luna Velas

Permita que a calmaria da lavanda envolva seu ambiente em um véu de serenidade. Com o nome evocativo “Lavender Haze”, esta vela traz um aroma floral e suave que acalma a mente e desperta a alma.



🌸 Notas Olfativas
	•	Lavanda francesa pura: notas florais frescas e delicadas, que evocam campos violetas banhados pela neblina da manhã.
	•	Toque doce e herbal: nuances sutis de ervas secas que elevam a fragrância sem pesar.
	•	Base suave: possível presença de musk ou âmbar leve, conferindo profundidade e continuidade ao aroma.

O resultado é um perfume refinado e equilibrado — floral, etéreo e profundamente relaxante.



🌿 Essência e Intenção

Produzida artesanalmente com cera 100% vegetal e pavio de algodão, Lavender Haze foi pensada para promover um ritual de cuidado e bem-estar. Cada vela é vertida com consciência, trazendo o propósito de acender tranquilidade e presença interior.



🕯️ Ritual de Uso
	1.	Na primeira queima, permita que toda a superfície derreta (2–3 horas), garantindo que o aroma seja liberado de forma homogênea.
	2.	Antes de cada uso, aparar o pavio a cerca de 5 mm mantém a chama estável e a aromatização limpa.
	3.	Ideal para ambientes de descanso, leitura, ioga ou meditação — momentos que pedem uma atmosfera de calma e introspecção.



🧘 Benefícios Sensorial & Aromaterapia
	•	Contribui para reduzir o estresse e a ansiedade, acalmando a mente e o corpo.
	•	Melhora a qualidade do sono e facilita o repouso profundo.
	•	Ajuda a aliviar dores de cabeça e tensão muscular, especialmente nas regiões do pescoço e ombros.
	•	Estimula a clareza mental e o foco, sendo útil para momentos de concentração ou estudo.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   lavender160: {
    name: "Lavender Haze",
    description:`🌫️💜 Vela “Lavender Haze” – La Luna Velas

Permita que a calmaria da lavanda envolva seu ambiente em um véu de serenidade. Com o nome evocativo “Lavender Haze”, esta vela traz um aroma floral e suave que acalma a mente e desperta a alma.



🌸 Notas Olfativas
	•	Lavanda francesa pura: notas florais frescas e delicadas, que evocam campos violetas banhados pela neblina da manhã.
	•	Toque doce e herbal: nuances sutis de ervas secas que elevam a fragrância sem pesar.
	•	Base suave: possível presença de musk ou âmbar leve, conferindo profundidade e continuidade ao aroma.

O resultado é um perfume refinado e equilibrado — floral, etéreo e profundamente relaxante.



🌿 Essência e Intenção

Produzida artesanalmente com cera 100% vegetal e pavio de algodão, Lavender Haze foi pensada para promover um ritual de cuidado e bem-estar. Cada vela é vertida com consciência, trazendo o propósito de acender tranquilidade e presença interior.



🕯️ Ritual de Uso
	1.	Na primeira queima, permita que toda a superfície derreta (2–3 horas), garantindo que o aroma seja liberado de forma homogênea.
	2.	Antes de cada uso, aparar o pavio a cerca de 5 mm mantém a chama estável e a aromatização limpa.
	3.	Ideal para ambientes de descanso, leitura, ioga ou meditação — momentos que pedem uma atmosfera de calma e introspecção.



🧘 Benefícios Sensorial & Aromaterapia
	•	Contribui para reduzir o estresse e a ansiedade, acalmando a mente e o corpo.
	•	Melhora a qualidade do sono e facilita o repouso profundo.
	•	Ajuda a aliviar dores de cabeça e tensão muscular, especialmente nas regiões do pescoço e ombros.
	•	Estimula a clareza mental e o foco, sendo útil para momentos de concentração ou estudo.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   lavendermelts: {
    name: "Lavender Haze",
    description:`Descubra o ritual encantador dos wax melts da La Luna Velas — pequenos fragmentos perfumados de cera 100% vegetal, feitos para derreter em difusores e liberar fragrâncias intensas que transformam o ambiente com suavidade e mistério.

Feitos à mão com essência premium, os wax melts são uma alternativa prática e elegante às velas tradicionais. Sem pavio, sem chama, apenas aroma puro se espalhando pelo ar — ideal para criar uma atmosfera mística, romântica ou terapêutica.



🌿 Como Usar:
	1.	Escolha um difusor (rechaud ou elétrico);
	2.	Adicione 1 a 3 pedacinhos de wax melt (dependendo do tamanho do espaço);
	3.	Aqueça e deixe a magia perfumada preencher o ar.

Após o uso, basta esperar esfriar e remover a cera solidificada para usar outra fragrância.

🌙 Por que usar wax melts La Luna?
	•	Feitos com cera 100% vegetal, sem parafina.
	•	Aromas intensos, duradouros e cuidadosamente equilibrados.
	•	Veganos e cruelty-free.
	•	Formatos fofos (corações, cubos, estrelas…) que encantam desde o visual até o olfato.
	•	Perfeitos para quem busca sensações, memórias e aconchego a cada derretida.



La Luna Velas convida você a acender não apenas um aroma, mas um estado de espírito.
Derreta um pedacinho do seu dia e sinta o perfume da transformação. 🌒`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

  //Jardim Japonês
  jardim60: {
    name: "Jardim Japonês",
    description:`Em cada chama, um refúgio de tranquilidade. A vela “Jardim Japonês” evoca a serenidade dos bosques de bambu sob o orvalho da manhã, transportando você a um instante de paz e contemplação.



🕯️ Aroma que Encanta os Sentidos

Notas de bambu fresco e leve, envoltas em um buquê sutíl de flor de lótus e jasmim, com delicados toques cítricos que lembram o frescor do yuzu e violetas silvestres. Toda composição se assenta em uma base suave e amadeirada, criando um equilíbrio perfeito entre leveza e profundidade.

É como passear por um jardim zen ao amanhecer: sente-se a brisa suave, o aroma verde das folhas, e há um silêncio que acalma a mente e nutre o espírito. A lembrança de pequenos riachos tocando pedras e bambus inclinados compõem essa experiência meditativa.


🌸 Essência e Intenção

Produzida com cera vegetal de alta qualidade e pavio de algodão ou madeira (opcional), essa vela oferece queima limpa e prolongada. Cada vidro é decorado com símbolos sutis da estética japonesa, remetendo à elegância minimalista e ao equilíbrio dos elementos naturais.



🌙 Ritual de Uso
	•	Primeira queima: deixe derreter a camada superior por pelo menos 2 a 4 horas para garantir uma queima uniforme.
	•	Manutenção: aparar o pavio a 5 mm antes de cada uso para preservar a pureza da fragrância e evitar fumaça excessiva.


🧘 Benefícios sensoriais
	•	Cria ambiente de meditação, relaxamento ou introspecção.
	•	Ideal para práticas de yoga, banho ritualístico ou leitura tranquila.
	•	Aromas verdes e aquáticos que conectam corpo e mente à energia equilibrada da natureza.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   jardim90: {
    name: "Jardim Japonês",
    description:`Em cada chama, um refúgio de tranquilidade. A vela “Jardim Japonês” evoca a serenidade dos bosques de bambu sob o orvalho da manhã, transportando você a um instante de paz e contemplação.



🕯️ Aroma que Encanta os Sentidos

Notas de bambu fresco e leve, envoltas em um buquê sutíl de flor de lótus e jasmim, com delicados toques cítricos que lembram o frescor do yuzu e violetas silvestres. Toda composição se assenta em uma base suave e amadeirada, criando um equilíbrio perfeito entre leveza e profundidade.

É como passear por um jardim zen ao amanhecer: sente-se a brisa suave, o aroma verde das folhas, e há um silêncio que acalma a mente e nutre o espírito. A lembrança de pequenos riachos tocando pedras e bambus inclinados compõem essa experiência meditativa.


🌸 Essência e Intenção

Produzida com cera vegetal de alta qualidade e pavio de algodão ou madeira (opcional), essa vela oferece queima limpa e prolongada. Cada vidro é decorado com símbolos sutis da estética japonesa, remetendo à elegância minimalista e ao equilíbrio dos elementos naturais.



🌙 Ritual de Uso
	•	Primeira queima: deixe derreter a camada superior por pelo menos 2 a 4 horas para garantir uma queima uniforme.
	•	Manutenção: aparar o pavio a 5 mm antes de cada uso para preservar a pureza da fragrância e evitar fumaça excessiva.


🧘 Benefícios sensoriais
	•	Cria ambiente de meditação, relaxamento ou introspecção.
	•	Ideal para práticas de yoga, banho ritualístico ou leitura tranquila.
	•	Aromas verdes e aquáticos que conectam corpo e mente à energia equilibrada da natureza.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   jardim160: {
    name: "Jardim Japonês",
    description:`Em cada chama, um refúgio de tranquilidade. A vela “Jardim Japonês” evoca a serenidade dos bosques de bambu sob o orvalho da manhã, transportando você a um instante de paz e contemplação.



🕯️ Aroma que Encanta os Sentidos

Notas de bambu fresco e leve, envoltas em um buquê sutíl de flor de lótus e jasmim, com delicados toques cítricos que lembram o frescor do yuzu e violetas silvestres. Toda composição se assenta em uma base suave e amadeirada, criando um equilíbrio perfeito entre leveza e profundidade.

É como passear por um jardim zen ao amanhecer: sente-se a brisa suave, o aroma verde das folhas, e há um silêncio que acalma a mente e nutre o espírito. A lembrança de pequenos riachos tocando pedras e bambus inclinados compõem essa experiência meditativa.


🌸 Essência e Intenção

Produzida com cera vegetal de alta qualidade e pavio de algodão ou madeira (opcional), essa vela oferece queima limpa e prolongada. Cada vidro é decorado com símbolos sutis da estética japonesa, remetendo à elegância minimalista e ao equilíbrio dos elementos naturais.



🌙 Ritual de Uso
	•	Primeira queima: deixe derreter a camada superior por pelo menos 2 a 4 horas para garantir uma queima uniforme.
	•	Manutenção: aparar o pavio a 5 mm antes de cada uso para preservar a pureza da fragrância e evitar fumaça excessiva.


🧘 Benefícios sensoriais
	•	Cria ambiente de meditação, relaxamento ou introspecção.
	•	Ideal para práticas de yoga, banho ritualístico ou leitura tranquila.
	•	Aromas verdes e aquáticos que conectam corpo e mente à energia equilibrada da natureza.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   jardimmelts: {
    name: "Jardim Japonês",
    description:`Descubra o ritual encantador dos wax melts da La Luna Velas — pequenos fragmentos perfumados de cera 100% vegetal, feitos para derreter em difusores e liberar fragrâncias intensas que transformam o ambiente com suavidade e mistério.

Feitos à mão com essência premium, os wax melts são uma alternativa prática e elegante às velas tradicionais. Sem pavio, sem chama, apenas aroma puro se espalhando pelo ar — ideal para criar uma atmosfera mística, romântica ou terapêutica.



🌿 Como Usar:
	1.	Escolha um difusor (rechaud ou elétrico);
	2.	Adicione 1 a 3 pedacinhos de wax melt (dependendo do tamanho do espaço);
	3.	Aqueça e deixe a magia perfumada preencher o ar.

Após o uso, basta esperar esfriar e remover a cera solidificada para usar outra fragrância.

🌙 Por que usar wax melts La Luna?
	•	Feitos com cera 100% vegetal, sem parafina.
	•	Aromas intensos, duradouros e cuidadosamente equilibrados.
	•	Veganos e cruelty-free.
	•	Formatos fofos (corações, cubos, estrelas…) que encantam desde o visual até o olfato.
	•	Perfeitos para quem busca sensações, memórias e aconchego a cada derretida.



La Luna Velas convida você a acender não apenas um aroma, mas um estado de espírito.
Derreta um pedacinho do seu dia e sinta o perfume da transformação. 🌒`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },
 
  //Flor do Sol

  sol60: {
    name: "Flor do Sol",
    description:`Ilumine seus sentidos com uma fragrância que celebra a serenidade e a luz. “Flor do Sol” evoca a delicadeza doce da flor de laranjeira, irradiando uma aura de pureza, calor e encanto natural.



🌬️ Notas Olfativas
	•	Top note: pétalas frescas de flor de laranjeira (orange blossom), vibrantes e luminosas, com uma doçura floral que desperta memórias de jardins em flor ao entardecer.
	•	Heart note: néroli e petitgrain, com nuances cítricas de limão e laranja, equilibrando a doçura com clareza e frescor.
	•	Base note: uma doce persistência de neroli florescente, criando um acabamento calmante que reforça a pureza e profundidade da fragrância.



🌿 Essência & Intenção

Produzida com cera 100% vegetal e pavio de algodão, a vela “Flor do Sol” foi elaborada para irradiar serenidade e alegria. Inspirada nos rituais mediterrâneos e na simbologia da flor de laranjeira como símbolo de pureza e recomeço, ela é pensada para acalmar a mente e elevar o espírito com elegância atemporal.



🌻 Ritual de Uso
	1.	Primeira queima: deixe toda a superfície derreter por 2–3 horas para assegurar que o aroma se espalhe uniformemente.
	2.	Cuidados: aparar o pavio a cerca de 5 mm antes de cada uso mantém a chama limpa e a fragrância mais pura.
	3.	Ambiente ideal: ideal para manhãs de renovação, momentos de leitura leve ou práticas meditativas, onde o ar se enche de luz e presença.



🧘 Benefícios Sensoriais
	•	Promove leveza emocional e relaxamento graças ao efeito calmante do aroma floral e cítrico da flor de laranjeira.
	•	Conecta o espaço à natureza em sua forma mais pura, evocando jardins floridos e rituais ancestrais de bem-estar.
	•	Ideal para despertar suavemente os sentidos e renovar ambientes com uma fragrância fresca, feminina e encantadora.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

    sol90: {
    name: "Flor do Sol",
    description:`Ilumine seus sentidos com uma fragrância que celebra a serenidade e a luz. “Flor do Sol” evoca a delicadeza doce da flor de laranjeira, irradiando uma aura de pureza, calor e encanto natural.



🌬️ Notas Olfativas
	•	Top note: pétalas frescas de flor de laranjeira (orange blossom), vibrantes e luminosas, com uma doçura floral que desperta memórias de jardins em flor ao entardecer.
	•	Heart note: néroli e petitgrain, com nuances cítricas de limão e laranja, equilibrando a doçura com clareza e frescor.
	•	Base note: uma doce persistência de neroli florescente, criando um acabamento calmante que reforça a pureza e profundidade da fragrância.



🌿 Essência & Intenção

Produzida com cera 100% vegetal e pavio de algodão, a vela “Flor do Sol” foi elaborada para irradiar serenidade e alegria. Inspirada nos rituais mediterrâneos e na simbologia da flor de laranjeira como símbolo de pureza e recomeço, ela é pensada para acalmar a mente e elevar o espírito com elegância atemporal.



🌻 Ritual de Uso
	1.	Primeira queima: deixe toda a superfície derreter por 2–3 horas para assegurar que o aroma se espalhe uniformemente.
	2.	Cuidados: aparar o pavio a cerca de 5 mm antes de cada uso mantém a chama limpa e a fragrância mais pura.
	3.	Ambiente ideal: ideal para manhãs de renovação, momentos de leitura leve ou práticas meditativas, onde o ar se enche de luz e presença.



🧘 Benefícios Sensoriais
	•	Promove leveza emocional e relaxamento graças ao efeito calmante do aroma floral e cítrico da flor de laranjeira.
	•	Conecta o espaço à natureza em sua forma mais pura, evocando jardins floridos e rituais ancestrais de bem-estar.
	•	Ideal para despertar suavemente os sentidos e renovar ambientes com uma fragrância fresca, feminina e encantadora.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

    sol160: {
    name: "Flor do Sol",
    description:`Ilumine seus sentidos com uma fragrância que celebra a serenidade e a luz. “Flor do Sol” evoca a delicadeza doce da flor de laranjeira, irradiando uma aura de pureza, calor e encanto natural.



🌬️ Notas Olfativas
	•	Top note: pétalas frescas de flor de laranjeira (orange blossom), vibrantes e luminosas, com uma doçura floral que desperta memórias de jardins em flor ao entardecer.
	•	Heart note: néroli e petitgrain, com nuances cítricas de limão e laranja, equilibrando a doçura com clareza e frescor.
	•	Base note: uma doce persistência de neroli florescente, criando um acabamento calmante que reforça a pureza e profundidade da fragrância.



🌿 Essência & Intenção

Produzida com cera 100% vegetal e pavio de algodão, a vela “Flor do Sol” foi elaborada para irradiar serenidade e alegria. Inspirada nos rituais mediterrâneos e na simbologia da flor de laranjeira como símbolo de pureza e recomeço, ela é pensada para acalmar a mente e elevar o espírito com elegância atemporal.



🌻 Ritual de Uso
	1.	Primeira queima: deixe toda a superfície derreter por 2–3 horas para assegurar que o aroma se espalhe uniformemente.
	2.	Cuidados: aparar o pavio a cerca de 5 mm antes de cada uso mantém a chama limpa e a fragrância mais pura.
	3.	Ambiente ideal: ideal para manhãs de renovação, momentos de leitura leve ou práticas meditativas, onde o ar se enche de luz e presença.



🧘 Benefícios Sensoriais
	•	Promove leveza emocional e relaxamento graças ao efeito calmante do aroma floral e cítrico da flor de laranjeira.
	•	Conecta o espaço à natureza em sua forma mais pura, evocando jardins floridos e rituais ancestrais de bem-estar.
	•	Ideal para despertar suavemente os sentidos e renovar ambientes com uma fragrância fresca, feminina e encantadora.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

    solmelts: {
    name: "Flor do Sol",
    description:`Descubra o ritual encantador dos wax melts da La Luna Velas — pequenos fragmentos perfumados de cera 100% vegetal, feitos para derreter em difusores e liberar fragrâncias intensas que transformam o ambiente com suavidade e mistério.

Feitos à mão com essência premium, os wax melts são uma alternativa prática e elegante às velas tradicionais. Sem pavio, sem chama, apenas aroma puro se espalhando pelo ar — ideal para criar uma atmosfera mística, romântica ou terapêutica.



🌿 Como Usar:
	1.	Escolha um difusor (rechaud ou elétrico);
	2.	Adicione 1 a 3 pedacinhos de wax melt (dependendo do tamanho do espaço);
	3.	Aqueça e deixe a magia perfumada preencher o ar.

Após o uso, basta esperar esfriar e remover a cera solidificada para usar outra fragrância.

🌙 Por que usar wax melts La Luna?
	•	Feitos com cera 100% vegetal, sem parafina.
	•	Aromas intensos, duradouros e cuidadosamente equilibrados.
	•	Veganos e cruelty-free.
	•	Formatos fofos (corações, cubos, estrelas…) que encantam desde o visual até o olfato.
	•	Perfeitos para quem busca sensações, memórias e aconchego a cada derretida.



La Luna Velas convida você a acender não apenas um aroma, mas um estado de espírito.
Derreta um pedacinho do seu dia e sinta o perfume da transformação. 🌒`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },


  //Sacred Mist
  sacred60: {
    name: "Sacred Mist",
    description:`Entre num instante de pureza e serenidade. “Sacred Mist” evoca uma aura de calma refinada — o aroma sutil do chá branco convida à introspecção, eleva o ambiente e inspira presença.



🌬️ Notas Olfativas
	•	Top notes: toques delicados de chá branco e aromas cítricos suaves (bergamota, tangerina ou limão), trazendo frescor e abertura luminosa.
	•	Heart notes: nuances florais etéreas, como jasmines leves e lírios verdes, complementadas por notas herbais discretas (alecrim, mandarina ou chá verde).
	•	Base notes: fundo suave de musk, cedro ou âmbar delicado — confere profundidade, elegância e um acabamento purificante ao aroma.

O resultado é uma fragrância leve, limpa e sofisticada, ideal para ambientes de calma ambientação.



🔮 Benefícios Aromaterapêuticos
	•	Promove relaxamento e alívio do estresse, ajudando a silenciar a mente.
	•	Neutraliza odores indesejados e eleva o frescor do ambiente, trazendo sensação de limpeza e leveza.
	•	Estimula bem-estar emocional, serenidade e clareza mental — ideal para meditação, autocuidado ou reflexões internas.



🌿 Essência & Intenção

Feita com cera vegetal premium e pavio de algodão, a vela “Sacred Mist” oferece uma queima limpa e constante. Criada com percepção e energia intencional, cada vela carrega a vibração do silêncio sagrado e do espaço interior.



🕯️ Ritual de Uso
	•	Primeira queima: permita que todo o topo derreta (2–3 horas) para ativar completamente o aroma.
	•	Aparar o pavio: mantenha-o com cerca de 5 mm para garantir uma chama estável e fragrância pura.
	•	Momento ideal: perfeita para práticas meditativas, ioga, rituais de autocuidado ou para transformar o ambiente em um refúgio de calma.



🧘 Sensações que Desperta
	•	Atmosfera de leveza, introspecção e presença.
	•	Um véu sensorial que purifica o lugar e quieta a mente.
	•	Ideal para espaços que pedem silêncio, contemplação e reconexão interior.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

  sacred90: {
    name: "Sacred Mist",
    description:`Entre num instante de pureza e serenidade. “Sacred Mist” evoca uma aura de calma refinada — o aroma sutil do chá branco convida à introspecção, eleva o ambiente e inspira presença.



🌬️ Notas Olfativas
	•	Top notes: toques delicados de chá branco e aromas cítricos suaves (bergamota, tangerina ou limão), trazendo frescor e abertura luminosa.
	•	Heart notes: nuances florais etéreas, como jasmines leves e lírios verdes, complementadas por notas herbais discretas (alecrim, mandarina ou chá verde).
	•	Base notes: fundo suave de musk, cedro ou âmbar delicado — confere profundidade, elegância e um acabamento purificante ao aroma.

O resultado é uma fragrância leve, limpa e sofisticada, ideal para ambientes de calma ambientação.



🔮 Benefícios Aromaterapêuticos
	•	Promove relaxamento e alívio do estresse, ajudando a silenciar a mente.
	•	Neutraliza odores indesejados e eleva o frescor do ambiente, trazendo sensação de limpeza e leveza.
	•	Estimula bem-estar emocional, serenidade e clareza mental — ideal para meditação, autocuidado ou reflexões internas.



🌿 Essência & Intenção

Feita com cera vegetal premium e pavio de algodão, a vela “Sacred Mist” oferece uma queima limpa e constante. Criada com percepção e energia intencional, cada vela carrega a vibração do silêncio sagrado e do espaço interior.



🕯️ Ritual de Uso
	•	Primeira queima: permita que todo o topo derreta (2–3 horas) para ativar completamente o aroma.
	•	Aparar o pavio: mantenha-o com cerca de 5 mm para garantir uma chama estável e fragrância pura.
	•	Momento ideal: perfeita para práticas meditativas, ioga, rituais de autocuidado ou para transformar o ambiente em um refúgio de calma.



🧘 Sensações que Desperta
	•	Atmosfera de leveza, introspecção e presença.
	•	Um véu sensorial que purifica o lugar e quieta a mente.
	•	Ideal para espaços que pedem silêncio, contemplação e reconexão interior.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

  sacred160: {
    name: "Sacred Mist",
    description:`Entre num instante de pureza e serenidade. “Sacred Mist” evoca uma aura de calma refinada — o aroma sutil do chá branco convida à introspecção, eleva o ambiente e inspira presença.



🌬️ Notas Olfativas
	•	Top notes: toques delicados de chá branco e aromas cítricos suaves (bergamota, tangerina ou limão), trazendo frescor e abertura luminosa.
	•	Heart notes: nuances florais etéreas, como jasmines leves e lírios verdes, complementadas por notas herbais discretas (alecrim, mandarina ou chá verde).
	•	Base notes: fundo suave de musk, cedro ou âmbar delicado — confere profundidade, elegância e um acabamento purificante ao aroma.

O resultado é uma fragrância leve, limpa e sofisticada, ideal para ambientes de calma ambientação.



🔮 Benefícios Aromaterapêuticos
	•	Promove relaxamento e alívio do estresse, ajudando a silenciar a mente.
	•	Neutraliza odores indesejados e eleva o frescor do ambiente, trazendo sensação de limpeza e leveza.
	•	Estimula bem-estar emocional, serenidade e clareza mental — ideal para meditação, autocuidado ou reflexões internas.



🌿 Essência & Intenção

Feita com cera vegetal premium e pavio de algodão, a vela “Sacred Mist” oferece uma queima limpa e constante. Criada com percepção e energia intencional, cada vela carrega a vibração do silêncio sagrado e do espaço interior.



🕯️ Ritual de Uso
	•	Primeira queima: permita que todo o topo derreta (2–3 horas) para ativar completamente o aroma.
	•	Aparar o pavio: mantenha-o com cerca de 5 mm para garantir uma chama estável e fragrância pura.
	•	Momento ideal: perfeita para práticas meditativas, ioga, rituais de autocuidado ou para transformar o ambiente em um refúgio de calma.



🧘 Sensações que Desperta
	•	Atmosfera de leveza, introspecção e presença.
	•	Um véu sensorial que purifica o lugar e quieta a mente.
	•	Ideal para espaços que pedem silêncio, contemplação e reconexão interior.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },
 
  sacredmelts: {
    name: "Sacred Mist",
    description:`Descubra o ritual encantador dos wax melts da La Luna Velas — pequenos fragmentos perfumados de cera 100% vegetal, feitos para derreter em difusores e liberar fragrâncias intensas que transformam o ambiente com suavidade e mistério.

Feitos à mão com essência premium, os wax melts são uma alternativa prática e elegante às velas tradicionais. Sem pavio, sem chama, apenas aroma puro se espalhando pelo ar — ideal para criar uma atmosfera mística, romântica ou terapêutica.


🌿 Como Usar:
	1.	Escolha um difusor (rechaud ou elétrico);
	2.	Adicione 1 a 3 pedacinhos de wax melt (dependendo do tamanho do espaço);
	3.	Aqueça e deixe a magia perfumada preencher o ar.

Após o uso, basta esperar esfriar e remover a cera solidificada para usar outra fragrância.

🌙 Por que usar wax melts La Luna?
	•	Feitos com cera 100% vegetal, sem parafina.
	•	Aromas intensos, duradouros e cuidadosamente equilibrados.
	•	Veganos e cruelty-free.
	•	Formatos fofos (corações, cubos, estrelas…) que encantam desde o visual até o olfato.
	•	Perfeitos para quem busca sensações, memórias e aconchego a cada derretida.



La Luna Velas convida você a acender não apenas um aroma, mas um estado de espírito.
Derreta um pedacinho do seu dia e sinta o perfume da transformação. 🌒`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

  //Cold Brew Coffee

  cold60: {
    name: "Cold Brew Coffee",
    description:`Sinta o frescor etéreo da manhã em cada chama: “Cold Brew Coffee” é uma fragrância que une a intensidade acolhedora do café gelado à doçura cremosa da baunilha — um convite ao ritual diário da presença e da pausa sensorial.



🌸 Notas Olfativas
	•	Top notes: aroma marcante de café cold brew, intenso e vibrante — tão real que quase parece frio no ar, com notas de grãos torrados e espresso fresco.
	•	Heart notes: cremosidade suave de leite gelado e dulçor da baunilha, suavizando a rigidez do café com elegância aromática.
	•	Base notes: fundo acolhedor com toques sutis de caramelo, musk e chocolate leve — conferindo profundidade, refinamento e um acabamento gourmand.

O resultado é uma harmonia equilibrada entre frescor, doçura e sofisticação — tão reconfortante quanto uma manhã revigorante.



🔮 Essência & Intenção

Feita com cera vegetal premium (soja ou coco) e pavio de algodão — ou madeira opcional —, “Cold Brew Coffee” é produzida artesanalmente com atenção e intenção. Cada vela carrega a energia da calma e da presença, transformando o cotidiano em um pequeno ritual de autocuidado e leveza.



🕯️ Ritual de Uso
	1.	Primeira queima: permita que toda a superfície derreta (2 a 3 horas), assegurando que o aroma se espalhe por igual.
	2.	Cuidados: mantenha o pavio aparado a cerca de 5 mm antes de cada uso para garantir queima limpa e aroma puro.
	3.	Momento ideal: perfeita para manhãs meditativas, sessões de criação, leitura tranquila ou para acompanhar um café fresco — trazendo foco e acolhimento.



🧘 Benefícios Sensoriais
	•	Evoca sensação de clareza e motivação ao unir a energia do café ao conforto da baunilha.
	•	Estimula memórias olfativas de cafés artesanais e manhãs revigorantes.
	•	Cria um ambiente acolhedor, leve e sofisticado — ideal para espaços de trabalho, leitura ou momentos introspectivos.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   cold90: {
    name: "Cold Brew Coffee",
    description:`Sinta o frescor etéreo da manhã em cada chama: “Cold Brew Coffee” é uma fragrância que une a intensidade acolhedora do café gelado à doçura cremosa da baunilha — um convite ao ritual diário da presença e da pausa sensorial.



🌸 Notas Olfativas
	•	Top notes: aroma marcante de café cold brew, intenso e vibrante — tão real que quase parece frio no ar, com notas de grãos torrados e espresso fresco.
	•	Heart notes: cremosidade suave de leite gelado e dulçor da baunilha, suavizando a rigidez do café com elegância aromática.
	•	Base notes: fundo acolhedor com toques sutis de caramelo, musk e chocolate leve — conferindo profundidade, refinamento e um acabamento gourmand.

O resultado é uma harmonia equilibrada entre frescor, doçura e sofisticação — tão reconfortante quanto uma manhã revigorante.



🔮 Essência & Intenção

Feita com cera vegetal premium (soja ou coco) e pavio de algodão — ou madeira opcional —, “Cold Brew Coffee” é produzida artesanalmente com atenção e intenção. Cada vela carrega a energia da calma e da presença, transformando o cotidiano em um pequeno ritual de autocuidado e leveza.



🕯️ Ritual de Uso
	1.	Primeira queima: permita que toda a superfície derreta (2 a 3 horas), assegurando que o aroma se espalhe por igual.
	2.	Cuidados: mantenha o pavio aparado a cerca de 5 mm antes de cada uso para garantir queima limpa e aroma puro.
	3.	Momento ideal: perfeita para manhãs meditativas, sessões de criação, leitura tranquila ou para acompanhar um café fresco — trazendo foco e acolhimento.



🧘 Benefícios Sensoriais
	•	Evoca sensação de clareza e motivação ao unir a energia do café ao conforto da baunilha.
	•	Estimula memórias olfativas de cafés artesanais e manhãs revigorantes.
	•	Cria um ambiente acolhedor, leve e sofisticado — ideal para espaços de trabalho, leitura ou momentos introspectivos.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   cold160: {
    name: "Cold Brew Coffee",
    description:`Sinta o frescor etéreo da manhã em cada chama: “Cold Brew Coffee” é uma fragrância que une a intensidade acolhedora do café gelado à doçura cremosa da baunilha — um convite ao ritual diário da presença e da pausa sensorial.



🌸 Notas Olfativas
	•	Top notes: aroma marcante de café cold brew, intenso e vibrante — tão real que quase parece frio no ar, com notas de grãos torrados e espresso fresco.
	•	Heart notes: cremosidade suave de leite gelado e dulçor da baunilha, suavizando a rigidez do café com elegância aromática.
	•	Base notes: fundo acolhedor com toques sutis de caramelo, musk e chocolate leve — conferindo profundidade, refinamento e um acabamento gourmand.

O resultado é uma harmonia equilibrada entre frescor, doçura e sofisticação — tão reconfortante quanto uma manhã revigorante.



🔮 Essência & Intenção

Feita com cera vegetal premium (soja ou coco) e pavio de algodão — ou madeira opcional —, “Cold Brew Coffee” é produzida artesanalmente com atenção e intenção. Cada vela carrega a energia da calma e da presença, transformando o cotidiano em um pequeno ritual de autocuidado e leveza.



🕯️ Ritual de Uso
	1.	Primeira queima: permita que toda a superfície derreta (2 a 3 horas), assegurando que o aroma se espalhe por igual.
	2.	Cuidados: mantenha o pavio aparado a cerca de 5 mm antes de cada uso para garantir queima limpa e aroma puro.
	3.	Momento ideal: perfeita para manhãs meditativas, sessões de criação, leitura tranquila ou para acompanhar um café fresco — trazendo foco e acolhimento.



🧘 Benefícios Sensoriais
	•	Evoca sensação de clareza e motivação ao unir a energia do café ao conforto da baunilha.
	•	Estimula memórias olfativas de cafés artesanais e manhãs revigorantes.
	•	Cria um ambiente acolhedor, leve e sofisticado — ideal para espaços de trabalho, leitura ou momentos introspectivos.`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },

   coldmelts: {
    name: "Cold Brew Coffee",
    description:`Descubra o ritual encantador dos wax melts da La Luna Velas — pequenos fragmentos perfumados de cera 100% vegetal, feitos para derreter em difusores e liberar fragrâncias intensas que transformam o ambiente com suavidade e mistério.

Feitos à mão com essência premium, os wax melts são uma alternativa prática e elegante às velas tradicionais. Sem pavio, sem chama, apenas aroma puro se espalhando pelo ar — ideal para criar uma atmosfera mística, romântica ou terapêutica.



🌿 Como Usar:
	1.	Escolha um difusor (rechaud ou elétrico);
	2.	Adicione 1 a 3 pedacinhos de wax melt (dependendo do tamanho do espaço);
	3.	Aqueça e deixe a magia perfumada preencher o ar.

Após o uso, basta esperar esfriar e remover a cera solidificada para usar outra fragrância.

🌙 Por que usar wax melts La Luna?
	•	Feitos com cera 100% vegetal, sem parafina.
	•	Aromas intensos, duradouros e cuidadosamente equilibrados.
	•	Veganos e cruelty-free.
	•	Formatos fofos (corações, cubos, estrelas…) que encantam desde o visual até o olfato.
	•	Perfeitos para quem busca sensações, memórias e aconchego a cada derretida.



La Luna Velas convida você a acender não apenas um aroma, mas um estado de espírito.
Derreta um pedacinho do seu dia e sinta o perfume da transformação. 🌒`,
    price: "R$00,00",
    images:[
      "images/candlesample.jpg",
      "images/candlesample.jpg",
      "images/candlesample.jpg"
    ],
  },


  //especiais
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
    price: "R$ 45,99",
    images: [
      "images/coralineCandle.jpg",
      "images/coralineCandle2.jpg",
      "images/coralineCandle3.jpg"
    ],
    collection:"halloween"
  },

  beetlejuice: {
    name: "Beetlejuice",
    description:`Surpreenda seus sentidos com um aroma tão vibrante quanto o próprio Beetlejuice. “Beetlejuice” é uma fragrância fresca, divertida e levemente misteriosa, mesclando a acidez da maçã verde com doçura sutil que desperta nostalgia e presença.



🌬️ Notas Olfativas
	•	Notas de Cabeça: explosão cítrica e crocante de maçã verde (green apple), coadjuvada por um leve toque de ruibarbo ou abacaxi, abrindo caminho para um aroma vibrante e revigorante.
	•	Notas de Coração: sutis flores brancas como jasmim ou rosa rosa, equilibrando a acidez com suavidade floral.
	•	Notas de Fundo: doce final de açúcares cristalinos e musk suave, que prolonga a experiência com elegância e leveza.

O resultado é um aroma fresco, brilhante e com um fundo doce levemente gourmand.



🔮 Conceito & Energia

Produzida com cera vegetal de alta qualidade e pavio de algodão, a vela “Beetlejuice” carrega uma aura lúdica e espirituosa. Seu nome presta homenagem à irreverência do clássico filme, enquanto a fragrância traz leveza, personalidade e um leve choque sensorial — como aquele personagem inusitado que aparece quando menos se espera.



🕯️ Ritual de Uso
	1.	Primeira queima: permita que toda a superfície derreta (cerca de 2 horas), permitindo que todas as nuances se elevem em uníssono.
	2.	Manutenção: apare o pavio a cerca de 5 mm antes de cada uso para queima limpa e prolongada.
	3.	Momento ideal: perfeito para quem busca renovação energética, alegria, criatividade ou simplesmente deseja trazer frescor ao ambiente com um toque de irreverência.



🧘 Benefícios Sensoriais
	•	Ilumina o ambiente com frescor e vitalidade natural.
	•	Estimula sensações de surpresa, leveza e presença.
	•	Ideal para momentos criativos, espaços de celebração ou para renovar o ar em qualquer ocasião.`,
    price: "R$45,99",
    images: [
      "images/beetlejuiceCandle.jpg",
      "images/beetlejuiceCandle2.jpg",
      "images/beetlejuiceCandle3.jpg"
    ],
    collection:"halloween"
  },

  skull1: {
    name: "Caveira",
    description:`Misteriosa, acolhedora e provocante: a vela “Caveira” combina o visual impactante de uma caveira com o aroma quente e apimentado da canela. Uma homenagem ao Halloween que equilibra o medo suave com o conforto sensual da especiaria ancestral.



🌶️ Notas Olfativas
	•	Top notes: aroma picante e reconfortante de canela, que enche o ambiente de calor e presença.
	•	Heart notes: nuances doces e suaves, que remetem a baunilha ou açúcar mascavo, suavizando o toque ardente da canela e criando harmonia.
	•	Base notes: possível presença de musk ou âmbar sutil, adicionando profundidade, longevidade e um acabamento envolvente.

O resultado é um perfume intenso, festivo e levemente gourmand, perfeito para noites de outono e celebrações sombrias com charme.



🔮 Essência e Intenção

Em formato de caveira, esta vela traz a dualidade estética entre a celebração mística do dia das bruxas e o aconchego sensorial da canela. Cada vela é feita com cera vegetal de qualidade e pavio de algodão, garantindo queima limpa e distribuição delicada da fragrância.



🕯️ Ritual de Uso
	1.	Primeira queima: deixe derreter totalmente a superfície da vela por 2–3 horas — garantindo que o aroma se libere por igual.
	2.	Manutenção: aparar o pavio a cerca de 5 mm antes de cada uso ajuda na estabilidade da chama e evita fumaça excessiva.
	3.	Ambiente ideal: ideal para noites temáticas de Halloween, sessões de leitura à luz bruxuleante ou para transformar qualquer ambiente com um clima envolvente e elegante.



🧘 Benefícios Sensoriais

Desde tempos antigos, a canela tem sido usada não apenas como especiaria, mas como elemento terapêutico e simbólico. Ela proporciona:
	•	Bem-estar emocional e relaxamento, aliviando tensões e elevando o humor com seu aroma acolhedor.
	•	Sensação de calor e aconchego, ideal para criar ambientes acolhedores e convidativos.
	•	Aumento de foco e clareza mental, sendo útil em ambientes de trabalho ou estudo, mesmo em tom festivo.
	•	Ambiente festivo e nostálgico, associado a memórias de festividades, conforto e celebrações íntimas.`,
    price: "R$22,99",
    images:[
      "images/skullCandle.jpg",
      "images/skullCandle2.jpg",
      "images/skullCandle3.jpg"
    ],
    collection: "halloween"
  },

  luna: {
    name: "Luna",
    description:`Inspirada na fiel e sábia guardiã Luna, de Sailor Moon, esta vela em forma de gatinha é um tributo delicado à magia lunar e à presença serena que encanta o coração de quem ama essa personagem icônica   . Compacta, elegante e cheia de personalidade, ela traz o símbolo da lua e a energia poética que inspira a sua marca.



🌫️ Conceito & Encanto

Feita em forma tridimensional de um gatinho com traços suaves e minimalistas, a vela evoca a figura de Luna — o gato negro com a lua crescente na testa que guia e protege as Sailor Guardians. A forma reflete seu design moderno e contemporâneo, enquanto o aroma e a luminosidade se unem para criar uma experiência sensorial mágica.



🌿 Aroma & Intenção 

Fragrância suave e elegante, como uma névoa lunar, que pode combinar bem com notas como:
	•	Lavanda e âmbar: calmante e espiritual, ideal para práticas de silêncio interior.
	•	Chá branco ou chá verde com jasmim: leve e delicado, evocando presença e luminosidade.
	•	Toques sutis de baunilha ou almíscar: aquecem a aura sem pesar.

Essas combinações reforçam a ideia da vela como um ritual pequeno e encantado — assim como Luna, buscando iluminar suavemente o caminho da alma.



🕯️ Ritual de Uso
	1.	Primeira queima: deixe a vela derreter completamente por toda a largura da forma — entre 1 e 2 horas — para garantir máxima liberação de aroma.
	2.	Cuidados: apare o pavio a cerca de 5 mm antes de cada uso para manter a chama precisa, limpa e controlada.
	3.	Ambiente ideal: ideal para espaços silenciosos, leitura suave, autocuidado noturno ou meditações que pedem calma e conexão com o interior.



🧘 Benefícios Sensorial & Emocional
	•	Estética encantadora: adiciona charme e personalidade ao ambiente, mesmo sem estar acesa.
	•	Energia mística serena: remete à espiritualidade da lua, ao cuidado gentil e à presença consciente.
	•	Conexão afetiva: perfeita para fãs de Sailor Moon ou amantes de felinos — especialmente Luna — e para quem busca acolhimento em objetos poéticos.`,
    price:"R$23,99",
    images:[
      "images/lunaCandle.jpg",
      "images/lunaCandle2.jpg"
    ],
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

  const isSpecial = product.collection === "halloween"; // ou product.isSpecial === true

  document.getElementById("detailedProduct").innerHTML = `
    <section class="productStack">
      <h2 class="productTitle"><strong>${product.name}</strong></h2>

      <img id="mainImage" src="${product.images[0]}" class="mainImage" alt="${product.name}">

      <section class="imageGalleryRow">
        ${product.images.map((img, i) => `
          <img src="${img}" class="thumbnail" onclick="switchImage('${img}')" alt="Imagem ${i + 1}">
        `).join("")}
      </section>

      <p class="price"><strong>${product.price}</strong></p>
      <input type="text" id="cep" placeholder="Digite seu CEP">
      <button onclick="calculateShipping()">Calcular Frete</button>
      <button class="buyButton ${isSpecial ? "specialCandle" : ""}" data-id="${productId}">Comprar</button>
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

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount(); 
});
