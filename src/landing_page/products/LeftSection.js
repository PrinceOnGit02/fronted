import React from "react";

function LeftSection({
  imageURL,
  productName,
  ProductDesription,
  tryDemo,
  LearnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="containert mt-5">
      <div className="row ">
        <div className="col-6">
          <img src={imageURL}/>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{ProductDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={LearnMore} style={{marginLeft: "50px"}}>Learn More</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/image/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/image/appstorebadge.svg" style={{marginLeft: "50px"}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
