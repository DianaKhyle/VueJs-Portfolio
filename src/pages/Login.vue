<template>
  <div class="d-flex align-items-center justify-content-center min-vh-100 bg-light">
    <div class="card shadow p-4" style="width: 100%; max-width: 400px;">
      <h3 class="text-center mb-4">Portfolio Login</h3>
      <form @submit.prevent="login">
        <div class="mb-3">
          <input
            id="username"
            v-model="username"
            class="form-control"
            placeholder="Enter Username"
            required
          />
        </div>

        <div class="mb-3">
          <input
            id="password"
            type="password"
            v-model="password"
            class="form-control"
            placeholder="Enter Password"
            required
          />
        </div>

        <button class="btn btn-primary w-100" type="submit">Login</button>

        <div v-if="error" class="alert alert-danger mt-3 p-2 text-center">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

function login() {
  if (username.value === 'admin' && password.value === '1234') {
    localStorage.setItem('auth', true)
    router.push('/portfolio/profile')
  } else {
    error.value = 'Invalid credentials'
  }
}
</script>
