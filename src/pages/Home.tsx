import PokemonList from "../components/pokemon-list"
import Layout from '../components/Layout'

export default function Home() {
    return (
        <div>
            <Layout>
                <PokemonList />
            </Layout>
        </div>
    )
}