import { useState } from 'react';
import ImagePreviewer from './components/ImagePreviewer';
import ImageCard from './components/ImageCard';

const images = [
  {
    id: 1,
    src: '1.jpg',
  },
  {
    id: 2,
    src: '2.jpg',
  },
  {
    id: 3,
    src: '3.jpg',
  },

  {
    id: 8,
    src: '8.jpg',
  },

  {
    id: 10,
    src: '10.jpg',
  },
];

function App() {
  const [selectedImage, setselectedImage] = useState('1.jpg');

  const handleClick = (imgSrc) => {
    setselectedImage(imgSrc);
  };

  return (
    <main className="w-full h-screen mt-5">
      <ImagePreviewer selectedImage={selectedImage} />
      <div className="flex gap-5 w-full h-[250px] my-5 items-center justify-center border-t-2 border-b-2">
        {images &&
          images.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              handleClick={() => handleClick(image.src)}
            />
          ))}
      </div>
    </main>
  );
}

export default App;
