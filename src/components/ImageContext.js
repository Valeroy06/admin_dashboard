import {createContext, useState,useRef, useContext} from 'react'
import Images from '../img/Images'

export const ImageContext = createContext()

export const useImage = () => {
    return useContext(ImageContext)
}

export const ImageProvider = ({children}) => {  
    const [values, setValues] = useState({
    fullname: "",
    email: "",
    birthday: "",
    phonenumber: "",
    image: Images.person
});
const ref = useRef()
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };
    const swapImage = e => {
        let newImage = URL.createObjectURL(e.target.files[0]) || Images.person
        ref.current.src = newImage
        setValues({ ...values, image: newImage })
    }

    const returnValues = {
        values, onChange, swapImage,ref
    }
  return (
      <ImageContext.Provider value={returnValues}>
            {children}
      </ImageContext.Provider>
  )
}

