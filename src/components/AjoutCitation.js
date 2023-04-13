import React from 'react';
import './AjoutCitation.css'


class AjoutCitation extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <section className='ajout-citation'>
                <form className='form-ajout'>
                    <h2 className='titre-ajout'>Ajouter une citation</h2>

                    <label htmlFor='texte'>Citation</label>
                    <textarea id="texte" name="texte" rows="5" cols="40"></textarea>

                    <label htmlFor='auteur'>Auteur</label>
                    

                    <div className='derniere-ligne'>
                    <input type='text' id='auteur' name='auteur' />
                    <input type='submit' value='Enregistrer' className='bouton'/>    
                    </div>
                    
                </form>
            </section>
        );
    }
}

export default AjoutCitation;