import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import presentationImg from '../../../assets/images/presentationImg.jpg'
import './PresentationSection.css';
import PresentationBtn from "./presentationBtn/PresentationBtn.tsx"

export default function PresentationSection(){
  return (
    <div className='presentation position-relative d-flex flex-column align-items-center justify-content-evenly'>
        <img src={presentationImg} alt="" className='z-1 position-absolute presentation-image'/>
      <div className='z-2'>
        <h1 className='z-2 text-white'>Enterprise Name</h1>
        <h2 className='z-2 text-white p-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, porro. </h2>
      </div>
      <PresentationBtn></PresentationBtn>
    </div>
  );
}