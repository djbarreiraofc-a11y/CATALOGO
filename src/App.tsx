import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Maintenance from './components/Maintenance';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6E8] to-[#EDE0D4]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Maintenance />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
