import { useState } from "react";
import "./Sobre.css";

function Sobre({ nome, crp, titulo1, titulo2, titulo3, titulo4, descricao1, descricao2, descricao3, descricao4 }) {
    const [atual, setAtual] = useState(0);
    const [animando, setAnimando] = useState(false);

    const textos = [
        { titulo: titulo1, texto: descricao1 },
        { titulo: titulo2, texto: descricao2 },
        { titulo: titulo3, texto: descricao3 },
        { titulo: titulo4, texto: descricao4 },
    ].filter(item => item.texto);

    function trocar(index) {
        setAnimando(true);
        setTimeout(() => {
            setAtual(index);
            setAnimando(false);
        }, 300); // tempo da animação
    }

    return (
        <section className="sobre" id="sobre">
            <div className="sobre-foto">
                Foto da Profissional
            </div>

            <div className="sobre-texto">
                <h2>{nome}</h2>
                <h3>{crp}</h3>

                <div className={`sobre-conteudo ${animando ? "saindo" : ""}`}>
                    <h4>{textos[atual].titulo}</h4>
                    <p>{textos[atual].texto}</p>
                </div>

                <div className="sobre-setas">
                    <button onClick={() => trocar(atual - 1)} disabled={atual === 0}>←</button>
                    <button onClick={() => trocar(atual + 1)} disabled={atual === textos.length - 1}>→</button>
                </div>
            </div>
        </section>
    );
}

export default Sobre;