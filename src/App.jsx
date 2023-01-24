import { useEffect, useState } from "react"
import { ImageCard } from "./components/ImageCard";
import { ImageSearch } from "./components/ImageSearch";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=33058697-8a05fca20f81c1b79ff9037d3&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [term]);
  return (
    <div className="container mt-10 mx-auto">
      <ImageSearch searchText={text => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>}
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading.....</h1> : <div className="grid grid-cols-3 gap-9">
        {images.map(image => {
          return <ImageCard image={image} key={image.id} />
        })}

      </div>}
    </div>
  )
}

export default App
