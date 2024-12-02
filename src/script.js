const botoes = document.getElementById[ btn , btn01, btn02 ]; // Seleciona todos os botões
const imageBox = document.getElementById('imageBox');
const description = document.getElementById('description');



btn.addEventListener('click', () => {
    imageBox.style.backgroundImage = "url('img/bt01.png')"; // Troca a imagem de fundo
    btn.classList.add('active'); // Ativa o botão 2
    btn01.classList.remove('active');
    btn02.classList.remove('active');
    description.textContent = 'Massa de chocolate recheada com chocolate preto, chocolate branco e morangos.'; // Desativa o botão 1
  });

  btn01.addEventListener('click', () => {
    imageBox.style.backgroundImage = "url('img/bt03.png')"; // Troca a imagem de fundo
    btn01.classList.add('active'); // Ativa o botão 2
    btn.classList.remove('active');
    btn02.classList.remove('active');
    description.textContent = 'Massa de chocolate recheada de Nutella e bownie.'; // Desativa o botão 1

  });

  btn02.addEventListener('click', () => {
    imageBox.style.backgroundImage = "url('img/bt02.png')"; // Troca a imagem de fundo
    btn02.classList.add('active'); // Ativa o botão 2
    btn.classList.remove('active');
    btn01.classList.remove('active');
    description.textContent = 'Massa Branca, Chocolate ao leite, chocolate branco e Confete'; // Desativa o botão 1

  });

 

  //--------------------------------------------------------------------------------



  //----------------------------------------------------------------------------


