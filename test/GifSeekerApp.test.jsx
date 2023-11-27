/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react"
import GifSeekerApp from "../src/GifSeekerApp"

describe('Pruebas en <GifSeekerApp />', () => {
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifSeekerApp />)
    expect(container).toMatchSnapshot()
  })

  test('Debe mostrar el título en el componente', () => {
    render(<GifSeekerApp />)
    expect(screen.getByText('Gif Seeker App')).toBeTruthy()
  })
})
