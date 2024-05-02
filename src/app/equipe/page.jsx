// Equipe.js
"use client"
import Image from "next/image";
import styles from "../styles/equipe.module.css";

// Lista de membros da equipe
const membros = [
    {
        id: 1,
        nome: "Membro 1",
        imagem: "/assets/img/members/Sampaio.svg",
        github: "https://github.com/gabrielsampaiog",
        email: "#",
        linkedin: "https://www.linkedin.com/in/gabrielsampaiogianini/"
    },
    {
        id: 2,
        nome: "Membro 2",
        imagem: "/assets/img/members/Neves.svg",
        github: "https://github.com/Neveszera",
        email: "https://gabrielgng.2@gmail.com",
        linkedin: "https://www.linkedin.com/in/-gabriel-neves"
    },
    {
        id: 3,
        nome: "Membro 2",
        imagem: "/assets/img/members/Livia.svg",
        github: "https://github.com/freitaslivia",
        email: "#",
        linkedin: "https://www.linkedin.com/in/l%C3%ADvia-freitas-ferreira/"
    },
    {
        id: 4,
        nome: "Membro 2",
        imagem: "/assets/img/members/Rafael.svg",
        github: "https://github.com/rhmendonca",
        email: "#",
        linkedin: "https://www.linkedin.com/in/rafael-henrique-de-mendon%C3%A7a-51263326b/"
    },
    {
        id: 5,
        nome: "Membro 2",
        imagem: "/assets/img/members/Romeu.svg",
        github: "https://github.com/RenatoRussano",
        email: "#",
        linkedin: "https://www.linkedin.com/in/renato-russano-706423a3/"
    },
];

export default function Equipe() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Image src="/assets/img/logo/Logo_Taqui.svg" alt="Logo Taqui" width={113} height={113} />
                <nav>
                    <ul className={styles.navLinks}>
                        <li><a href="/"><img src="/assets/img/icons/setaEsquerda.svg" alt="Ícone de seta para esquerda" />home</a></li>
                    </ul>
                </nav>
            </header>
            <div className={styles.textContent}>
                <h1>Nossa equipe</h1>
                <p>Conheça um pouco mais sobre os desenvolvedores atrás deste projeto.</p>
            </div>
            <section className={styles.members}>
                {membros.map((membro) => (
                    <div className={styles.member} key={membro.id}>
                        <Image src={membro.imagem} alt={membro.nome} width={209} height={308} />
                        <div className={styles.iconBackground}>
                            <a href={membro.email} target="_blank"><img className={styles.icon} src="/assets/img/icons/envelopeRoxo.svg" alt="Ícone E-mail" style={{ width: "40px", height: "40px" }} /></a>
                            <a href={membro.github} target="_blank"><img className={styles.icon} src="/assets/img/icons/githubRoxo.svg" alt="Ícone GitHub" style={{ width: "39px", height: "40px" }} /></a>
                            <a href={membro.linkedin} target="_blank"><img className={styles.icon} src="/assets/img/icons/linkedinRoxo.svg" alt="Ícone LinkedIn" style={{ width: "39px", height: "39px" }} /></a>
                        </div>
                    </div>
                ))}
            </section>
            <div className={styles.effect}>
                <Image src="/assets/img/articles/efeitoLanding.svg" alt="Imagem Rodapé" width={1368} height={212} />
            </div>
        </div>
    );
}
