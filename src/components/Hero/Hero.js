import "./Hero.css"

function Hero({whatsapp}) {

    const numeroLimpo = whatsapp.replace(/\D/g, '');

    return (
        <section className="hero">
            <div className="hero-conteudo">
                <h1 className="hero-titulo">Vitoria Bellini</h1>
                <p className="hero-subtitulo">Psicologia Clínica</p>
                <p className="hero-descricao">
                    Um espaço seguro para você se reconectar consigo mesmo,
                    trabalhar suas emoções e construir uma vida mais equilibrada
                </p>
                <a href={`https://wa.me/${numeroLimpo}`} className="hero-botao">Agendar Consulta</a>
            </div>
            <img className="hero-logo" src="/logo.png" alt="logo"/>
        </section>
    );
}

export default Hero