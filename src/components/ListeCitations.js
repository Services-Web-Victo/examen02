import React from 'react';
import LigneCitation from './LigneCitation';
import './ListeCitations.css';

class ListeCitations extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <section className='liste-citation'>
                <h2 className='titre-liste'>Liste de mes citations</h2>

                {/* Ajoutez les composantes LigneCitation ici */}

            </section>
        );
    }
}

export default ListeCitations;