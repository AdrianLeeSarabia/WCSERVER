<template>
<body>

  <div>
    <!-- Nav bar -->
    <nav class="navbar fixed-top navbar-expand-lg navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <span>
    <a class="navbar-brand" href="">
      <img src="./assets/logo.png" alt="med health icon" width="30" height="30" class="d-inline-block align-text-top">
      Trip It 
       </a>
       </span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b>
      <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item active">
            <router-link class="appointment-btn scrollto" to="/" style="text-decoration: none;">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/about">About</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/gallery">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/create">Book</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/view">View</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </b>
  </div>
  
</nav>
    <!-- Router view -->
      <router-view></router-view>
    </div>
    </body>
</template>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/barbara');
@import url('https://fonts.googleapis.com/css?family=Gruppo');
span{
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  
}
.nav-pills .pill-1 .nav-link {
    background-color: rgba(86, 178, 239, 0.2);
    color: white;
}
.appointment-btn {
    margin-left: 25px;
    background: #6db2e4;
    color: rgb(0, 29, 248);
    border-radius: 50px;
    padding: 8px 25px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
    text-decoration: none;
}
.appointment-btn:hover {
    background: #31b5e6;
    color: #fff;
}
@media (max-width: 768px) {
    .appointment-btn {
      margin: 0 15px 0 0;
      padding: 6px 18px;
    }
}
</style>