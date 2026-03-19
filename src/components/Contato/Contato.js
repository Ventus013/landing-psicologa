import { useState } from 'react';
import './Contato.css';


function Contato({ whatsapp, email, endereco }) {

  const numeroLimpo = whatsapp.replace(/\D/g, '');

  // useState para guardar o que o usuário digita no formulário
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  // useState para controlar se a mensagem foi enviada
  const [enviado, setEnviado] = useState(false);

  // Função que roda quando o botão é clicado
  function handleEnviar() {
    if (nome === '' || mensagem === '') return;

    // Monta o link do WhatsApp com os dados preenchidos
    const texto = `Olá! Meu nome é ${nome}. ${mensagem}`;
    const link = `https://wa.me/${numeroLimpo}?text=${encodeURIComponent(texto)}`;
    window.open(link, '_blank');

    setEnviado(true);
  }

  return (
    <section className="contato" id="contato">

      <div className="contato-info">
        <h2>Contato</h2>
        <p>Agende sua consulta</p>

        <div className="contato-item">
          <span>WhatsApp</span>
          <a href={`https://wa.me/${numeroLimpo}`} target="_blank" rel="noreferrer">
            {whatsapp}
          </a>
        </div>

        <div className="contato-item">
          <span>E-mail</span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>

        <div className="contato-item">
          <span>Endereço</span>
          <span>{endereco}</span>
        </div>

        <iframe
        title='Mapa do consultorio'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9190.97080468614!2d-47.628470750000005!3d-22.719992749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c631b9aeb833cf%3A0xe84c0dff11bed9f0!2sVila%20Independencia%2C%20Piracicaba%20-%20SP!5e1!3m2!1spt-BR!2sbr!4v1773879462166!5m2!1spt-BR!2sbr"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contato-formulario">

        {/* operador ternário: se enviado for true mostra uma coisa, senão mostra outra */}
        {enviado ? (
          <p className="mensagem-enviada">
            Mensagem enviada! Em breve entro em contato.
          </p>
        ) : (
          <>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
            <textarea
              placeholder="Sua mensagem"
              value={mensagem}
              onChange={e => setMensagem(e.target.value)}
            />
            <button className="contato-botao" onClick={handleEnviar}>
              Enviar pelo WhatsApp
            </button>
          </>
        )}

      </div>
    </section>
  );
}

export default Contato;