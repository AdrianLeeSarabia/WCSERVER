
<template>

  <div id="skills">
    
   <div class="skills">
    <pre>&nbsp;</pre>
    <div class="educ">
      <div class="educpic">
      <img  src="src\assets\skills.png" alt="" width="50px"></div>
    <h1 class="educheader"> &nbsp; Skills</h1>
    <pre>&nbsp;</pre>
    <h2><li>Adaptability </li></h2>

    <pre>&nbsp;</pre>
    <h2><li>Communication</li></h2>
   
    <pre>&nbsp;</pre>
    <h2><li>Multitasking</li></h2>

    <pre>&nbsp;</pre>
    <h2><li>Empathy</li></h2>

    <pre>&nbsp;</pre>
    <h2><li>Creativity</li></h2>
    
  </div>
  </div>

  <div class="language">
    <pre>&nbsp;</pre>
    <div class="educ">
      <div class="educpic">
        
      <img  src="src\assets\language.png" alt="" width="60px" class="educpic"></div>
    <h1 class="educheader"> &nbsp; Technical Expertise</h1>
    <pre>&nbsp;</pre>
    <h2><li>Python </li></h2>

    <pre>&nbsp;</pre>
    <h2><li>Java</li></h2>
   
    <pre>&nbsp;</pre>
    <h2><li>HTML</li></h2>

    <pre>&nbsp;</pre>
    <h2><li>CSS</li></h2>

    <pre>&nbsp;</pre>
    <h2><li>Adobe XD</li></h2>
    </div>
  </div>
  
   
  </div>
</template>

<script>


export default {
  name: 'skills',
  data () {
    return {
      msg3: 'Skills'
    }
  }
}
</script>

<style>


.educ{
  position: relative;
  left: 5%;
}
.educpic{
  text-align: center;
  float: left;


}
.skills{
  right: -40px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);
  height: 600px;
  width: 550px;
  border: 1px;
  border-style: groove;
  border-color: black;
  background-color: rgb(94, 94, 100);
  position: relative;
  top: 100px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  
}


.language{
  left: 650px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);
  height: 600px;
  width: 550px;
  border: 1px;
  border-style: groove;
  border-color: black;
  background-color: rgb(94, 94, 100);
  position: relative;
  top: -500px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
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