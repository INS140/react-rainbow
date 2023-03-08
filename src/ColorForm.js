import { useState } from 'react'

export default function ColorForm(props) {
    const [input, setInput] = useState('')

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.addColor(input)
        setInput('')
    }

    return <form onSubmit={handleSubmit}>
        <input
            type='text'
            value={input}
            onChange={handleChange}
        />
        <button type='submit'>Submit</button>
    </form>
}