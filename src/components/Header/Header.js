import "./Header.css"

function Header() {
    return (
        <header className="header">
            <p className="header-nome">Dra. Bellini</p>
            <nav className="header-nav">
                <a href="#sobre">Sobre</a>
                <a href="#servicos">Serviços</a>
                <a href="#contato">Contato</a>
            </nav>
        </header>
    );
}

export default Header