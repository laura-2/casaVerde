import './App.css';
import Menu from "./components/Menu"
import AssinaturaNewsletter from './components/AssinaturaNewsletter';
import Box from './components/Box';
import Ofertas from './components/Ofertas';

function App() {
  return (
      <main>
        <Menu />
        <AssinaturaNewsletter />
        <Box/>
        <Ofertas/>
      </main>
  );
}

export default App;
