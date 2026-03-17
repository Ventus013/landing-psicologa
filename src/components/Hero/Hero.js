import "./Hero.css"

function Hero() {
    return (
        <section className="hero">
            <p className="hero-subtitulo">Psicologia Clínica</p>
            <h1>Dra. Belline</h1>
            <p className="hero-especialidade">Especialista em Ansiedade e Autoconhecimento</p>
            <p className="hero-descricao">
                Um espaço seguro para você se reconectar consigo mesmo,
                trabalhar suas emoções e construir uma vida mais equilibrada.
            </p>
            <a href="#contato" className="hero-botao">Agendar Consulta</a>
        </section>
    );
}

export default Hero