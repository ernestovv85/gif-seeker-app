import { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifSeekerApp = () => {
  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([...categories, newCategory])
  }
  return (
    <>
      <h1>Gif Seeker App</h1>
      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />
      <ul>
        {categories.map((category) => (
            <div key={category}>
              <li>{category}</li>
            </div>
          )
        )}
      </ul>
    </>
  )
}

export default GifSeekerApp
