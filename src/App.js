import React from 'react';
import AjoutCitation from './components/AjoutCitation';
import ListeCitations from './components/ListeCitations';
import CitationAleatoire from './components/CitationAleatoire';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className='app'>

        <CitationAleatoire />

        <div className='division-ligne'></div>

        <div className='conteneur-principal'>

          <AjoutCitation />

          <ListeCitations />

        </div>



      </div>  
    );
  }
}

export default App;
