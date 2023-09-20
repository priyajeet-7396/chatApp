import file from "../img/file.png";
import img from "../img/img.png";

const  Input = () => {
  return (
    <div className='input'>
      <input type='text'placeholder='Type something...' />
      <div className='send'>
        <img src = {file} alt='' />
        <input type='file' style={{display:"none"}} id='file' />
        <label htmlFor='file'>
          <img src={img} alt='' />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default  Input