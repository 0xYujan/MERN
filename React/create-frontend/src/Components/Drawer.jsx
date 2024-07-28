import { useState } from "react";

const Drawer = () => {
  const [show, setShow] = useState(true);
  const show1 = () => setShow((show = 1));

  return (
    <>
      {
        (show ? (
          <div
            className="Red "
            style={{ height: "100px", width: "50px", background: "red" }} onClick={show1}
          ></div>
        ) : (
          <div
            className="Red "
            style={{ height: "100px", width: "250px", background: "red" }}
          ></div>
        ))
      }
      {/* <div className="Red " style={{height:"100px", width:"250px", background:"red"}}>

    </div>
    <div className="Red " style={{height:"100px", width:"50px", background:"red"}}>

    </div> */}

      <button className="btn btn-success" onClick={show}>
        Show
      </button>
    </>
  );
};

export default Drawer;
