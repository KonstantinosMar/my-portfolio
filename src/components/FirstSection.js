import Socials from './Socials'
import Menu from "./Menu";
import Center from './Center';
import '../styles/mystyles.scss'



const FirstSection = () => {
  return (
    <div className="container">
      <div className="hero">
        <Menu/>
        <Center />
        <Socials />
      </div>
    </div>
  );
}

export default FirstSection;