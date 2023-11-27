/* eslint-disable no-undef */

import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en <AddCategory />', () => {
  test('debe cambiar el valor en caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'saitama' } })
    expect(input.value).toBe('saitama')
  })

  test('debe llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Dragon Ball'
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)
    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('No debe llamar onNewCategory si el input está vacío', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(onNewCategory).not.toHaveBeenCalled()
  })
})
