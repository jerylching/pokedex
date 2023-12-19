import Pokemon from '../models/pokemon.model.js';

const getPokemons = async (request, response) => {
    try {
        const pokemons = await Pokemon.find()

        const formattedPokemons = pokemons.map(pokemon => {
            const { _id, name, img, type, stats, damages, misc } = pokemon;
            return { _id, name, img, type, stats, damages, misc };
        });

        // Handle the route '/api/v1/pokemons' (all pokemons)
        if (request.baseUrl === '/api/v1/pokemons') {
            // If it's the route '/api/v1/pokemons' without query parameters, return all pokemons
            response.status(200).send({
                message: 'List of Pokemons',
                data: formattedPokemons,
            });
        } 
        // Handle other cases or invalid routes
        else {
            response.status(404).send({
                message: 'Route not found',
            });
        }
    } catch (error) {
        console.error('Error getting pokemons:', error);
        response.status(500).send({
            message: 'Internal server error',
            error: error.message,
        });
    }
};

export { getPokemons }