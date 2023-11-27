/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas para <GifGrid />', () => {
  useFetchGifs.mockReturnValue({ images: [], isLoading: true })
  const category = 'Dragon Ball'
  test('Debe mostrar Loading inicialmente', () => {
    render(<GifGrid category={category} />)
    expect(screen.getByText('Loading...'))
    expect(screen.getByText(category))
  })

  test('Debe mostrar items, cuando se cargan imágenes desde useFetchGifs', () => {
    const gifs = [
      {
        id: '1',
        title: 'Goku',
        url: 'https://media.giphy.com/media/3o79x0x000000000000/giphy.gif',
      },
      {
        id: '2',
        title: 'Vegetta',
        url: 'https://media.giphy.com/media/3o79x0x000000000000/giphy.gif',
      },
      {
        id: '3',
        title: 'Pikoro',
        url: 'https://media.giphy.com/media/3o79x0x000000000000/giphy.gif',
      }
    ]
    useFetchGifs.mockReturnValue({ images: gifs, isLoading: false })
    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(gifs.length)
  })
})
