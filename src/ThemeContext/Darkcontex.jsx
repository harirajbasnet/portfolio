import  { createContext, useState } from 'react'
export const ThemeData= createContext()

const Mode = (props) => {
  const [theme, setTheme] = useState(false)
  return (
    <div>
<ThemeData.Provider value={[ theme, setTheme]}>
  {props.children}
</ThemeData.Provider>
    </div>
  )
}

export default Mode