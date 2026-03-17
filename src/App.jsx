import Navbar from './Componets/Navbar'
import Intro from './Pages/intro'
import Paragraph from './Insideintro/Subintro'
import About from './Pages/about'
import 'remixicon/fonts/remixicon.css'
import Skill from './Pages/Skill'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './Componets/footer'
import { useContext } from 'react'
import { ThemeData } from './ThemeContext/Darkcontex'
const App = () => {
 const [theme,setTheme] = useContext(ThemeData)
  return (
 <div id='start'>
  <div> <Navbar/></div>
<div className={theme?"bg-stone-400 w-full p-3 text-black":"bg-black w-full p-3 text-white"}>
<div id='home'><Intro/></div>
<Paragraph/>
<div id="about"><About/></div>
<div id='skill'><Skill/></div>
<div id='project'><Projects/></div>
<div id='contact'><Contact/></div>
</div>
<div><Footer/></div>
</div>
  )
}

export default App