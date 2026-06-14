import { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images = [] }) => {
  const [selected, setSelected] = useState(images[0] || '');

  if (!images.length) return null;

  return (
    <div className="image-gallery">
      <img src={selected} alt="Selected product" className="w-full rounded-3xl" />

      <div className="flex gap-3 mt-4">
        {images.map((image) => (
          <button key={image} type="button" onClick={() => setSelected(image)}>
            <img
              src={image}
              alt="Product thumbnail"
              className="w-20 h-20 object-cover rounded-xl cursor-pointer border border-white/10"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
