import NavBar from './components/NavBar';
import AssinaturaNewsletter from './components/AssinaturaNewsletter';
import Box from './components/Box';
import Ofertas from './components/Ofertas';
import { CartProvider } from './context';
import SetUpPage from './components/SetUpPage';

function App() {
  return (
    <CartProvider>
      <NavBar />
      <AssinaturaNewsletter />
      <Box />
      <Ofertas />
      <SetUpPage/>
    </CartProvider>
  );
}

export default App;
