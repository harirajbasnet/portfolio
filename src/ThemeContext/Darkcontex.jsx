import  { createContext, useState } from 'react'
export const Theme= createContext()

const Mode = (props) => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
<Theme.Provider value={[ theme, setTheme]}>
  {props.children}
</Theme.Provider>
    </div>
  )
}

export default Mode