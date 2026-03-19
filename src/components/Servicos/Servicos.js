import "./Servicos.css";

const listaServicos = [
  {
    id: 1,
    titulo: 'Terapia Individual',
    descricao: 'Atendimento personalizado para promover autoconhecimento, equilíbrio emocional e desenvolvimento pessoal.'
  },
  {
    id: 2,
    titulo: 'Atendimento de crianças e adolescentes',
    descricao: 'Apoio psicológico para o desenvolvimento emocional, comportamento e desafios da infância e adolescência.'
  },
  {
    id: 3,
    titulo: 'Atendimento de crianças e adolescentes',
    descricao: 'Acompanhamento especializado no tratamento da dependência, focando na recuperação e qualidade de vida.'
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