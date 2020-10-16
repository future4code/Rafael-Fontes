import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50?grayscale&random=1',
        fotoPost:'https://picsum.photos/200/150?random=1'
      },
      {
        nomeUsuario:'joão',
        fotoUsuario:'https://picsum.photos/50/50?random=2',
        fotoPost:'https://picsum.photos/200/150?grayscale&random=2'
      },
      {
        nomeUsuario:'catarina',
        fotoUsuario:'https://picsum.photos/50/50?random=3',
        fotoPost:'https://picsum.photos/200/150?random=3'
      }
    ],

    valorInputNomeU:'',
    valorInputFotoU:'',
    valorInputFotoP:''
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeU,
      fotoUsuario: this.state.valorInputFotoU,
      fotoPost: this.state.valorInputFotoP
    }

    const novaListaDePosts = [novoPost, ...this.state.posts]
    this.setState({posts:novaListaDePosts})
  }
    
  onChangeNomeU = (event) => {
    this.setState({valorInputNomeU: event.target.value})
  }
 
  onChangeFotoU = (event) => {
    this.setState({valorInputFotoU: event.target.value})
  }

  onChangeFotoP = (event) => {
    this.setState({valorInputFotoP: event.target.value})
  }

  render() {

    const listaDePosts = this.state.posts.map((post) => {
        return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />  
        )
    })

    return (
      <div className={'app-container'}>
               
        <input
          value={this.state.valorInputNomeU}
          onChange={this.onChangeNomeU}
          placeholder="Nome do Usuário"
        />
        
        <input
          value={this.state.valorInputFotoU}
          onChange={this.onChangeFotoU}
          placeholder="Foto do Usuário"
        />
        
        <input
          value={this.state.valorInputFotoP}
          onChange={this.onChangeFotoP}
          placeholder="Foto do Post"
        />

        <button onClick={this.adicionarPost}>Adicionar</button>

        {listaDePosts}
      </div>
      
    );
  }
}

export default App;
