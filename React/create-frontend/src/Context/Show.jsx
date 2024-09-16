import ComponentA from "./ComponentA"
import { PersonProvider } from "./PersonContext"

const Show = () =>{

    return (
        <PersonProvider>
        <ComponentA />
        </PersonProvider>
    )

}

export default Show