import React from 'react';
import './CitationAleatoire.css';

class CitationAleatoire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded : true
        }
    }

    render() {

        // Par défaut si la variable isLoaded est false, affiche un icone de chargement
        let citationHTML = <i className="fas fa-sync-alt icone-chargement"></i>;
        // Si la variable est vrai, affiche les informations de la citations
        if(this.state.isLoaded){
            citationHTML =  
            <div className='case-citation'>
                <blockquote>Le texte de ma citation</blockquote>
                <cite>- L'auteur</cite>
                <div>
                    Soumis par L'usager qui a ajouté la soumission 
                    <i className="fas fa-sync-alt" title="Charger une autre citation"></i>
                </div>
            </div> 
        }
        
        return (
            <section className='section-citation'>
                {/* Le html généré selon la valeur de la variable isLoaded est injecté ici */}
                {citationHTML}
            </section>

        );
    }
}

export default CitationAleatoire;