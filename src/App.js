import './App.css';
import Header from './components/header';
import Landing from './components/landing';
import Offerings from './components/offerings';
import AboutUs from './components/aboutus';
// import IndustriesWeServe from './components/customers';
import Statistics from './components/statistics';
import Distributors from './components/distributors';
import ContactUs from './components/contactus';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="landing">
        <Landing />
      </div>
      <div id="aboutus">
        <AboutUs />
      </div>
      <div id="offerings">
        <Offerings />
      </div>
      <Statistics />
      <Distributors />
      {/* <IndustriesWeServe /> */}
      <div id="contactus">
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
