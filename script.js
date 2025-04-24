// Selecionando os elementos do DOM
const imagem = document.getElementById('imagem');
const descricao = document.getElementById('descricao');

// Variável para controlar o estado atual
let mostrandoDescricao = false;

// Evento de clique na imagem
imagem.addEventListener('click', () => {
  mostrandoDescricao = true;
  imagem.style.display = 'none';
  descricao.style.display = 'block';
});

// Evento de clique na descrição
descricao.addEventListener('click', () => {
  mostrandoDescricao = false;
  imagem.style.display = 'block';
  descricao.style.display = 'none';
});