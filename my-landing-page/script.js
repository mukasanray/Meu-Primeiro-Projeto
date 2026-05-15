/* =========================================================
   DELICIOUS BURGER - JAVASCRIPT PRINCIPAL
========================================================= */

/* =========================================================
   ELEMENTOS PRINCIPAIS
========================================================= */

const menuBtn = document.getElementById('menuBtn');

const nav = document.getElementById('nav');

const overlay = document.getElementById('overlay');

/* =========================================================
   MENU HAMBÚRGUER
========================================================= */

if(menuBtn && nav){

  menuBtn.addEventListener('click', () => {

    nav.classList.toggle('open');

    overlay.classList.toggle('active');

  });

}

/* =========================================================
   FECHAR MENU AO CLICAR NO OVERLAY
========================================================= */

if(overlay){

  overlay.addEventListener('click', () => {

    nav.classList.remove('open');

    overlay.classList.remove('active');

  });

}

/* =========================================================
   FECHAR MENU AO CLICAR NOS LINKS
========================================================= */

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {

  link.addEventListener('click', () => {

    nav.classList.remove('open');

    overlay.classList.remove('active');

  });

});

/* =========================================================
   FECHAR MENU COM ESC
========================================================= */

document.addEventListener('keydown', (event) => {

  if(event.key === 'Escape'){

    nav.classList.remove('open');

    overlay.classList.remove('active');

  }

});

/* =========================================================
   TOTAL DOS PEDIDOS
========================================================= */

let total = 0;

/* =========================================================
   FUNÇÃO ALTERAR QUANTIDADE
========================================================= */

function alterar(id, valor, preco){

  const elemento = document.getElementById(id);

  if(!elemento){

    return;

  }

  let quantidade = Number(elemento.innerText);

  quantidade += valor;

  /* NÃO PERMITE NEGATIVO */

  if(quantidade < 0){

    return;

  }

  elemento.innerText = quantidade;

  total += valor * preco;

  /* EVITA TOTAL NEGATIVO */

  if(total < 0){

    total = 0;

  }

  const totalElemento = document.getElementById('total');

  if(totalElemento){

    totalElemento.innerText = total.toFixed(2);

  }

}

/* =========================================================
   BOTÕES "SELECIONAR"
========================================================= */

const botoesSelecionar = document.querySelectorAll('.item button');

botoesSelecionar.forEach(botao => {

  botao.addEventListener('click', () => {

    /* IGNORA BOTÕES + E - */

    if(
      botao.innerText === '+' ||
      botao.innerText === '-'
    ){

      return;

    }

    /* EVITA REPETIR */

    if(botao.classList.contains('ativo')){

      return;

    }

    botao.classList.add('ativo');

    botao.innerText = 'Selecionado ✓';

    botao.style.background = '#38a169';

  });

});

/* =========================================================
   BOTÃO HERO
========================================================= */

const heroButton = document.querySelector('.cta-btn');

if(heroButton){

  heroButton.addEventListener('click', () => {

    const secao = document.getElementById('promocoes');

    if(secao){

      secao.scrollIntoView({

        behavior:'smooth'

      });

    }

  });

}

/* =========================================================
   FORMULÁRIOS
========================================================= */

const formularios = document.querySelectorAll('form');

formularios.forEach(formulario => {

  formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    alert('Mensagem enviada com sucesso!');

    formulario.reset();

  });

});

/* =========================================================
   ANIMAÇÃO DOS CARDS
========================================================= */

const cards = document.querySelectorAll('.categoria');

if(cards.length > 0){

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.style.opacity = '1';

        entry.target.style.transform = 'translateY(0)';

      }

    });

  }, {

    threshold:0.2

  });

  cards.forEach(card => {

    card.style.opacity = '0';

    card.style.transform = 'translateY(40px)';

    card.style.transition = '0.6s ease';

    observer.observe(card);

  });

}

/* =========================================================
   SCROLL SUAVE
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e){

    e.preventDefault();

    const destino = document.querySelector(
      this.getAttribute('href')
    );

    if(destino){

      destino.scrollIntoView({

        behavior:'smooth'

      });

    }

  });

});

/* =========================================================
   EFEITO HOVER DOS BOTÕES
========================================================= */

const botoes = document.querySelectorAll('button');

botoes.forEach(botao => {

  botao.addEventListener('mouseenter', () => {

    botao.style.transform = 'scale(1.05)';

  });

  botao.addEventListener('mouseleave', () => {

    botao.style.transform = 'scale(1)';

  });

});

/* =========================================================
   RESPONSIVIDADE EXTRA
========================================================= */

window.addEventListener('resize', () => {

  if(window.innerWidth > 768){

    nav.classList.remove('open');

    overlay.classList.remove('active');

  }

});

/* =========================================================
   CARREGAMENTO
========================================================= */

window.addEventListener('load', () => {

  document.body.style.opacity = '1';

});

/* =========================================================
   LOG
========================================================= */

console.log('✅ Delicious Burger carregado com sucesso!');