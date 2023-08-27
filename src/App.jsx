import React, { Component } from "react";
import TableBody from "./components/body/TableBody";
import TableFooter from "./components/footer/TableFooter";
import TabelaHead from "./components/header/TabelaHead";
class App extends Component {
  state = {
    livros: []
  }
  componentDidMount() {
    fetch("/api/livros.json")
      .then((response) => response.json())
      .then((livros) => this.setState({ livros }))
      .catch((error) => {
        console.log(`Temos um  error de request ${error}`)
      })
      .finally(() => {
        console.log("Executamos o fetch");
      });
  }
  handleRemoverLivro = (id) => {
    const Livros = this.state.livros.filter((l) => l.id !== id);
    this.setState({ livros: Livros });
    }
  handleOrdenarCrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    );
    this.setState({ livros });
  }

  handleOrdenarDecrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? 0 : 1
    );
    livros.reverse();
    this.setState({ livros });
  }
  render() {
    return (
      <table className="tabela">
        <TabelaHead
          ordenarCrescente={this.handleOrdenarCrescente}
          ordenarDecrescente={this.handleOrdenarDecrescente}        
        />
        <TableFooter qtdelivros={this.state.livros.length} />
        <TableBody livros={this.state.livros}
          removerLivro={this.handleRemoverLivro}
        />
      </table>
    );
  }
}

export default App;
