'use client'

import { useState } from 'react'

function Select({ selected, handleChangeColor }) {
  const selectStyle = {
    backgroundColor: selected || '#fff',
  }

  return (
    <>
      <label htmlFor='colors' style={{ marginRight: '0.5rem' }}>
        Colors
      </label>
      <select
        style={selectStyle}
        id='colors'
        value={selected}
        onChange={handleChangeColor}
      >
        <option value='SkyBlue'>Blue</option>
        <option value='LightGreen'>Light Green</option>
        <option value='Plum'>Purple</option>
      </select>
    </>
  )
}

export default function Page() {
  const [selected, setSelected] = useState('SkyBlue')

  const handleChangeColor = (e) => {
    setSelected(e.target.value)
  }

  return (
    <>
      <h1>Test Features here</h1>

      <Select selected={selected} handleChangeColor={handleChangeColor} />

      <p style={{ color: selected }}>Hello</p>
    </>
  )
}
