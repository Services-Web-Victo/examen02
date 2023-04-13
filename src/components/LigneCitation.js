import React from 'react';
import './LigneCitation.css';

class LigneCitation extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='ligne-citation'>
                <blockquote>Le texte de ma citation</blockquote>
                <div className='ligne-auteur'>
                    <cite>- l'auteur de la citation</cite>
                    <i className="fas fa-trash-alt icone-supprimer" title="Supprimer la citation"></i>
                </div>
            </div>
            
        );
    }
}

export default LigneCitation;