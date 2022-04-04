<template>
  <div class="about">
     <div class="color-overlay d-flex justify-content-center align-items-center">
       
        <img src="../assets/alee.jpg" class="alee">
        <img src="../assets/jl.jpg" class="alee-2">
      </div>
      <br><br><br> <br>
        <div class="container">
          <img src="../assets/logo.png" class="logo">
          <h1 class="intro">Shutter</h1>
          <p class="intro-1">Shutter is a professional independent Photography Service that provides you with meaningful design that clearly communicates your message.It is the compilation of the works of my friends. Shutter is a form of an advertisement to give exposure to the talent and hardwork of my friends as photographers.
          </p> 
          <h1 class="mission">Mission</h1>
          <p class="intro-2">Our mission is to just share throughout the whole world, the shots that hold a lot meaning. To spread that in one photo can mean a thousand words, Photography is not just a skill but an art.
          </p> 
          <h1 class="beliefs">Our Beliefs</h1>
          <ul class="intro-3">
            <li>The best camera is the one that’s with you</li>
            <li>Capture an experience worth remembering</li>
            <li>Capture the moments you never want to forget</li>
             <li>Taking an image, freezing a moment, reveals how rich reality truly is</li>
             <li>The best thing about a picture is that it never changes, even when the people in it do</li>
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
  top: 70px;
  left: 800px;
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
  left: 800px;
  object-fit: cover;
}
.logo
{
  height: 90px;
  width: 100px;
}
.logo2
{
  position: absolute;
  left: 15px;
  height: 100px;
  width: 150px;
}
.intro
{
  
  position: absolute;
  left: 200px;
  top: 120px;
}
.intro-1
{
  font-family: baskerville-urw;
  margin-left: 110px;
  left: 200px;
  top: 150px;
  width: 50%;
  font-size: larger;
}
.mission{
  position: absolute;
  top: 380px;
  left: 200px;
}
.intro-2
{
  font-family: baskerville-urw;
  margin-left: 110px;
  margin-top: 120px;
  width: 50%;
  font-size: larger;
}
.beliefs{
  position: absolute;
  top: 600px;
  left: 200px;
}
.intro-3
{
  font-family: baskerville-urw;
  margin-left: 110px;
  margin-top: 120px;
  width: 52%;
  font-size: larger;
}
</style>
baskerville-urw;