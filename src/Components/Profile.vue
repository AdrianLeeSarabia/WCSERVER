<template>
  <div id="profile">   
   <div class="bg-image">
     <br>
    <img src="src\assets\bg.jpg" class="bg">
    <img src="src\assets\grad.JPG" class="grad">
   </div>
   <div class="hi"> 
     <br>
     <h1>Hi, I am Adrian Lee Sarabia  </h1>
        <h1>- Front-End Web Developer -</h1>
        <hr>
       <div class="obj">
        <h2 class="obj"><li>About Me:</li></h2>
        <h4>
          Persevering and Task Driven that is 19 years of age. With 2 years of experience, still currently taking Information Technologies, specifically in Web Development. Proficient in generating user interfaces, troubleshooting, creating and running codes, and applying features based on customer feedbacks.
        </h4>
        <pre>&nbsp;</pre>
        <h2 class="obj"><li>Career Objective:</li></h2> 
        <h4>To be able to hone my skills, to work for an encouraging and stable company that will be of assistance in improving
          and obtaining the necessary skills in order to become the best website developer that I can be. <br> In contemplation of my assets and skills as well as one of your loyal employees.
        </h4>
        <hr>
        <h2>Personal Info:</h2>
        <h4>Date of Birth: June 03, 2002</h4>
        <h4>Age: 19</h4>
        <h4>Gender: Male</h4>
      </div> 

      <div class="more">
    <h4>Civil Status: Single</h4>
        <h4>Citizenship: Filipino</h4>
        
  </div>

  <div class="contact">
    <h2><u>Contact</u></h2>
        <h4>0997 182 1072</h4>
        <h4 class="addr">Lot 55, Justice Mejia Ave.</h4> 
         <h4 class="addr"> Villa Gloria, Angeles City.</h4>
        <h4><u><a href= "mailto: sarabiaadrianlee@gmail.com">sarabiaadrianlee@gmail.com</a></u></h4> 
  </div>
  </div>
  
   
  </div>
</template>

<script>


export default {
  name: 'profile',
  data () {
    return {
      msg3: 'Profile'
    }
  }
}
</script>

<style>

.bg{
  position: absolute;
  background-size: cover;
  left: 26%;
  height: 100%;
  background-repeat: no-repeat;
  padding: 5px 5px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);
}
.grad{
  border: 1px;
  position: absolute;
  height: 400px;
  width: 280px;
  top: 75px;
  left: 10px;
  padding: 3px 3px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);
  
}

.hi{
  color: #fff;
  position: absolute;
  top: 10%;
  left: 30%;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  
}

.more{
  color: #fff;
  position: absolute;
  top: 80%;
  left: 60%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.contact{
  color: rgb(0, 0, 0);
  text-align: left;
  position: absolute;
  top: 73%;
  left: -40%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  letter-spacing: normal;
}

.obj{
  text-align: left;}

h2{
 
  letter-spacing: 2px;
}
h4{
  letter-spacing: px;
}
.addr{
  line-height: 2px;
}
</style>