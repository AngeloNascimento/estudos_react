import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";/*importação do componente*/

function App() {
  return (/*dentro da função se escreve uma codigo em jsx que é o html dentro do java script*/
    
    <>

    <Header/>{/*para usar o component na pagina, usa uma tag com o nome do componente*/}
    <Banner/>
    <h1>Hello World!</h1>
    <p>estou aprendendo react, ola</p>
    <Footer/>
    
    </>

  );
}
/*consertar erro da imagem, tentar encontrar respostas no video anterior aula 3*/
export default App;
