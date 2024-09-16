import { useState } from "react"
import ComponentB from "./ComponentB"

const ComponentA = () =>{

    const [person, setPerson] = useState({
        name: "Ram",
        age:"22"
    })

    return (
        <>
        <ComponentB />
        </>
    )

}

export default ComponentA