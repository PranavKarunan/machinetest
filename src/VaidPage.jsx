import React, { useState } from "react";
import "./style.css";

export default function VaidPage() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <div className="secondPage">
          <div>
            <img src="https://3ds.virtualtester.com/qrassets/logos/3DS/generic.png" />
            <p>Information current as of</p>
            <h3>January 13, 2023</h3>
            <p>
              Logos and other registered trademarks are property of Dassault
              Systemes or its subsidiaries
            </p>
          </div>
        </div>
      ) : (
        <div className="firstPage">
          <div className="content">
            <img src="../valid.png" width={50} height={50} />
            <h1>Valid</h1>
            <h3>CATIA V5 Mechanical Designer Specialist</h3>
            <p>Issued to:</p>
            <h3>Jithin K P</h3>
            <p>Issued on:</p>
            <h3>December 10, 2018</h3>
            <p>Validated on:</p>
            <h3>January 12, 2023</h3>
          </div>
        </div>
      )}
      <div className="btn">
        <p onClick={() => setShow(true)}>Next</p>
      </div>
    </>
  );
}
