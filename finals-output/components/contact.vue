<template>

  <div class="contact">
   <br>
      <div class="container my-5">
          <div class="center">
          
            <div class="contactBG">
              <div class="contactContent">
                  <div class="contactSection">
                      <div class="contactTitle">
                          <h1>Contact Us</h1>
                          <p>have any comments?</p>
                      </div>

                      <form>
                          <div class="contactForm">
                              <div class="name">
                                  <input name="name" id="name" placeholder="Name">
                              </div>

                              <div class="email">
                                  <input name="email" id="email" placeholder="E-mail">
                              </div>

                              <div class="subject">
                                  <input name="subject" id="subject" placeholder="Subject">
                              </div>

                              <div class="message">
                                  <textarea name="message" id="message">Message</textarea>
                              </div>
                          </div>

                          <div class="submit">
                              <input type="submit" value="Get in touch">
                          </div>
                      </form>
                  </div>
                  
                  <br>
                  <br>

                  <div class="infoSection">
                      <h1>Let's Start a Conversation</h1>

                      <div class="infoContent">
                          <p>We'd love to hear from you</p>
                          <h4>Email us with any questions or inquiries. We would be happy to answer your questions.
                            We'll show you the beauty behind the Philippines!
                          </h4>

                          <br>

                          <p>Contact No.</p>
                          <h4>1234-567-8912</h4>

                          <br>

                          <p>E-mail</p>
                          <h4>tripit@gmail.com</h4>

                          <br>

                          

                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div> 

       
        <img src="../assets/daniel.png" class="alee">
        <img src="../assets/lance.jpg" class="alee-2">
        <img src="../assets/me.jpg" class="alee-3">
        <img src="../assets/jessica.jpg" class="alee-4">
        <h4 class="team">Meet the<span style="color: #0F219B;"> T<span style="color: #43A7CB;"></span><span style="color: #4BAE47;">E</span><span style="color: #F3AF10;"></span><span style="color: #F36310;">A</span></span><span style="color: rgb(235, 5, 5);">M</span></h4>
         <p class="lance">Lance Angelo Sicat</p>
         <p class="adrian">Adrian Lee Sarabia</p>
         <p class="daniel">Daniel Joshua Tongol</p>
         <p class="jessica">Jessica Shaine Santos</p>


    
     <br>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      title: 'Contact',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact{
    background-color: #80aeeb;
}
.contactBG{
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto; 
    text-align: center;
    padding: 1px 0px;
}
.contactSection{
    margin-left: 650px;
    margin-top: 40px;
    background-color:#ffffff;
    width: 400px;
    border-radius: 10px;
    text-align: center;
    padding: 1px;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.contactTitle h1{
    text-align: center;
    margin-top: 20px;
    padding: 5px;
    font-size: 35px;
}
.contactTitle p{
    text-align: center;
    font-size: 20px;
}
/*FORM*/
form{
    padding: 10px 0px;
    
}
.contactForm{
    padding: 0px 30px;
    text-align: left;
}
.contactForm input, .contactForm textarea{
    background-color: #ffffff;
    border: none;
    border-bottom: solid 1px #d1cece;
    margin-top: 40px;
    width: 90%;
    font-size: 18px;
}
.contactForm textarea{
    margin-top: 30px;
    display: block;
    height: 80px;
    width: 90%;
    font-family: var(--body-font);
    color: gray;
}
.submit input{
    display: block;
    background-color: #0b162d;
    width: 120px;
    height: 35px;
    border-radius: 50px;
    border: 0px;
    color: white;
    font-size: 16px;
    letter-spacing: 0.5px;
    margin-left: 25px;
    margin-top: 15px;
}
/*INFO SECTION*/
.infoSection{
    position: absolute;
    text-align: left;
    margin-top: -565px;
    margin-left: 0px;
    width: 50%;
}
.infoSection h1{
    font-size: 50px;
    color: white;
}
.infoContent{
    color: rgb(255, 255, 255);
    margin-top: 20px;
    font-size: large;
}
.infoContent h4{
    margin-top: -10px;
    font-size: 20px;
}
.infoContent a{
    color: rgb(255, 255, 255);
    text-decoration: none;
}
.alee
{
  border: 1px solid #000000;
  box-shadow: 5px 5px 10px #595959;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 900px;
  left: 970px;
  object-fit: cover;
}
.alee-2
{
  border: 1px solid #000000;
  box-shadow: 5px 5px 10px #595959;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 900px;
  left: 370px;
  object-fit: cover;
}
.alee-3
{
  border: 1px solid #000000;
  box-shadow: 5px 5px 10px #595959;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 900px;
  left: 670px;
  object-fit: cover;
}
.alee-4
{
  border: 1px solid #000000;
  box-shadow: 5px 5px 10px #595959;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 900px;
  left: 70px;
  object-fit: cover;
}
.team
{
  font-size: 50px;
  position: absolute;
  left: 430px;
  top: 780px;
}
.lance{
font-size: 20px;
  position: absolute;
  left: 385px;
  top: 1125px 
}
.adrian{
font-size: 20px;
  position: absolute;
  left: 685px;
  top: 1125px 
}
.daniel{
font-size: 20px;
  position: absolute;
  left: 985px;
  top: 1125px 
}
.jessica{
font-size: 20px;
  position: absolute;
  left: 75px;
  top: 1125px 
}

</style>
