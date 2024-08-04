import { images } from "../helpers/importImages";

function FormLeft() {
  return (
    <div className="form-left">
      <div className="form-left-images">
        {images.map((image, index) => (
          <img src={image} key={index} alt="form animated image" className={`image-${String(index)}`} />
        ))}
      </div>
      <div className="form-left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, rerum.</div>
    </div>
  );
}

export default FormLeft;
