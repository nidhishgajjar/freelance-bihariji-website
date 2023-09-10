import './App.css';
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
      <Landing />
      <AboutUs />
      <Offerings />
      <Statistics />
      <Distributors />
      {/* <IndustriesWeServe /> */}
      <ContactUs />
    </div>
  );
}

export default App;
