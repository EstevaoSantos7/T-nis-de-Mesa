import React, { useState, useEffect } from 'react';
import styles from './style.module.css';


import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

export default function Carrossel() {
  const slides = [
    {
      titulo: 'Pink Lemonade',
      descricao:
        'Para transformar seu rolê em um mar de rosas, sirva um Corote Drinks Ice Pink Lemonade para os convidados e veja a magia acontecer. Uma deliciosa combinação de lima, limão, morango e vodka pronta para ser consumida bem gelada.',
      imagem: Ultimato,

      link: '#'
    },
    {
      titulo: 'Limão',
      descricao:
        'Quando a vida nos dá limões, nós fazemos o quê? Ora, mas não poderia ser mais óbvio: um drink de Corote e um rolê, que é pra deixar todo mundo bem refrescado e super animado.',
      imagem: Minicraft,

      link: '#'
    },
    {
      titulo: 'Mango Jungle',
      descricao:
        'Uma mistura refrescante de Manga, Maracujá e Carambola, elaborada cuidadosamente para proporcionar uma experiência tropical única e revigorante.',

      imagem: Ultimato,
      link: '#'
    }
  ];

  const [indiceAtual, setIndeceAtual] = useState(0);
  const [animandoImagem, setAnimandoImagem] = useState(false);

  // Função para ir ao próximo slide
  function irParaProximo() {
    if (indiceAtual === slides.length - 1) {
      setIndeceAtual(0);
    } else {
      setIndeceAtual(indiceAtual + 1);
    }
  }

  // Função para ir ao slide anterior
  function irParaAnterior() {
    if (indiceAtual === 0) {
      setIndeceAtual(slides.length - 1);
    } else {
      setIndeceAtual(indiceAtual - 1);
    }
  }

  // Controla a animação da imagem ao trocar o slide
  useEffect(() => {
    setAnimandoImagem(true);

    // Remove a animação após o tempo (0.8s)
    const timer = setTimeout(() => {
      setAnimandoImagem(false);
    }, 800); // Tempo da animação




    return () => clearTimeout(timer); // Limpa o timer caso o componente seja desmontado
  }, [indiceAtual]); // Re-executa sempre que o índice do slide mudar

  return (
    <div className={styles.carrosselContainer}>
      <div className={styles.carrosselSlide} style={{ background: `url(${slides[indiceAtual].imagem})no-repeat center center/cover ` }}>

        <div className={styles.carrosselTexto}>
          <h2>{slides[indiceAtual].titulo}</h2>
          <p>{slides[indiceAtual].descricao}</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.botaoComprar}
            style={{ color: slides[indiceAtual].cor }}
          >
            Comprar
          </a>
        </div>


        {/* className={animandoImagem ? styles.expand : ''} // Adiciona a animação de expansão */}

      </div>
      <div className={styles.controlesCarrossel}>
        <button className={styles.btnAnterior} onClick={irParaAnterior}>
          <FaChevronCircleLeft color="#e8e3e3" size={60} />
        </button>
        <button className={styles.btnProximo} onClick={irParaProximo}>
          <FaChevronCircleRight color="#e8e3e3" size={60} />
        </button>
      </div>
    </div>
  );
}
