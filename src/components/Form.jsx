import { images } from "../helpers/importImages";

function Form() {
  return (
    <div className="form-box">
      <div className="form-left">
        <div className="form-left-images">
          {images.map((image, index) => (
            <img src={image} key={index} alt="form animated image" className={`image-${String(index)}`} />
          ))}
        </div>
        <div className="form-left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, rerum.</div>
      </div>
      <form action="POST" className="form-inputs">
        <button>Sign In</button>
        <button>Sign Up</button>

        <h1>Sign In</h1>
        <h1>Create Account</h1>

        <input type="text" />
        <input type="password" />

        <input type="email" />
        <input type="text" />
        <input type="password" />

        <a href="#">Need help ?</a>

        <button>Sing In {`->`}</button>
        <button>Sing Up {`->`}</button>

        <div className="social-media-icons">
          <button>x</button>
          <button>x</button>
          <button>x</button>
          <button>x</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
