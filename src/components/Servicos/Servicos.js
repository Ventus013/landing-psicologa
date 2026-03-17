import "./Servicos.css";

const listaServicos = [
  {
    id: 1,
    titulo: 'Terapia Individual',
    descricao: 'Atendimento personalizado para adultos que buscam autoconhecimento, superação de crises e desenvolvimento pessoal.'
  },
  {
    id: 2,
    titulo: 'Ansiedade e Estresse',
    descricao: 'Tratamento especializado para transtornos de ansiedade, síndrome do pânico e estresse crônico.'
  },
  {
    id: 3,
    titulo: 'Terapia de Casal',
    descricao: 'Espaço seguro para casais trabalharem a comunicação, resolverem conflitos e fortalecerem o relacionamento.'
  }
];

function Servicos() {
  return (
    <section className="servicos" id="servicos">
      <h2 className="servicos-titulo">Serviços</h2>
      <p className="servicos-subtitulo">Como posso te ajudar</p>

      <div className="servicos-grid">

        {listaServicos.map(servico => (
          <div className="servico-card" key={servico.id}>
            <h3>{servico.titulo}</h3>
            <p>{servico.descricao}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Servicos;