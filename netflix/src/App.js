import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/mainstyle.css'
import Navbar from './components/Navbar'
import MovieListWithSearch from './components/MovieListWithSearch'
import Footer from './components/Footer'
import MovieList from './components/MovieList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import MovieDetails from './components/MovieDetails'





function App() {
  return (

<Router>   

<Navbar/>
<Switch>
<Container fluid>

{/* <Route path="/" exact component={<h4 class="pt-4">Search a movie</h4>} /> */}
<Route path="/" exact component={MovieListWithSearch} />
{/* <Route path="/" exact component={<h4 class="pt-4">Scary Movie</h4>} /> */}
<Route path="/" exact render={(props) => <MovieList query="scary%20movie"  {...props} />} />
{/* <Route path="/" exact component={<h4 class="pt-4">Harry Potter</h4>} /> */}
<Route path="/" exact render={(props) => <MovieList query="harry%20potter" {...props} />} />
<Route path="/moviedetails/:id" exact component={MovieDetails} />
</Container>

</Switch>  
   
   <Footer/>
   
</Router>
  )
}

export default App;