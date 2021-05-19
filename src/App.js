import './App.css';
import Nav from './Nav'
import Row from './Row'
import The_Pianist from './img/The_Pianist.jpg'
import Blood_Diamond from './img/Blood_Diamond.jpg'
import Lawrence_of_Arabia from './img/Lawrence_of_Arabia.jpg'
import Beasts_of_No_Nation from './img/Beasts_of_No_Nation.jpg'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Row title="The Pianist" img={The_Pianist} about="The Pianist is a 2002 biographical war drama film produced and directed by Roman Polanski, with a script by Ronald Harwood, and starring Adrien Brody.[4] It is based on the autobiographical book The Pianist (1946), a Holocaust memoir by the Polish-Jewish pianist and composer Władysław Szpilman, a Holocaust survivor.[5] The film was a co-production of France, the United Kingdom, Germany, and Poland." link="https://youtu.be/BFwGqLa_oAo"/>
        <Row title="Blood Diamond" img={Blood_Diamond} about="Blood Diamond is a 2006 political war thriller film co-produced and directed by Edward Zwick and starring Leonardo DiCaprio, Jennifer Connelly, and Djimon Hounsou. The title refers to blood diamonds, which are diamonds mined in war zones and sold to finance conflicts, and thereby profit warlords and diamond companies across the world." link="https://youtu.be/yknIZsvQjG4" />
        <Row title="Lawrence Of Arabia" img={Lawrence_of_Arabia} about="Lawrence of Arabia is a 1962 British epic historical drama film based on the life of T. E. Lawrence and his 1926 book Seven Pillars of Wisdom. It was directed by David Lean and produced by Sam Spiegel, through his British company Horizon Pictures, and distributed by Columbia Pictures. The film stars Peter O'Toole as Lawrence with Alec Guinness playing Prince Faisal. The film also stars Jack Hawkins, Anthony Quinn, Omar Sharif, Anthony Quayle, Claude Rains, and Arthur Kennedy. The screenplay was written by Robert Bolt and Michael Wilson." link="https://youtu.be/vOlRhGEhG7k" />
        <Row title="Beasts Of No Nation" img={Beasts_of_No_Nation} about="Beasts of No Nation is a 2015 American-Ghanaian war drama film written, co-produced, shot, and directed by Cary Joji Fukunaga. It follows a young boy who becomes a child soldier as his country experiences a horrific civil war. Shot in Ghana and starring Idris Elba, Abraham Attah, Ama K. Abebrese, Grace Nortey, David Dontoh, and Opeyemi Fagbohungbe, the film is based on the 2005 novel of the same name by Uzodinma Iweala,[4] the book itself being named after a Fela Kuti album." link="https://youtu.be/2xb9Ty-1frw" />
      </div>
    </Router>
  );
}

export default App;
