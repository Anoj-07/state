import { useState } from "react";
const message = [
  'learn react 📕',
  'apply for jobs 💼',
  'invest your new income 🤑'
]

export default function App() {
  return (
    <>
    {/* how to pass props in component */}
     <Steps count ={1} />
     {/* <Steps count ={2} />
     <Steps count={3} /> */}
    </>
  );
}

//component
//how to use props in component
function Steps({count}){
  const [steps, setSteps] = useState(count);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious(){
    if(steps > 1) {
      setSteps(steps - 1);
    }
  }

  function handleNext(){
    if(steps < 3) {
      setSteps(steps + 1);
    }
  }

  function handleOpen(){
    setIsOpen(!isOpen);
  }

  return (
    <>
    <button className="close" onClick={handleOpen}>
      {isOpen ? "×" : "="}
    </button>

    {/* ----------------------- */}
    {isOpen && (
      <div>
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>  

          {/* ----------------------- */}
          <div className="message">
            <h3>step {steps} {message[steps - 1]}</h3>
          </div>

          {/* ----------------------- */}
          <div className="buttons">
            <button 
            onClick={handlePrevious}
            style={{background: "#7950f2", color:"#fff"}} >Previous</button>
            <button 
            onClick={handleNext}
            >Next</button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}