import Navbar from './Componets/Navbar'
import Intro from './Pages/intro'
import Paragraph from './Insideintro/Subintro'
import About from './Pages/about'
import 'remixicon/fonts/remixicon.css'
import Skill from './Pages/Skill'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './Componets/footer'
const App = () => {
  return (
 <div id='start'>
  <div> <Navbar/></div>
<div className='bg-stone-400 w-full p-3 '>
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