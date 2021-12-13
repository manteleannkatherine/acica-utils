import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import certificate from "../imgs/badge.jpeg";

const Certificate = () => {

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // eslint-disable-next-line
  const [fullName, setFullName] = React.useState('');
  const handleName = (e) => {
    setFullName(e.target.value);
  }

  // eslint-disable-next-line
  const [event, setEvent] = React.useState('');
  const handleEvent = (e) => {
    setEvent(e.target.value);
  }

  return (
    <div className="container container-fluid p-5">
      <div className="row">
        <div className="col col-5 mr-5">
          <div className="row p-3">
            <h5>Certificate</h5>
          </div>
          <div className="row p-3">
            <input type="text" className="form-control" placeholder="Full Name" onChange={e => handleName(e)} />
          </div>
          <div className="row p-3">
            <input type="text" className="form-control" placeholder="Event" onChange={e => handleEvent(e)} />
          </div>
          <div className="row p-3">
            <button type="submit" className="btn btn-success" onClick={handlePrint}> Print </button>
          </div>
        </div>

          <div style={{ display: "none" }}>
            <ComponentToPrint ref={componentRef} pageStyle="@page { size: 100mm 148mm }"
              name={fullName}
              event={event} />
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
        height: "50rem", width: "100rem", justifyContent: "center", justifyItems: "center",
        paddingTop: "2rem",
        backgroundImage: { certificate },
        backgroundPosition: "absolute"
      }} className="col">
        <div style={{
          fontSize: "50px", color: "#000", wordWrap: "true",
          textAlign: "center", paddingTop: "39rem", fontWeight: "900",
          justifyContent: "center", position: "absolute", width: "100rem",
          textTransform: "capitalize", paddingLeft: "32rem"
        }}>
          {this.props.name}
        </div>
        <div style={{
          fontSize: "35px", color: "#000", wordWrap: "true",
          textAlign: "center", paddingTop: "55.10rem", fontWeight: "200",
          textTransform: "capitalize", paddingLeft: "0.5rem", width: "130rem"
        }}>
          {this.props.event} <br />
          ------------------------------------------------------------------------------------------------------------------------------
        </div>
        <div style={{
          fontSize: "24px", color: "#000", wordWrap: "true",
          paddingTop: "5.40rem", fontWeight: "200",
          textTransform: "capitalize", paddingLeft: "21rem", width: "130rem"
        }}>
          November 17-20, 2021 <br />
          Hilton Dubai Al Habtoor City, Dubai, United Arab Emirates
        </div>
      </div>
    );
  }
}

export default Certificate