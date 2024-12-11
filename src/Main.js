import React from "react"
import images from "./Content";
export default function Main(){


   
return(
  <>
  
<div className="container">

<div  className="row">
<h3>Weekly Top 20</h3>

  <div className="col-sm-3 column">

< img src={images.img1}/>

<span>Moana</span>







  </div>




  <div className=" col-sm-3 column">


<img src={images.img2} />


<span>Merlin</span>





</div>
<div className="col-sm-3 column ">


<img src={images.img3} />




<span>Stranger things</span>



</div>

<div className="col-sm-3 column ">


<img src={images.img4} />




<span>Game of thrones</span>



</div>









</div>





</div>

</>

);




}