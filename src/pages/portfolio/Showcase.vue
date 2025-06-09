<template>
  <div class="showcase-container">
    <h3 class="showcase-title mb-5">Music Project Showcase</h3>
    <div class="row justify-content-center">
      <div
        v-for="genre in genres"
        :key="genre.id"
        class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
      >
        <div 
          class="genre-card-wrapper"
          @mouseenter="hoverGenre = genre.id"
          @mouseleave="hoverGenre = null"
        >
          <!-- Whole card is clickable -->
          <a :href="genre.link" target="_blank" class="text-decoration-none w-100">
            <div class="card h-100 shadow p-4 text-center genre-card">
              <div class="genre-img-container">
                <img 
                  :src="genre.image" 
                  class="genre-img mb-3" 
                  :alt="genre.title" 
                  :class="{'genre-img-hover': hoverGenre === genre.id}"
                />
                <div 
                  class="genre-overlay"
                  :class="{'overlay-visible': hoverGenre === genre.id}"
                >
                  <span class="play-icon">▶</span>
                </div>
              </div>
              <h5 class="card-title genre-name">{{ genre.title }}</h5>
              <p class="card-text genre-description">{{ genre.description }}</p>
              <div class="genre-tags">
                <span 
                  v-for="tag in genre.tags" 
                  :key="tag"
                  class="badge rounded-pill me-1"
                  :style="{backgroundColor: genre.color}"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverGenre: null,
      genres: [
        {
          id: 1,
          title: 'POP Music',
          description: 'Catchy melodies and chart-topping hits that dominate the airwaves with infectious energy.',
          image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          link: 'https://open.spotify.com/playlist/37i9dQZF1DX1ngEVM0lKrb',
          color: '#FF9FF3',
          tags: ['Top 40', 'Dance', 'Mainstream']
        },
        {
          id: 2,
          title: 'R&B/Soul',
          description: 'Smooth vocals over groovy beats, blending soulful melodies with contemporary rhythms.',
          image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          link: 'https://open.spotify.com/playlist/37i9dQZF1DX4SBhb3fqCJd',
          color: '#48dbfb',
          tags: ['Neo-Soul', 'Groove', 'Chill']
        },
        {
          id: 3,
          title: 'Rock',
          description: 'Powerful guitar riffs and raw energy that defined generations of music lovers.',
          image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          link: 'https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U',
          color: '#ff6b6b',
          tags: ['Classic', 'Alternative', 'Hard Rock']
        }
      ],
    };
  },
};
</script>

<style scoped>
.showcase-container {
  padding: 2rem;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
}

.showcase-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
}

.showcase-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #ff9ff3, #48dbfb, #ff6b6b);
  border-radius: 2px;
}

.genre-card-wrapper {
  transition: all 0.3s ease;
  width: 100%;
}

.genre-card {
  border-radius: 15px;
  transition: all 0.3s ease;
  border: none;
  overflow: hidden;
  background-color: white;
}

.genre-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.genre-img-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.genre-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.5s ease;
}

.genre-img-hover {
  transform: scale(1.1);
}

.genre-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-visible {
  opacity: 1;
}

.play-icon {
  font-size: 3rem;
  color: white;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.genre-card:hover .play-icon {
  transform: scale(1.2);
  opacity: 1;
}

.genre-name {
  font-weight: 700;
  margin-top: 15px;
  font-size: 1.5rem;
  color: #2c3e50;
}

.genre-description {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 15px;
}

.genre-tags {
  margin-top: auto;
}

.badge {
  color: white;
  font-size: 0.7rem;
  padding: 5px 10px;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

a {
  color: inherit;
}

a:hover {
  text-decoration: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .showcase-title {
    font-size: 2rem;
  }
  
  .genre-name {
    font-size: 1.3rem;
  }
}
</style>