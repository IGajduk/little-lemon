
import './assets/styles/Main.css';
import './assets/styles/App.css';
import Footer from './Footer';
import CallToAction from './CallToAction';
// import Main from './Main';
import Nav from './Nav';
import Specials from './Specials';
import CustomerSay from './CustomerSay';
import Chicago from './Chicago';
const HomePage = () => (
  <>
    <Nav></Nav>
    <CallToAction></CallToAction>
    <main>
      <Specials></Specials>
      <CustomerSay></CustomerSay>
      <Chicago></Chicago>
    </main>
    <Footer></Footer>
  </>
);
export default HomePage;
