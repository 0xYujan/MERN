import { usePerson } from "./PersonContext"

const ComponentD = () =>{
    const person = usePerson({person})
    return (
        <>
        <br />
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        </>
    )

}

export default ComponentD