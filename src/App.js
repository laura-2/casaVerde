import NavBar from "./components/NavBar"
import AssinaturaNewsletter from './components/AssinaturaNewsletter';
import Box from './components/Box';
import Ofertas from './components/Ofertas';
import { CartProvider } from "./context";

function App() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  console.log(`Resolução da tela: ${screenWidth}x${screenHeight}`);
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
