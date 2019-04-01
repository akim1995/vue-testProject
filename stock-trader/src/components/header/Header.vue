<template>
<nav class="mb-4 navbar rounded navbar-expand navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <div class="collapse navbar-collapse">
    <div class=" navbar-nav">
      <router-link active-class="active" exact class="nav-item nav-link" to="/">Home</router-link>
      <router-link active-class="active" exact class="nav-item nav-link" :to="{name: 'stocks'}">Stocks</router-link>
      <router-link active-class="active" exact class="nav-item nav-link" :to="{name: 'portfolio'}">Portfolio</router-link>
    </div>
    <div class="ml-auto navbar-nav">
        <a class="nav-item nav-link" href="#">End day</a>
         <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" onclick='return false'>
        <!-- <a class="nav-link dropdown-toggle show" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
          Dropdown link
        </a>
        <div class="dropdown-menu">
        <!-- <div class="dropdown-menu show"> -->
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
