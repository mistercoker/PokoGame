import React, { Component } from 'react'
import Pokedex from './Pokedex';

export default class Pokegame extends Component {
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
        let hand1 = [];
        let hand2 = [...this.props.pokeman];
        while(hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randPokeman = hand2.splice(randIdx, 1)[0]
            hand1.push(randPokeman);
        }
        let exp1 = hand1.reduce((exp, pokeman) => exp + pokeman.base_experience, 0)
        let exp2 = hand2.reduce((exp, pokeman) => exp + pokeman.base_experience, 0)
        return (
            <div>
                <Pokedex pokeman={hand1} exp={exp1} isWinner={exp1 > exp2}/>
                <Pokedex pokeman={hand2} exp={exp2} isWinner={exp2 > exp1}/>
            </div>
        )
    }
}
