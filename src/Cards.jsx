import React from 'react';
import Capture1 from './Capture1.JPG';
function Cards()
{
return(
<React.Fragment>
<br/>
<br/>
<div className="card-deck">
    <div className="card">
      <div className="card-body text-center">
     <img src="http://www.dosainc.in/images/banners/truck.jpg" height="200" width="300"/>
      </div>
    </div>
    <div className="card">
      <div className="card-body text-center">
      <img src="http://www.dosainc.in/images/banners/delivery-pickup.jpg" height="200" width="300"/>
      </div>
    </div>
    <div className="card">
      <div className="card-body text-center">
      <img src="http://www.dosainc.in/images/banners/buffet.jpg" height="200" width="300"/>
     </div>
     </div>
     </div>
     <br/>
     <br/>
     <div className="container">
     <img src={Capture1} style={{width:"100%"}}/>
    </div>
</React.Fragment>
);
}

export default Cards;