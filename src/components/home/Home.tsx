import Nav from "../nav/Nav"
import Table from "../table/Table"
import { HomeContainer } from "./Home.styled"

const Home = () => {
  return (
    <HomeContainer>
       <Nav /> 
       <Table />
    </HomeContainer>
  )
}

export default Home