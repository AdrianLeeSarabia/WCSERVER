<template>

  <div class="gallery">
    <br> <br> <br>
    <div class="title">
     <h4 class="text-uppercase">Japan Archives</h4>
        <p>A trip to Japan</p>
    </div>
   <div class="container mt-2">
<!--   <div class="card card-block mb-2">
    <h4 class="card-title">Card 1</h4>
    <p class="card-text">Welcom to bootstrap card styles</p>
    <a href="#" class="btn btn-primary">Submit</a>
  </div>   -->
  <div class="row">
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/jp.jpg" alt="Photo of sunset">
        <h5 class="card-title mt-3 mb-3">Patience</h5>
        <p class="card-text">Worth waiting for.</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/jp2.jpg" alt="Photo of sunset">
        <h5 class="card-title  mt-3 mb-3">Difference</h5>
        <p class="card-text">Took the chance, made all the difference.</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/jp3.jpg" alt="Photo of sunset">
        <h5 class="card-title  mt-3 mb-3">Lost</h5>
        <p class="card-text">Lost in the thrill of it all.</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/jp4.jpg" alt="Photo of sunset">
        <h5 class="card-title  mt-3 mb-3">Work</h5>
        <p class="card-text">Don’t judge each day by the harvest you reap but by the seeds that you plant.</p> 
      </div>
        </div>    
      </div>
  
    </div>
     <br>
    <div class="title">
     <h4 class="text-uppercase">Music</h4>
        <p>The universal language of humankind</p>
    </div>
   <div class="container mt-2">
<!--   <div class="card card-block mb-2">
    <h4 class="card-title">Card 1</h4>
    <p class="card-text">Welcom to bootstrap card styles</p>
    <a href="#" class="btn btn-primary">Submit</a>
  </div>   -->
  <div class="row">
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/ben.jpg" alt="Photo of sunset">
        <h5 class="item-card-title mt-3 mb-3">Home</h5>
        <p class="card-text">Leads me back to you.</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/ben2.jpg" alt="Photo of sunset">
        <h5 class="card-title  mt-3 mb-3">Mahiwaga</h5>
        <p class="card-text">Pipiliin ka sa araw-araw.</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/ben3.jpg" alt="Photo of sunset">
        <h5 class="card-title  mt-3 mb-3">Kathang Isip</h5>
        <p class="card-text">Gigising na sa panaginip kong ito</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/ben4.jpg" alt="Photo of sunset">
        <h5 class="card-title  mt-3 mb-3">Beat</h5>
        <p class="card-text">Feel the rhythm in your heart.</p> 
      </div>
        </div>    
      </div>
  
    </div>


     
  </div>
  
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      title: 'Gallery',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  height:15vw;
  width:100%;
  object-fit: cover;
}

.item{
  padding-left:5px;
  padding-right:5px;
}
.item-card{
  transition:0.5s;
  cursor:pointer;
}
.item-card-title{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
}
.item-card-title i{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
  color:#ffa710
}
.card-title i:hover{
  transform: scale(1.25) rotate(100deg); 
  color:#18d4ca;
  
}
.card:hover{
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}
.card-text{
  height:80px;  
}

.card::before, .card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform .3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
  transform: scale3d(1, 1, 1);
}
h5, p {

  text-align: center;
}
.title{
  text-align: center;
}
</style>
