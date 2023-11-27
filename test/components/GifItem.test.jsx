/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components'
describe('Pruebas en <GifItem />', () => {
  const title = 'one punch'
  const url = 'https://onepunch.com/saitama.jpg'

  test('debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  test('debe mostrar la imagen con url indicado y alt indicado', () => {
    render(<GifItem title={title} url={url} />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('debe mostrar el título en el componente', () => { 
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
   })
})
