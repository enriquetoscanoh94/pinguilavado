import { AppProvider } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { WhatsAppFAB } from './components/layout/WhatsAppFAB';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Gallery } from './components/sections/Gallery';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <AppProvider>
      <a href="#home" className="sr-only">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
      <MobileActionBar />
    </AppProvider>
  );
}
