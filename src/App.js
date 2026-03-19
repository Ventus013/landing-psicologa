import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sobre from "./components/Sobre/Sobre"
import Servicos from "./components/Servicos/Servicos";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Sobre
        nome="Vitoria Bellini"
        crp="CRP 06/156375"
        titulo1="Sobre mim"
        descricao1="Psicóloga com 6 anos de experiência em atendimento clínico de crianças e adolescentes, atuando com psicoterapia infantil e psicoterapia para adolescentes. Trabalho a partir da abordagem psicanalítica, com ênfase na teoria winnicottiana, oferecendo um espaço de escuta qualificada e acolhimento.
        Realizo atendimento psicológico para questões emocionais, dificuldades comportamentais, ansiedade, desenvolvimento emocional.
        Meu trabalho é voltado para a promoção da saúde mental e do desenvolvimento psíquico, respeitando a singularidade de cada paciente"
        titulo2="Atendimento Especializado para Crianças e Adolescentes"
        descricao2="Se você, como pai ou responsável, percebe que seu filho enfrenta ansiedade infantil, dificuldade na escola, dificuldade de relacionamento com colegas ou familiares, ou condições específicas como o mutismo seletivo, estou aqui para ajudar. Atuo também no acolhimento de situações delicadas como o abuso, oferecendo um suporte psicológico ético e profissional para a recuperação e o bem-estar. Minha abordagem, fundamentada na psicanálise, visa compreender os processos internos de cada indivíduo, respeitando sua singularidade e auxiliando na construção de novos caminhos"
        titulo3="Suporte Profissional em Dependência Química (Álcool e Outras Drogas)"
        descricao3="Além do foco principal no público infantojuvenil, também ofereço tratamento para dependência química, incluindo álcool e outras drogas. Com profissionalismo e discrição, auxilio indivíduos que buscam ajuda para dependentes de álcool e drogas a encontrar um caminho para a reabilitação e a construção de uma vida livre do vício. Este serviço é conduzido com a mesma dedicação e ética que permeiam todos os meus atendimentos, garantindo um suporte integral à saúde mental"
        titulo4="Um Espaço para Compreender e Transformar"
        descricao4="Minha prática clínica se estende ao acolhimento de demandas como dificuldades emocionais e desafios nos relacionamentos, tanto em jovens quanto em adultos. Acredito que um ambiente terapêutico seguro e livre de julgamentos é essencial para que cada pessoa possa se expressar com liberdade, explorar suas questões e desenvolver recursos internos para lidar com as adversidades da vida. Se você busca um psicólogo clínico que ofereça um suporte humanizado e eficaz, convido-o a entrar em contato para conversarmos sobre como posso ajudar"
      />
      <Servicos />
      <Contato
        whatsapp="(55) (19) 99426-5667"
        email="exemplo@gmail.com"
        endereo="Rua das Flores, 123 — São Paulo, SP"
      />
      <Footer
        nome="Vitoria Bellini"
        crp="CRP 06/156375"
      />
    </div>
  );
}

export default App