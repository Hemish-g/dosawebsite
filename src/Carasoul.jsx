import React from 'react';

function Carasoul()
{
return(
<React.Fragment>
<br/>
<br/>
<div id="demo" className="carousel slide" data-ride="carousel">


  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
    <li data-target="#demo" data-slide-to="4"></li>
  </ul>
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="http://www.dosainc.in/images/banners/dosa.png" alt="Dosa" width="60%" height="500"/>
    </div>
    <div className="carousel-item">
      <img src="http://www.dosainc.in/images/banners/vada.png" alt="Idli1" width="100%" height="500"/>
    </div>
    <div className="carousel-item">
      <img src="http://www.dosainc.in/images/banners/idli.png" alt="Idli" width="100%" height="500"/>
    </div>
    <div className="carousel-item">
      <img src="http://www.dosainc.in/images/banners/truck.png" alt="Truck" width="100%" height="500"/>
    </div>
  </div>

  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>

</React.Fragment>
);
}

export default Carasoul;