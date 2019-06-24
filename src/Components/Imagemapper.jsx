import React from 'react'

const imageData = {
  images: [
    {
      src:"https://bedegaming.com/wp-content/uploads/2017/09/Core-Gaming.jpg",
      alt:"google"
    },
    {
      src:"https://bedegaming.com/wp-content/uploads/2017/09/Core-Gaming.jpg",
      alt:"google"
    }
  ]
}

const Imagemapper = () =>
  <div>
  {
    imageData.images
    ? <div className="image">
          {
            imageData.images.map(( {src, alt} ) =>
            <img src={src} alt={alt}></img>
            )
          },
       </div>
    :<h2>no images found</h2>
  }
  </div>

export default Imagemapper
