import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
