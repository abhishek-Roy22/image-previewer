const imageCard = ({ image, handleClick, selectedImage }) => {
  return (
    <div
      onClick={handleClick}
      className={`w-[200px] bg-center cursor-pointer overflow-hidden rounded-md ${
        selectedImage != image.src ? 'blur-sm' : ''
      }`}
    >
      <img src={image.src} alt="image" className="object-cover w-full h-full" />
    </div>
  );
};

export default imageCard;
