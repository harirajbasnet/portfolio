import Navbar from './Componets/Navbar'
import Intro from './Pages/intro'
import Paragraph from './Insideintro/Subintro'
import About from './Pages/about'
import 'remixicon/fonts/remixicon.css'
import Skill from './Pages/Skill'
const App = () => {
  return (
 <div >
<Navbar/>
<div className='bg-stone-400'>
<Intro/>
<Paragraph/>
<About/>
<Skill/>
</div>
</div>
  )
}

export default App