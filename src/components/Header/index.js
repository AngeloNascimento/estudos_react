/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Header.module.css";

function Header(){
/*cria a função que vai exibir os componentes visualmente*/
    return(/*sempre dentro da função deve chamar um return */
        /*dentro do return se coloca o conteudo que quer exibir*/
        <header className={styles.header}>{/*faz o chamado do arquivo .css*/}
            <span>MovieFlix</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    );
}

/*faz a exportação do componente*/
export default Header;