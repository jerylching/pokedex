import { Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList'
import './App.css'

function App() {
    return (
        <div className="pokedex-container">
            <h1 className="pokedex-header">Pokedex</h1>
            <Routes>
                <Route path="/" element={<PokemonList />} />
            </Routes>
        </div>
    )
};

export default App;