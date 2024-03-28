const imageCard = ({ image, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="w-[200px] bg-center cursor-pointer overflow-hidden rounded-md"
    >
      <img src={image.src} alt="image" className="object-cover w-full h-full" />
    </div>
  );
};

export default imageCard;
