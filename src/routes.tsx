import { Routes as ReactRoutes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'
import PokemonBox from './pages/PokemonBox'

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/Pokemon/:name" element={<DetailPage />} />
            <Route path="/pokemon-box" element={<PokemonBox />} />
        </ReactRoutes>
    )
}

export default Routes;