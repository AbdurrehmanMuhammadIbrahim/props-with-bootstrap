import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from 'react-dom';
import './index.css';
import heart from "./images/heart.png"
import image from "./images/download1.png"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
import img5 from "./images/img5.jpg"
// import img1 from "./images/img.jpg"
// import image1 from"./images/download.jpg"
import App from './App';
import reportWebVitals from './reportWebVitals';
import react from 'react';



function Hi(props) {


  return <div className ="main" >
    
<div >
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid" > 
    <h1 class="navbar-brand" href="#">AUTO HUB</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link ">About us</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search Here" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>

<br/>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image} class="d-block w-100" alt="..." height="500px"/>
    </div>
    
  </div>
</div><br/><br/>
     
  </div>;

}<br></br>


 function Di(props){
  return <div className="cardss">
  
    <div class="card mb-3" className="card">
    <img src={props.pic} class="card-img-top" alt="..."  />
    <div class="card-body" className="cardimg">
      <h5 class="card-title">{ props.name }</h5>
      <p class="card-text">{ props.text }</p>
      <p class="card-text"><small class="text-muted">{ props.date }</small></p>
    <button  height="35px" className="like">like</button>
    </div>
  </div>

  </div>
  }
  ReactDOM.render(<div className="props">
    
  <Hi
  
  
  
  />
  <Di 
pic = {img1}
name="Lamborghini Diablo."
   text = " Is your vehicle a “Black Widow”"
   date ="2/5/12"
/>
<Di 
pic = {img2}
name="Ford Raptor."
   text = " Is your vehicle a “Black Widow” " 
   
   date ="2/8/15"
/>
<Di 
pic = {img3}
name="Ferrari Testarossa."
   text = " Is your vehicle a “Black Widow” "
   date ="25/5/17"
/>
<Di 
pic = {img4}
name="Lamborghini Diablo."
   text = " Is your vehicle a “Black Widow”"
   date ="2/5/22"
/>
<Di 
pic = {img1}
name="Ferrari Testarossa."
   text = " Is your vehicle a “Black Widow”"
   date ="22/5/21"
/>
{/* <Di 
pic = {img4}
name="Ford Raptor."
   text = " Is your vehicle a “Black Widow” or a “Ladybug”? If you're wondering what to name your car"
   date ="4/5/23"
/> */}
 
</div>
, document.querySelector('#root'));


 