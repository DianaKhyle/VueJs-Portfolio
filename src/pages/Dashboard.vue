<!-- src/pages/Dashboard.vue -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Portfolio</a>
        <div>
          <router-link class="btn btn-outline-light me-2" to="/portfolio/profile">Profile</router-link>
          <router-link class="btn btn-outline-light me-2" to="/portfolio/showcase">Showcase</router-link>
          <router-link class="btn btn-outline-light me-2" to="/portfolio/contact">Contact</router-link>
          <router-link class="btn btn-outline-light me-2" to="/portfolio/creative">Creative</router-link>
          <button @click="logout" class="btn btn-danger">Logout</button>
        </div>
      </div>
    </nav>

    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('auth')
  router.push('/login')
}
</script>
