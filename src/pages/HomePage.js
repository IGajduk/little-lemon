import 'src/assets/styles/App.css';
import Footer from 'src/components/Footer/Footer';
import CallToAction from 'src/components/CallToAction/CallToAction';
import Nav from 'src/components/Nav/Nav';
import Specials from 'src/components/Specials/Specials';
import CustomerSay from 'src/components/CustomerSay/CustomerSay';
import Chicago from 'src/components/Chicago/Chicago';

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
