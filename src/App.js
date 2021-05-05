import  { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainNav from './components/MainNav';
import { Container } from "@material-ui/core";
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import Trending from './Pages/Trending/Trending';


function App() {
  return (
    <BrowserRouter>
     <Header/>
    <div className="app">
    <Container> 
    <Switch>
      <Route path="/" component={Trending} exact />
      <Route path="/movies" component={Movies} />
      <Route path="/series" component={Series} />
      <Route path="/search" component={Search} />

    </Switch>
    </Container>
    </div>
    <MainNav />
    </BrowserRouter> 
  );
}

export default App;
