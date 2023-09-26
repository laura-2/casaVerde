import NavBar from "./components/NavBar"
import AssinaturaNewsletter from './components/AssinaturaNewsletter';
import Box from './components/Box';
import Ofertas from './components/Ofertas';
import { CartProvider } from "./context";

function App() {
  return (
      <CartProvider>
        <NavBar />
        <AssinaturaNewsletter />
        <Box/>
        <Ofertas/>
      </CartProvider>
  );
}

export default App;
