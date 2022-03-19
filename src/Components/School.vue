
<template>

  <div id="school">
   <div class="education">
      <pre>&nbsp;</pre>
      <div class="educ">
      <div class="educpic">
      <img  src="src\assets\educ.png" alt="" width="80px" class="educpic"></div>
      <h1 class="educheader"> &nbsp; Education</h1>
      <pre>&nbsp;</pre>
      <h2><li>Undergraduate</li></h2>
      <h4>Bachelor of Science in Information Technology, Major in Website Development</h4>
      <h4>Holy Angel University</h4>
      <h4>2020 - Present Year (2022)</h4>

      <h2><li>Senior High School Graduate</li></h2>
      <h4>Science, Technology, Engineering and Mathematics (STEM)</h4>
      <h4>Holy Angel University</h4>
      <h4>2018 - 2020</h4>

      <h2><li>Junior High School Graduate</li></h2>
      <h4>Don Bosco Academy</h4>
      <h4>2014 - 2018</h4>
      
    </div>
   </div>
  
   
  </div>
</template>

<script>


export default {
  name: 'school',
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
.education{
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);
  border-style: ridge;
  border: 30px;
  border-color: black;
  background-color: rgb(255, 255, 255);
  margin-top: 700px;
  width: 1000px;
  text-align: left;
  position: relative;
  left: 15%;
  height: 650px;
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