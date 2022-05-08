<template>

    <div class="create">
    <div class="row justify-content-center">
        <div class="registration-form">
            <br> <br> <br>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-icon">
                <i class="fa-solid fa-plane-up"></i>
                </div>
                <h3 class="text-center">Student Feedback Form</h3>
                <div class="form-group mb-4">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="student.name" required>
                </div>
                <div class="form-group mb-4">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="student.email" required>
                </div>
                <div class="form-group mb-4">
                    <label>Phone</label>
                    <input type="tel" class="form-control" placeholder="123-456-7890"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="student.phone" required>
                </div>
                <div class="form-group mb-4">
                    <label>Destination</label>
                    <input type="text" class="form-control" v-model="student.destination" required>
                </div>
                <div class="form-group mb-4">
                    <label>Departure Arrival</label>
                    <input type="date" class="form-control" v-model="student.departure" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-light btn-block create-account" style=" background-color:#1044a5; color:white;">Create</button>
                </div>
            </form>
        </div>
    </div>
    </div>  
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                student: {
                   name: '',
                   email: '',
                   phone: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-student';
                
                axios.post(apiURL, this.student).then(() => {
                  this.$router.push('/view')
                  this.student = {
                    name: '',
                    email: '',
                    phone: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>
<style scoped>
div{
  color: rgb(255, 255, 255);

}
.create{
    background-image: url('https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I');
    height: 100vh;
    overflow-x: hidden;
    background-size: cover;
}
h3{
            margin-top: -40px;
            text-align: center;
        }

        .registration-form form{
            background-color: #fff;
            max-width: 600px;
            margin: auto;
            padding: 50px 50px;
            border-radius: 30px;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
        }
.registration-form .form-icon{
    position: relative;
    text-align: center;
     background-color: #0c3e9a;
    border-radius: 50%;
    font-size: 40px;
    color: rgb(255, 255, 255);
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 50px;
    line-height: 100px; 
            }

        .registration-form .create-account{
            border-radius: 30px;
            padding: 10px 20px;
            font-size: 18px;
            font-weight: bold;
            background-color: #1044a5;
            border: none;
            color: white;
            margin-top: 20px;
            margin-left: 200px;
        }



        @media (max-width: 576px) {
            .registration-form form{
                padding: 50px 20px;
            }

            .registration-form .form-icon{
                width: 70px;
                height: 70px;
                font-size: 30px;
                line-height: 70px;
            }
        }
        label{
            color: #1044a5;
        }
</style>