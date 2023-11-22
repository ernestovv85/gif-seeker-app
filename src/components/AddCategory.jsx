import { useState } from 'react'

const AddCategory = ({onNewCategory}) => {
  const [value, setValue] = useState('')

  const onInputChange = (event) => {
    setValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if(value.trim().length <= 0) return
    onNewCategory(value.trim())
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gif'
        value={value}
        onChange={onInputChange}
      />
    </form>
  )
}

export default AddCategory
