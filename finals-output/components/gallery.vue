<template>

  <div class="gallery">
    <br> <br> <br>
    <div class="title">
     <h4>Best Tourist Spots in the<span style="color: #0F219B;"> PH<span style="color: #43A7CB;">IL</span><span style="color: #4BAE47;">IP</span><span style="color: #F3AF10;">PI</span><span style="color: #F36310;">IN</span></span><span style="color: rgb(235, 5, 5);">ES</span></h4>
        <p>Have a look of what our beautiful country has to offer!</p>
    </div>
   <div class="container mt-2">
<!--   <div class="card card-block mb-2">
    <h4 class="card-title">Card 1</h4>
    <p class="card-text">Welcom to bootstrap card styles</p>
    <a href="#" class="btn btn-primary">Submit</a>
  </div>   -->
  <div class="row">
    <div class="col-md-6 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/siargao.jpg" alt="Photo of sunset">
        <h5 class="card-title mt-3 mb-3">Siargao</h5>
        <p class="card-text">a teardrop-shaped small island located at the northeastern coast of Mindanao, is known as the country's <b>Surfing Capital</b></p> 
  </div>
    </div>
    <div class="col-md-6 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/elnido.jpg" alt="Photo of sunset">
        <h5 class="card-title  mt-3 mb-3">El Nido</h5>
        <p class="card-text"><b>known for </b> its stunning lagoons, white sand beaches, rocky islets, towering limestone cliffs, and glasslike waters teeming with marine life</p> 
  </div>
    </div>
    <div class="col-md-6 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/intramuros.jpg" alt="Photo of sunset">
        <h5 class="card-title  mt-3 mb-3">Intramuros</h5>
        <p class="card-text">Located south of the Pasig River and east of Manila Bay, the Walled City of Intramuros in Manila City was built by the Spaniards some 400 years ago as their political and military base in Asia. </p> 
  </div>
    </div>
    <div class="col-md-6 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/mayonvolcano.jpg" alt="Photo of sunset">
        <h5 class="card-title  mt-3 mb-3">Mayon Volcano</h5>
        <p class="card-text">it is renowned for its <b>"perfect cone"</b> because of its symmetric conical shape, and is regarded as very sacred in Philippine mythology.</p> 
      </div>
        </div>    
      </div>
  
    </div>
     <br>
    <div class="title">
     <h4>It's more fun in the<span style="color: #0F219B;"> PH<span style="color: #43A7CB;">IL</span><span style="color: #4BAE47;">IP</span><span style="color: #F3AF10;">PI</span><span style="color: #F36310;">IN</span></span><span style="color: rgb(235, 5, 5);">ES</span></h4>
        <p>The Philippines is where the love is.</p>
    </div>
   <div class="container mt-2">
<!--   <div class="card card-block mb-2">
    <h4 class="card-title">Card 1</h4>
    <p class="card-text">Welcom to bootstrap card styles</p>
    <a href="#" class="btn btn-primary">Submit</a>
  </div>   -->
  <div class="row">
    <div class="col-md-6 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/palawan.jpg" alt="...">
        <h5 class="item-card-title mt-3 mb-3">Palawan</h5>
        <p class="card-text">famous for its white sand beaches, turquoise waters, coral reefs, and splendid limestone rock formations</p> 
  </div>
    </div>
    <div class="col-md-6 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/rizal.jpg" alt="...">
        <h5 class="card-title  mt-3 mb-3">Rizal Park</h5>
        <p class="card-text">Still widely known as <b>'Luneta'</b> (its name until the 1950s), a whole pantheon of Filipino heroes. As the place where José Rizal was executed by the Spanish colonial authorities, it's also of great historical significance.</p> 
  </div>
    </div>
    <div class="col-md-6 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/vigan.jpg" alt="...">
        <h5 class="card-title  mt-3 mb-3">Vigan</h5>
        <p class="card-text">Vigan is famous for its <b>well-preserved</b> Spanish Colonial town, historical Vigan tourist spots, and delicious food and delicacies</p> 
  </div>
    </div>
    <div class="col-md-6 col-sm-6 item">
      <div class="card item-card card-block">
    <img src="../assets/falls.jpg" alt="...">
        <h5 class="card-title  mt-3 mb-3">Kawasan Falls</h5>
        <p class="card-text">beautiful turquoise water, Kawasan Falls sits at the foot of Mantalongon Mountain Range,it has a <b>multi-tier layout.</b> It has three waterfall levels, all of which feature natural pools where visitors can swim and relax.</p> 
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
  padding-left:10px;
  padding-right:10px;
}
.item-card{
  transition:0.5s;
  cursor:pointer;
}
.item-card-title{  
  font-size:20px;
  transition:1s;
  cursor:pointer;
}
.item-card-title i{  
  font-size:20px;
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
