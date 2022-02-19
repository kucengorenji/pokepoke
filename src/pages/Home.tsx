import PokemonList from "../components/pokemon-list"
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <Layout>
            <PokemonList />
            <Navbar />
        </Layout>
    )
}

export default Home;