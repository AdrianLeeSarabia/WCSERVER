<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Student</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example1">Name</label>
                    <input type="text" id="form2Example1" class="form-control" v-model="student.name" required>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example2">Email</label>
                    <input type="email" id="form2Example2" class="form-control" v-model="student.email" required>
                </div>
                <div class="form-group">
                    <label class="form-label" for="form2Example3">Phone</label>
                    <input type="text" id="form2Example3" class="form-control" v-model="student.phone" required>
                </div>
                <div class="form-group">
                  <br>
                    <button class="btn btn-success btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            student: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.student = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;
            axios.put(apiURL, this.student).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>
<style scoped>
div{
  color: white;
  text-shadow: 2px 2px #000000;
}
</style>