import PropTypes from 'prop-types'
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [value, setValue] = useState('')

  const onInputChange = ({target}) => {
    setValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (value.trim().length <= 0) return
    onNewCategory(value.trim())
    setValue('')
  }

  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Buscar gif'
        value={value}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
