import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppProvider from './components/providers/AppProvider';
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import NotFound from './pages/NotFound';


import Footer from './components/layout/Footer';
import Navbar from './pages/Navbar';

export default function App() {
  return (
    <AppProvider>



      <BrowserRouter>

   



<Navbar/>
      

  
     

     


        <Routes>
         
            <Route path={"/"} element={<Home />} />
            <Route path={"/users"} element={<Users />} />
            <Route path={"/about"} element={<About />} />
            <Route path="*" element={<NotFound />} />
         
        </Routes>

  <Footer />
      </BrowserRouter>



    </AppProvider>
  );
}
