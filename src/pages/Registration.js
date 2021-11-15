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

  const [company, setCompany] = React.useState();
  const handleCompany = (e) => {
    setCompany(e.target.value);
  }

  const [country, setCountry] = React.useState();
  const handleCountry = (e) => {
    setCountry(e.target.value);
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
            <input type="text" className="form-control" placeholder="Company" onChange={e => handleCompany(e)} />
          </div>
          <div className="row p-3">
            <input type="text" className="form-control" placeholder="Country" onChange={e => handleCountry(e)} />
          </div>
          <div className="row p-3">
            <button type="submit" className="btn btn-success" onClick={handlePrint}> Register & Print </button>
          </div>
        </div>
        <div className="col p-3">
          <h5>PREVIEW</h5>

          <div style={{ backgroundImage: `url(${badge})`, backgroundSize: "80%", backgroundRepeat: "no-repeat" }}>
            <div style={{ height: "50rem", width: "34rem", justifyContent: "center", justifyItems: "center" }} className="col">
              <div style={{
                fontSize: "2.5rem", color: "#000", wordWrap: "true",
                textAlign: "center", paddingTop: "15rem", fontWeight: "bold",
                justifyContent: "center", position: "absolute", width: "34rem",
                textTransform: "capitalize"
              }}>
                {fullName}
              </div>
              <div style={{
                fontSize: "1.75rem", color: "#000", wordWrap: "true",
                textAlign: "center", paddingTop: "19rem", fontWeight: "bold",
                textTransform: "capitalize"
              }}>
                {company}
              </div>
              <div style={{
                fontSize: "1.75rem", color: "#000", wordWrap: "true",
                textAlign: "center", paddingTop: "0.5rem", fontWeight: "bold",
                textTransform: "uppercase"
              }}>
                {country}
              </div>
            </div>
          </div>

          <div style={{ display: "none" }}>
            <ComponentToPrint ref={componentRef} pageStyle="@page { size: 100mm 148mm }"
              name={fullName}
              company={company}
              country={country} />
          </div>
        </div>
      </div>
    </div >
  )
}

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fishInSea: 100
    }
  }

  render() {
    return (
      <div style={{
        height: "50rem", width: "70rem", justifyContent: "center", justifyItems: "center",
        paddingTop: "2rem"
      }} className="col">
        <div style={{
          fontSize: "80px", color: "#000", wordWrap: "true",
          textAlign: "center", paddingTop: "32rem", fontWeight: "900",
          justifyContent: "center", position: "absolute", width: "70rem",
          textTransform: "capitalize"
        }}>
          {this.props.name}
        </div>
        <div style={{
          fontSize: "55px", color: "#000", wordWrap: "true",
          textAlign: "center", paddingTop: "40rem", fontWeight: "200",
          textTransform: "capitalize"
        }}>
          {this.props.company}
        </div>
        <div style={{
          fontSize: "55px", color: "#000", wordWrap: "true",
          textAlign: "center", paddingTop: "1rem", fontWeight: "bold",
          textTransform: "uppercase"
        }}>
          {this.props.country}
        </div>
      </div>
    );
  }
}

export default Registration