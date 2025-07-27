import React, {useState , useEffect} from 'react'
import PopUp from './components/PopUp'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isVerifiedUser, setIsVerifiedUser] = useState(false);

  useEffect(() => {
    //mounting phase 
    
    handlePopUpOpen()
  }, [])

  const handlePopUpOpen = () => {
    setIsOpen(true)
  }

    const handlePopUpClose = () => {
    setIsOpen(false)
  }

  return (
    <div className='container'>
      <h1>Popup Demo</h1>
      <button onClick={handlePopUpOpen}>Show Popup</button>
      { isOpen ? <PopUp onClose={handlePopUpClose} isOpen = {isOpen} /> : ""}
    </div>
  )
}

export default App