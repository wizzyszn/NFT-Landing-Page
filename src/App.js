import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
