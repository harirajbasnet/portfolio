import { useContext } from 'react'
import Profile from './profile.png'
import { ThemeData } from '../ThemeContext/Darkcontex'
import Profile2 from './profile2.png'

const Image = () => {
const [theme,setTheme] = useContext(ThemeData)
  return (
        <div className='border-stone-400  mr-4 w-full'>
                  <img  
                     src={theme?Profile:Profile2} alt="Photo"/>
                </div>

  )
}

export default Image