import { createContext, useContext } from "react"

const PersonContext = createContext()

export const PersonProvider = ({children}) =>{

    const [person, setPerson] = useState({
        name: "Ram Kaji",
        age:22,
        occupation: "Student"
    })

    return(
        <>
        <PersonContext.Provider value={person}>
            {children}
        </PersonContext.Provider>
        </>
    )
}


//custom hook that use PersonContext 
export const usePerson = () =>{
    return useContext(PersonContext)
}