import { Schema, model } from 'mongoose';

const pokemonSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        type: [{
            type: String,
            required: true
        }],
        stats: {
            hp: {
                type: Number,
                required: true
            },
            attack: {
                type: Number,
                required: true
            },
            defense: {
                type: Number,
                required: true
            },
            spattack: {
                type: Number,
                required: true
            },
            spdefense: {
                type: Number,
                required: true
            },
            speed: {
                type: Number,
                required: true
            }
        },
        damages: {
            normal: Number,
            fire: Number,
            water: Number,
            electric: Number,
            grass: Number,
            ice: Number,
            fight: Number,
            poison: Number,
            ground: Number,
            flying: Number,
            psychic: Number,
            bug: Number,
            rock: Number,
            ghost: Number,
            dragon: Number,
            dark: Number,
            steel: Number
        },
        misc: {
            classification: String,
            height: String,
            weight: Number,
            happiness: Number
        }
    }
);

const Pokemon = model('Pokemon', pokemonSchema);

export default Pokemon;