import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sobre from "./components/Sobre/Sobre"
import Servicos from "./components/Servicos/Servicos";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";

function App(){
  return (
    <div>
      <Header />
      <Hero />
      <Sobre 
        nome="Dra. Belline"
        crp="CRP 06/123456"
        descricao1="Sou psicóloga clínica com mais de 8 anos de experiência, especializada no atendimento de adultos que enfrentam ansiedade, crises de identidade e dificuldades nos relacionamentos."
        descricao2="Minha abordagem é baseada na Terapia Cognitivo-Comportamental, com foco em criar um espaço acolhedor onde você possa se expressar livremente e encontrar caminhos para uma vida mais plena."
        />
        <Servicos />
        <Contato 
        whatsapp="(55) 19 123456789"
        email="exemplo@gmail.com"
        endereo="Rua das Flores, 123 — São Paulo, SP"
        />
        <Footer 
        nome="Dra. Belline"
        crp="CRP 06/123456"
        />
    </div>
  );
}

export default App