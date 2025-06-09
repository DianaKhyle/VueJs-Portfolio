<template>
  <div class="d-flex">
    <div class="bg-dark text-white vh-100 p-3" style="width: 250px;">
      <h4 class="text-center">My Portfolio</h4>
      <ul class="nav flex-column mt-4">
        <li class="nav-item">
          <router-link to="/portfolio/profile" class="nav-link text-white">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/portfolio/showcase" class="nav-link text-white">Showcase</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/portfolio/contact" class="nav-link text-white">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/portfolio/creative" class="nav-link text-white">Creative</router-link>
        </li>
      </ul>
    </div>
    <div class="flex-grow-1 p-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>