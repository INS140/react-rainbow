import { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

export default function App() {
  const [colors, setColors] = useState([
    'violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red'
  ])

  function addColor(newColor) {
    setColors([...colors, newColor])
  }

  return <>
    <div className="rainbow">
        {colors.map(color => {
          return <ColorBlock color={color} />
        })}
    </div>
    <ColorForm addColor={addColor} />
  </>
}