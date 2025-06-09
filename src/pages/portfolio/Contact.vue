<template>
  <div class="contact-wrapper">
    <div class="contact-container">
      <h3 class="contact-title">Get in Touch</h3>
      <p class="contact-subtitle">Questions about music? Want to collaborate?</p>
      
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <input 
            v-model="name" 
            class="form-control" 
            placeholder="Your Name" 
            required 
          />
        </div>
        
        <div class="form-group">
          <input 
            v-model="email" 
            type="email" 
            class="form-control" 
            placeholder="Email Address" 
            required 
          />
        </div>
        
        <div class="form-group">
          <select v-model="genre" class="form-select">
            <option value="">Select Genre</option>
            <option value="pop">POP</option>
            <option value="r&b">R&B/Soul</option>
            <option value="rock">Rock</option>
          </select>
        </div>
        
        <div class="form-group">
          <textarea 
            v-model="message" 
            class="form-control" 
            rows="3" 
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          class="submit-btn"
          :class="{'submitting': submitting}"
          :disabled="submitting"
        >
          <span v-if="!submitted && !submitting">Send</span>
          <span v-else-if="submitting"><i class="fas fa-spinner fa-spin"></i></span>
          <span v-else><i class="fas fa-check"></i></span>
        </button>
      </form>
      
      <div class="genre-buttons">
        <button 
          v-for="g in genres" 
          :key="g.value"
          @click="setGenre(g.value)"
          class="genre-btn"
          :class="`genre-${g.value}`"
          :style="{backgroundColor: genre === g.value ? g.color : '#f8f9fa'}"
        >
          <i :class="g.icon"></i>
          <span>{{ g.label }}</span>
        </button>
      </div>
      
      <div v-if="submitted" class="success-message">
        <i class="fas fa-check-circle"></i>
        Message sent!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      genre: '',
      message: '',
      submitted: false,
      submitting: false,
      genres: [
        { value: 'pop', label: 'POP', color: '#FF9FF3', icon: 'fas fa-music' },
        { value: 'r&b', label: 'R&B', color: '#48dbfb', icon: 'fas fa-microphone' },
        { value: 'rock', label: 'Rock', color: '#ff6b6b', icon: 'fas fa-guitar' }
      ]
    };
  },
  methods: {
    submitForm() {
      this.submitting = true;
      setTimeout(() => {
        this.submitted = true;
        this.submitting = false;
        setTimeout(() => this.submitted = false, 3000);
      }, 1000);
    },
    setGenre(genre) {
      this.genre = genre;
    }
  }
};
</script>

<style scoped>
.contact-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 20px;
}

.contact-container {
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.contact-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  text-align: center;
  background: linear-gradient(to right, #FF9FF3, #48dbfb, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-subtitle {
  color: #666;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-control, .form-select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
}

.form-control:focus, .form-select:focus {
  border-color: #6c5ce7;
  outline: none;
  box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
}

textarea.form-control {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(to right, #FF9FF3, #48dbfb);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.5rem;
}

.submit-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn.submitting {
  background: #b2bec3;
}

.genre-buttons {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

.genre-btn {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
}

.genre-btn i {
  margin-bottom: 3px;
  font-size: 1rem;
}

.genre-pop {
  color: #f7d9f3;
}

.genre-r&b {
  color: #79daf0;
}

.genre-rock {
  color: #ebb9b9;
}

.success-message {
  margin-top: 1rem;
  padding: 10px;
  background: #e8f8f5;
  color: #00b894;
  border-radius: 6px;
  text-align: center;
  font-size: 0.9rem;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 576px) {
  .contact-container {
    padding: 1.5rem;
  }
  
  .contact-title {
    font-size: 1.5rem;
  }
  
  .genre-buttons {
    flex-direction: column;
  }
}
</style>