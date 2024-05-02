"use client"

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://landingpagetaqui-default-rtdb.firebaseio.com/users.json', { // Substitua 'users' pelo nome da sua coleção
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso!');
      } else {
        console.error('Erro ao enviar dados para o banco de dados.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados para o banco de dados:', error);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src="/assets/img/logo/Logo_Taqui.svg" alt="Logo Taqui" width={113} height={113} />
        <nav>
          <ul className={styles.navLinks}>
            <li><a href="#">o projeto<img src="/assets/img/icons/link.svg" alt="Ícone 1" /></a></li>
            <li><a href="/equipe">nossa equipe<img src="/assets/img/icons/setaDireita.svg" alt="Ícone 2" /></a></li>
          </ul>
        </nav>
      </header>
      <section className={styles.content}>
        <div className={styles.leftContent}>
          <Image src="/assets/img/articles/mobile.svg" alt="Mobile Taqui" width={578} height={786} />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.rightContentText}>
            <h1>inscreva-se</h1>
            <p>Como podemos transformar o modelo atual de negócios em recomendações de produto em um modelo relevante para o consumidor?</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="nome" name="nome" value={formData.nome} onChange={handleChange} className={styles.inputCustom} />
            <input type="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} className={styles.inputCustom} />
            <button type="submit">inscreva-se<img src="/assets/img/icons/setaDireita.svg" alt="Ícone Inscreva-se" /></button>
          </form>
          <div className={styles.rightContentCode}>
            <Image src="/assets/img/articles/qrcode.svg" alt="Imagem QrCode Prototipo" width={700} height={220} />
          </div>
        </div>
      </section>
      <div className={styles.effect}>
        <Image src="/assets/img/articles/efeitoLanding.svg" alt="Imagem Rodapé" width={1368} height={212} />
      </div>
    </div>
  );
}
