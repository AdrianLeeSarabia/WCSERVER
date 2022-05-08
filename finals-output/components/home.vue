<template>

  <div class="home">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-to-slide="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/backg.jpg" class="w-100" alt="Carouselpic1">
                <div class="container-lg">
                    <h1 style="font-size: 50px; ">Welcome to <span style="color: #0F219B;">T<span style="color: #43A7CB;">R</span><span style="color: #4BAE47;">I</span><span style="color: #F3AF10;">P</span> <span style="color: #F36310;">I</span></span><span style="color: rgb(235, 5, 5);">T</span></h1>
                    <p style="font-size: 25px; width: 80%;">your go-to traveling agency</p>

                </div>
            </div>

            <div class="carousel-item">
              <img src="../assets/bg2.jpg" class="d-block w-100 h-100" alt="Carouselpic2">
                <div class="container-lg">
                    <h1 style="font-size: 50px;">Here at <span style="color: #0F219B;">T<span style="color: #43A7CB;">R</span><span style="color: #4BAE47;">I</span><span style="color: #F3AF10;">P</span> <span style="color: #F36310;">I</span></span><span style="color: rgb(235, 5, 5);">T</span></h1>
                    <p style="font-size: 25px; width: 80%;">we focus in the Satisfaction of our Customers, as well as being able to enjoy the sceneries of what the Philippines has to offer.</p>
                </div>
            </div>
            
            <div class="carousel-item">
              <img src="../assets/bg4.jpg" class="img-fluid" alt="Carouselpic2">
                <div class="container-lg">
                    <h1 style="font-size: 50px;"><span style="color: #0F219B;">T<span style="color: #43A7CB;">R</span><span style="color: #4BAE47;">I</span><span style="color: #F3AF10;">P</span> <span style="color: #F36310;">I</span></span><span style="color: rgb(235, 5, 5);">T</span></h1>
                    <p style="font-size: 25px; width: 80%;">Shows you why IT IS FUN IN THE PHILIPPINES</p>
                </div>
            </div>
        </div>
      </div>
   <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
     <ol class="carousel-indicators">
       <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
     </ol>
    <div class="carousel-inner">
    
      <div class="carousel-item active" >
        <img src="../assets/bg3.jpg" class="img-fluid" alt="...">
       <div class="container">
        <h1 data-text="">TRIP IT!</h1>
        <p>A journey of a thousand miles begins with a single step <br>
          Traveling – it leaves you speechless, then turns you into a storyteller
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
@import url('http://fonts.cdnfonts.com/css/barbara');
@import url('https://fonts.google.apis.com/css?family=Poppins:wgth@700display=swap');
.carousel-item{
    font-family: 'Barbara', sans-serif;                                           
    height: 720px;
    background: white;
    color: rgb(255, 255, 255);
}

.carousel-inner .container-lg{
    position: absolute;
    bottom: 0;
    left: 20px;
    right: 0;
    padding-bottom: 150px;
    text-shadow: 1px 1px 2px black;
}

.carousel-inner .container-lg p{
    text-shadow: 2px 2px 2px rgb(0, 0, 0);
}
.carousel-inner .container-lg h1{
    text-shadow: 2px 2px 2px black;
}
.carousel-item{
  height: 37rem;
  color: rgb(255, 255, 255);
  position: relative;
  background-position: center;
  background-size: cover;
  
}
.container{
  text-align: center;
  position: absolute;
  bottom: 160px;
  left: 0px;
  right: 0;
  padding-bottom: 50px;
}

.color-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);

}
h1{
  font-size: 100px;
  text-shadow: 2px 2px #000000;
}
p{
  text-shadow: 2px 2px #000000;
}
h4{
  position: relative;
  font-size: 8em;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  border-bottom: 16px solid rgb(255, 255, 255);
  letter-spacing: 0.05em;
  line-height: 1.2em;
}
h4::before{
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: rgb(63, 142, 56);
  overflow: hidden;
  border-bottom: 16px solid rgb(63, 142, 56);
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
