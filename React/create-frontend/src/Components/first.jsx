import '../Styles/styles.css'
const First = () => {
    const styleObject ={
        backgroundColor:"red",
        color:"White"
        
    }
    return(
        <>
            <h1 style={styleObject}>This is the first component</h1>
            <p className="first-para">This component was created by: Yujan Ranjitkar</p>
            <button className='btn btn-success'>See More</button>
        </> // React Fragment
    )
}

export default First


//type of export 
// 1. Normal Export (return multiple component )  
// export First 

// 2. Default Export (return only 1 component )
//     export default first 
// always do a default export 