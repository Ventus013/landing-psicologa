import "./Sobre.css";

function Sobre({nome, crp, descricao1, descricao2}){
    return (
        <section className="sobre" id="sobre"> 

            <div className="sobre-foto">
                Foto da Profissional
            </div>

            <div className="sobre-texto">
                <h2>{nome}</h2>
                <h3>{crp}</h3>
                <p>{descricao1}</p>
                <p>{descricao2}</p>
            </div>

        </section>
    );
}

export default Sobre