<template>

  <div class="home">
    <img src="src" alt="">
    <div
      class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
      <div class="color-overlay d-flex justify-content-center align-items-center">
        <h2 data-text="Welcome">Welcome</h2>
      </div>
    </div>
   <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
     <ol class="carousel-indicators">
       <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
     </ol>
    <div class="carousel-inner">
    
      <div class="carousel-item active" >
        <img src="../assets/japan.jpg" class="d-block w-100" alt="...">
       <div class="container">
        <h1 data-text="">We are Shutter</h1>
        <p>Behind every picture…  …there is a story  …to tell! <br>
          Photography is about capturing moments you’ll want to remember forever
        </p>
        </div>
        </div>
     
          </div>
          
          </div> 

     
  </div>
  
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.google.apis.com/css?family=Poppins:wgth@700display=swap');

.carousel-item{
  height: 32rem;
  color: rgb(255, 255, 255);
  position: relative;
  background-position: center;
  background-size: cover;
  
}
.container{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 50px;
}
.banner-image {
  background-image: url('https://i.picsum.photos/id/1048/5616/3744.jpg?hmac=N5TZKe4gtmf4hU8xRs-zbS4diYiO009Jni7n50609zk');
  background-size: cover;
}
.color-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);

}
h1{
  text-shadow: 2px 2px #000000;
}
p{
  text-shadow: 2px 2px #000000;
}
h2{
  position: relative;
  font-size: 8em;
  color: #222;
  text-transform: uppercase;
  border-bottom: 16px solid #222;
  letter-spacing: 0.05em;
  line-height: 1.2em;
}
h2::before{
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: rgb(255, 255, 255);
  overflow: hidden;
  border-bottom: 16px solid rgb(255, 255, 255);
  animation: animate 6s linear infinite;
}
@keyframes animate {
  0%
  {
    width: 0;
  }
  100%
  {
    width: 100%;
  }
}

</style>
