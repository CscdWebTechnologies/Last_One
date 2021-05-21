import './App.css';
import Header from './Component/header'
import Buy from './Component/buy'
import Firstbody from './Component/firstbody'
import Earn from './Component/Earning';
import Portfolio from './Component/pfolio';
import Footer from './Component/footer';
import Bluebar from './Component/bluebar';
import Cryptplatform from './Component/crypt.platform';
import Finance from './Component/finance';
import Stats from "./../src/Component/stats";


function App() {
  return (
    <div>
     <span>
       <Header/>
     </span>
        <Firstbody/>
        <Buy/>
        <Earn/>
        <Portfolio/>
        <Cryptplatform/>
        <Stats />
        <Finance/>
        <Bluebar/>
        <Footer/>
     </div>
  
  );
}

export default App;
