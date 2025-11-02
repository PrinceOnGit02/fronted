import React from "react";

function Univers() {
  return (
    <div className="containert mt-5">
      <div className="row text-center">
        <h1>The Zerodha Univers</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/image/smallcaseLogo.png" />
          <p className=" text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/image/streakLogo.png" style={{ height: "52px" }} />
          <p>Algo & Strategy platforms</p>
          <p></p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/image/sensibullLogo.svg" />
          <p>Options trading platforms</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/image/zerodhaFundhouse.png"
            style={{ height: "53px" }}
          />
          <p className=" text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\image\goldenpiLogo.png" />
          <p>Bonds Trading platforms</p>
          <p></p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/image/dittoLogo.png" style={{ height: "53px" }} />
          <p>Insurence</p>
        </div>
          <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Univers;
