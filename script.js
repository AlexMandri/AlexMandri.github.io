// Alerta de boas-vindas ao entrar no site
window.addEventListener('load', function() {
    // alert('Bem-vindo ao meu portfólio! 😊. É um prazer tê-lo aqui!');
  });
  
  // Quando o usuário clica em um projeto, mostramos uma mensagem
  const projetos = document.querySelectorAll('#projetos li');
  
  projetos.forEach(function(projeto) {
    projeto.addEventListener('click', function() {
      // alert(`Você clicou em: ${projeto.textContent}`);
    });
  });
  