import { useEffect, useState } from 'react';
import useFetchData from '../hooks/useFetchData';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const pokemonLoadCount = 20; // Initially load 20 Pokemon
    const [offset, setOffset] = useState(0);

    const { data, loading, error } = useFetchData(pokemonLoadCount, offset);

    useEffect(() => {
        const getPokemonList = async () => {
            if (data) {
                const slicedResults = data.slice(
                    offset,
                    offset + pokemonLoadCount
                );

                const details = await Promise.all(
                    slicedResults.map(async (pokemon) => {
                        return {
                            name: pokemon.name,
                            img: pokemon.img,
                            types: pokemon.type.join(', '),
                        };
                    })
                );

                setPokemonList((prevDetails) => [...prevDetails, ...details]);
            }
        };

        getPokemonList();
    }, [data, pokemonLoadCount, offset]);

    const loadMorePokemons = () => {
        setOffset((prevOffset) => prevOffset + pokemonLoadCount);
    };

    if (loading && pokemonList.length === 0) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="pokedex">
            <ul className="pokemon-list">
                {pokemonList.map((pokemon) => (
                    <li className="pokemon-container" key={pokemon.id}>
                        <div>
                            <img
                                className="pokemon-images"
                                src={pokemon.img}
                                alt={pokemon.name}
                            />
                        </div>
                        <div className="pokemon-name">{pokemon.name}</div>
                        <div className="pokemon-type">
                            <span>Types: </span>{pokemon.types}
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={loadMorePokemons} className="btn-load-more">
                Load More
            </button>
        </div>
    );
};

export default PokemonList;