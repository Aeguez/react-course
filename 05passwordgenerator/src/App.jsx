import { useState } from 'react'
import './App.css'

function generatePassword(length, numberAllowed, charAllowed) {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if (numberAllowed) characters += '0123456789'
  if (charAllowed) characters += '!@#$%^&*()_+'

  const randomValues = crypto.getRandomValues(new Uint32Array(length))
  return Array.from(randomValues, (value) => characters[value % characters.length]).join('')
}

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState(() => generatePassword(8, false, false))
  const [copyStatus, setCopyStatus] = useState('Copy')

  function updatePassword(nextLength, nextNumberAllowed, nextCharAllowed) {
    setLength(nextLength)
    setNumberAllowed(nextNumberAllowed)
    setCharAllowed(nextCharAllowed)
    setPassword(generatePassword(nextLength, nextNumberAllowed, nextCharAllowed))
    setCopyStatus('Copy')
  }

  async function copyPassword() {
    try {
      await navigator.clipboard.writeText(password)
      setCopyStatus('Copied!')
    } catch {
      setCopyStatus('Copy failed')
    }
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <button
        type="button"
        onClick={() => updatePassword(length, numberAllowed, charAllowed)}
        className='bg-blue-700 text-white px-3 py-1 rounded-lg mb-3'
      >
        Generate password
      </button>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value = {password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
         />
         <button
         onClick={copyPassword}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          {copyStatus}</button>
      </div>
      <div
      className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => updatePassword(Number(e.target.value), numberAllowed, charAllowed)}
          id="length" />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          checked={numberAllowed}
          onChange={() => {
            updatePassword(length, !numberAllowed, charAllowed)
          }}
          id="number"/>
          <label htmlFor="number">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          checked={charAllowed}
          onChange={() => {
            updatePassword(length, numberAllowed, !charAllowed)
          }}
          id="charInput"/>
          <label htmlFor="charInput">Character</label>
        </div>
        
        
      </div>
    </div>
  )
}

export default App
