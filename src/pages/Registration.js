import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import badge from "../imgs/badge.jpeg"

const Registration = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [fullName, setFullName] = React.useState();
  const handleName = (e) => {
    setFullName(e.target.value);
    console.log(e.target.value)
  }

  const [position, setPosition] = React.useState();
  const handlePosition = (e) => {
    setPosition(e.target.value);
  }


  const [company, setCompany] = React.useState();
  const handleCompany = (e) => {
    setCompany(e.target.value);
  }

  return (
    <div className="container container-fluid p-5">
      <div className="row">
        <div className="col col-5 mr-5">
          <div className="row p-3">
            <h5>REGISTRATION</h5>
          </div>
          <div className="row p-3">
            <input type="text" className="form-control" placeholder="Full Name" onChange={e => handleName(e)} />
          </div>
          <div className="row p-3">
            <input type="text" className="form-control" placeholder="Position" onChange={e => handlePosition(e)} />
          </div>
          <div className="row p-3">
            <input type="text" className="form-control" placeholder="Company" onChange={e => handleCompany(e)} />
          </div>
          <div className="row p-3">
            <button type="submit" className="btn btn-success" onClick={handlePrint}> Register & Print </button>
          </div>
        </div>
        <div className="col p-3">
          <h5>PREVIEW</h5>

          <div style={{ backgroundImage: `url(${badge})`, backgroundSize: "80%", backgroundRepeat: "no-repeat" }}>
            <div style={{ height: "50rem", width: "35rem", justifyContent: "center", justifyItems: "center" }} className="col">
              <div style={{
                fontSize: "2.5rem", color: "#000", wordWrap: "true",
                textAlign: "center", paddingTop: "15rem", fontWeight: "bold",
                justifyContent: "center", position: "absolute", width: "35rem",
                display: "flex"
              }}>
                {fullName}
              </div>
              <div style={{
                fontSize: "1.75rem", color: "#000", wordWrap: "true",
                textAlign: "center", paddingTop: "19rem", fontWeight: "bold"
              }}>
                {position}
              </div>
              <div style={{
                fontSize: "1.75rem", color: "#000", wordWrap: "true",
                textAlign: "center", paddingTop: "0.5rem", fontWeight: "bold"
              }}>
                {company}
              </div>
            </div>
          </div>

          <div style={{ display: "none" }}>
            <ComponentToPrint ref={componentRef} pageStyle="@page { size: 4in 6in }" />
          </div>
        </div>
      </div>
    </div >
  )
}

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div style={{ height: "50rem", width: "75rem", justifyContent: "center", justifyItems: "center" }} className="col">
        <div style={{
          fontSize: "5rem", color: "#000", wordWrap: "true",
          textAlign: "center", paddingTop: "15rem", fontWeight: "bold",
          justifyContent: "center", position: "absolute", width: "75rem",
        }}>
          Ann Katherine Mantele
        </div>
        <div style={{
          fontSize: "3.25rem", color: "#000", wordWrap: "true",
          textAlign: "center", paddingTop: "23rem", fontWeight: "bold"
        }}>
          Programmer
        </div>
        <div style={{
          fontSize: "3.25rem", color: "#000", wordWrap: "true",
          textAlign: "center", paddingTop: "1rem", fontWeight: "bold"
        }}>
          Creative Space Dubai
        </div>
      </div>
    );
  }
}

export default Registration