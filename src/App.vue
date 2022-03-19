<template>
  <div id="app">
  <body>
  <nav>
    <ul class="list">

    <li><a href ="#profile">Home</a></li>
    <li><a href ="#school">Education</a></li>
    <li><a href ="#skills">Skills</a></li>
    </ul>
  </nav>

  <div>
  
   <h1></h1>
  </div>

  
  </body>
    

  <profile> </profile>
  <school> </school>
  <skills> </skills>
  

 
  </div>
</template>

<script>
//Import the newly created component
import Profile from './Components/Profile.vue'
import Skills from './Components/Skills.vue' 
import School from './Components/School.vue'




export default {
  components: { Profile, Skills, School},
  name: 'app',
  //declare the components
  
  data () {
    return {
      msg: 'The Main Component'
    }
  }
}
</script>

<style>
body, html{
  height: 100%;
  margin: 0;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: rgb(0, 0, 0);
  scroll-behavior: smooth;

}

nav{
  flex: 1;
  padding-left: 60%;
  color: black;

}
nav ul li{
  display: inline-block;
  list-style: none;
  margin: 0px 20px;
}

a:link {
  color: rgb(94, 94, 100);
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: rgb(94, 94, 100);
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: rgb(0, 0, 0);
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: rgb(0, 0, 0);
  background-color: transparent;
  text-decoration: underline;
}
.list{
  overflow: hidden;
}
</style>