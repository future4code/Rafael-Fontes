import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?grayscale&random=1'}
          fotoPost={'https://picsum.photos/200/150?random=1'}
        />
        <Post
          nomeUsuario={'joão'}
          fotoUsuario={'https://picsum.photos/50/50?random=2'}
          fotoPost={'https://picsum.photos/200/150?grayscale&random=2'}
        />
        <Post
          nomeUsuario={'catarina'}
          fotoUsuario={'https://picsum.photos/50/50?random=3'}
          fotoPost={'https://picsum.photos/200/150?random=3'}
        />
      </div>
      
    );
  }
}

export default App;
