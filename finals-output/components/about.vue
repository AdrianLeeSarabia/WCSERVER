<template>
  <div class="about">
     <div class="color-overlay d-flex justify-content-center align-items-center">
       
        <img src="../assets/cano.jpg" class="alee">
        <img src="../assets/fall.jpg" class="alee-2">
      </div>
      <br><br><br> <br>
        <div class="container">
          <img src="../assets/logo.png" class="logo">
          <h1 class="intro"><span style="color: #0F219B;">T<span style="color: #43A7CB;">R</span><span style="color: #4BAE47;">I</span><span style="color: #F3AF10;">P</span> <span style="color: #F36310;">I</span></span><span style="color: rgb(235, 5, 5);">T</span></h1>
          <p class="intro-1"><b>Trip It,</b> is an award-winning flight search engine and travel resource . We're here to help you locate flights in the Philippines, find great deals, and make flying easier. By looking for inexpensive airline tickets on <b>Trip It,</b> you can save money on airfare. <b>Trip It</b> analyzes hundreds of airline ticket websites for travel bargains to help you discover the cheapest flights. Whether you're looking for a last-minute flight or a cheap airline ticket for a later date, <b>Trip It</b> can help you find the best prices faster and make your money's worth. With <b>Trip It,</b> you realize how amazing the Philippines is.
          </p> 
          <h1 class="mission"><span style="color: #0F219B;">M<span style="color: #43A7CB;">I</span><span style="color: #4BAE47;">SS</span><span style="color: #F3AF10;">I</span><span style="color: #F36310;">O</span></span><span style="color: rgb(235, 5, 5);">N</span></h1>
          <p class="intro-2">to give the better experience our clients through an excellent service with personal specialized, using our local knowledge and with trips that are socially and environmentally friendly, to meet the wishes of our customers always exceeding their expectations, to show to the world how beautiful as a country, the Philippines is.</p> 
          <h1 class="beliefs"><span style="color: #0F219B;">OU<span style="color: #43A7CB;">R</span><span style="color: #4BAE47;"> B</span><span style="color: #F3AF10;">EL</span><span style="color: #F36310;">IE</span></span><span style="color: rgb(235, 5, 5);">FS</span></h1>
          <ul class="intro-3">
            <li>Life is a journey, not a destination</li>
            <li>The world is a book and those who do not travel read only one page</li>
            <li>Travel makes one modest, you see what a tiny place you occupy in the world</li>
            <li>Climb the mountain so you can see the world, not so the world can see you</li>
            <li>It is not the destination where you end up but the mishaps and memories you create along the way</li>
          </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      title: 'About',
      image
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about{
  background-color: #ffffff;
}
.color-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
 
}

.alee
{
  border: 1px solid #000000;
  box-shadow: 5px 5px 10px #595959;
  width: 300px;
  height: 400px;
  position: absolute;
  top: 100px;
  left: 200px;
  object-fit: cover;
}
.alee-2
{
  border: 1px solid #000000;
  box-shadow: 5px 5px 10px #595959;
  width: 300px;
  height: 400px;
  position: absolute;
  top: 570px;
  left: 870px;
  object-fit: cover;
}
.logo
{
  position: absolute;
  top: 90px;
  left: 650px;
  height: 90px;
  width: 100px;
}
.logo2
{
  position: absolute;
  height: 100px;
  width: 150px;
}
.intro
{
  
  position: absolute;
  left: 800px;
  top: 120px;
}
.intro-1
{
  font-family: baskerville-urw;
  margin-left: 530px;
  margin-top: 100px;
  width: 50%;
  font-size: larger;
}
.mission{
  position: absolute;
  top: 580px;
  left: 200px;
}
.intro-2
{
  font-family: baskerville-urw;
  margin-left: 80px;
  margin-top: 190px;
  width: 50%;
  font-size: larger;
}
.beliefs{
  position: absolute;
  top: 820px;
  left: 200px;
}
.intro-3
{
  font-family: baskerville-urw;
  margin-left: 70px;
  margin-top: 100px;
  width: 60%;
  font-size: larger;
}
</style>
baskerville-urw;