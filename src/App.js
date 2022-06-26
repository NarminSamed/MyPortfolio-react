
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Services from './components/Services';
import Experince from './components/Experince';
import Contactus from './components/Contactus';
import Footer from './components/Footer';

function App() {
  return (
    <>
<Navbar />
<Header />
<Aboutme />
<Services />
<Experince />
<Contactus />
<Footer />
    </>
  );
}

export default App;
