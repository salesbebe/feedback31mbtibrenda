import iconStar from "./assets/icon-star.svg"
import illustrationThankYou from "./assets/illustration-thank-you.svg"
import { useState } from "react"

export function App (){
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleMudarNotaAvaliacao (nota){
    setNotaAvaliacao(nota)
  }

  function handleSubmited (){
    if (notaAvaliacao !== 0) {
      setSubmited(true)

      return
    }
    alert("Please, chosee one note!")
  }

  return(
    submited === false ? (
      <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass max-w-103">
      <div className="bg-dark-blue w-fit p-4 rounded-full mb-4">
        <img src={iconStar} alt="ícone de estrela" />
      </div>

      <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>
      <p className="text-sm text-light-grey mb-6 leadind-1">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className="flex justify-between mb-6">
        <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => (handleMudarNotaAvaliacao(1))}/>

        <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => (handleMudarNotaAvaliacao(2))}/>

        <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => (handleMudarNotaAvaliacao(3))}/>

        <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => (handleMudarNotaAvaliacao(4))}/>

        <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => (handleMudarNotaAvaliacao(5))}/>

      </div>
      
      <button onClick={handleSubmited} className="bg-orange w-full uppercase tracking-1 font-bold rounded-3xl text-sm py-3 hover:bg-white hover:text-orange cursor-pointer">Submit</button>
      

    </div> 

    ) : (
      <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass max-w-103">
        <img className="mx-auto mb-6" src={illustrationThankYou} alt="imagem de agradecimento" />

        <p className="text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl mb-6 ">You selected {notaAvaliacao} out of 5</p>

        <h1 className="text-2xl font-bold mb-2.5 text-center">Thank You</h1>
        <p className="text-sm text-light-grey leadind-1 text-center ">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    ) 
  )
}