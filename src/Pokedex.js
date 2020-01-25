import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    static defaultProps = {
        pokeman: [
        {id: 1, name: 'Bulbasaur', type: 'poison', base_experience: 62},
        {id: 2, name: 'Ivysaur', type: 'poison', base_experience: 63},
        {id: 6, name: 'Charizard', type: 'flying', base_experience: 72},
        {id: 9, name: 'Blastoise', type: 'water', base_experience: 178},
        {id: 12, name: 'Butterfree', type: 'bug', base_experience: 112},
        {id: 15, name: 'Beedrill', type: 'bug', base_experience: 112},
        {id: 16, name: 'Pidgey', type: 'bug', base_experience: 112},
        {id: 18, name: 'Pidgeot', type: 'normal', base_experience: 95},
        {id: 19, name: 'Rattata', type: 'normal', base_experience: 225},
        {id: 20, name: 'Raticate', type: 'normal', base_experience: 65}
    ]
};
    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <div className="Pokedex-cards">
                    {this.props.pokeman.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;
