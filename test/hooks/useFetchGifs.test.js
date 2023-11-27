/* eslint-disable no-undef */

import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Pruebas en hook useFetchGifs', () => {
  const category = 'Dragon Ball'
  test('Debe regresar el estado inicial', () => {
    const {result} = renderHook(() =>  useFetchGifs(category))
    const {images, isLoading} = result.current
    expect(images).toEqual([])
    expect(isLoading).toBeTruthy()
  })

  test('Debe retornar isLoading en false y un arreglo de imágenes', async() => { 
    const {result} = renderHook(() =>  useFetchGifs(category))
    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0))
    const {images, isLoading} = result.current
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
   })
})
