import './Footer.css';

function Footer({ nome, crp }) {
  return (
    <footer className="footer">
      <p>{nome}</p>
      <p>{crp}</p>
      <span>Todos os direitos reservados © {new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;