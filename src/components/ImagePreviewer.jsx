import React from 'react';

const imagePreviewer = ({ selectedImage }) => {
  return (
    <div className="max-w-5xl mx-auto flex items-center justify-center">
      <img
        src={selectedImage}
        alt="preview"
        className="w-[600px] h-full object-cover"
      />
    </div>
  );
};

export default imagePreviewer;
