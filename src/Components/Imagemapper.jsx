import React from 'react'

const ImageMapper = (props) =>
  <div>
    {
      props.images
      ? <div className="image">
            {
              props.images.map(({ src, alt }) =>
                <img src={src} alt={alt}></img>
              )
            }
         </div>
      : <h2>no images found</h2>
    }
  </div>

export default ImageMapper
