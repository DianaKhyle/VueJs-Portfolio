<template>
  <div class="creative-portfolio">
    <h3 class="portfolio-title">My Music Blog</h3>
    
    <!-- Featured Post -->
    <div class="card featured-post mb-5">
      <div class="row g-0">
        <div class="col-md-5">
          <img src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
               class="img-fluid rounded-start" alt="Featured Post">
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <div class="post-meta">
              <span class="badge bg-primary me-2">Featured</span>
              <span class="text-muted">June 11, 2025</span>
            </div>
            <h5 class="card-title">Exploring the Evolution of POP Music in the Digital Age</h5>
            <p class="card-text">How streaming platforms and social media have transformed the sound and marketing of contemporary pop music, with analysis of recent hits from Taylor Swift, Dua Lipa, and The Weeknd.</p>
            <div class="post-tags">
              <span class="badge bg-light text-dark me-1">#POP</span>
              <span class="badge bg-light text-dark me-1">#MusicTech</span>
              <span class="badge bg-light text-dark me-1">#Trends</span>
            </div>
            <a href="#" class="btn btn-primary mt-3">Read Analysis</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Regular Posts -->
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="post in posts" :key="post.id">
        <div class="card h-100 blog-card">
          <img :src="post.image" class="card-img-top" :alt="post.title">
          <div class="card-body">
            <div class="post-meta mb-2">
              <span class="text-muted small">{{ post.date }}</span>
              <span class="badge ms-2" :style="{backgroundColor: post.genreColor}">{{ post.genre }}</span>
            </div>
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.excerpt }}</p>
          </div>
          <div class="card-footer bg-transparent">
            <a href="#" class="btn btn-sm btn-outline-primary">Read More</a>
            <span class="float-end text-muted small">{{ post.readTime }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Newsletter Signup -->
    <div class="card newsletter-card mt-5">
      <div class="card-body text-center py-4">
        <h5 class="card-title">Stay Updated on Music Trends</h5>
        <p class="card-text">Subscribe to my weekly newsletter for music analysis, artist spotlights, and genre deep dives.</p>
        <div class="input-group mb-3 mx-auto" style="max-width: 400px;">
          <input type="email" class="form-control" placeholder="Your email address">
          <button class="btn btn-primary" type="button">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Creative",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "The Resurgence of Vinyl in R&B Culture",
          excerpt: "How contemporary R&B artists are embracing vinyl releases and what it means for the genre's authenticity in the streaming era.",
          image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          date: "May 28, 2025",
          genre: "R&B",
          genreColor: "#48dbfb",
          readTime: "5 min read"
        },
        {
          id: 2,
          title: "Rock's New Frontier: Genre-Blending in 2025",
          excerpt: "Examining how modern rock bands are incorporating elements from hip-hop, electronic, and world music to stay relevant.",
          image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          date: "May 15, 2025",
          genre: "Rock",
          genreColor: "#ff6b6b",
          readTime: "7 min read"
        },
        {
          id: 3,
          title: "Producer Spotlight: The Architects of Today's POP Sound",
          excerpt: "Profiling the top 5 producers shaping the current pop landscape and their signature production techniques.",
          image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          date: "April 30, 2025",
          genre: "POP",
          genreColor: "#FF9FF3",
          readTime: "8 min read"
        },
        {
          id: 4,
          title: "The Art of Sampling in Modern R&B",
          excerpt: "How contemporary artists are reimagining classic soul samples to create fresh sounds while paying homage to the past.",
          image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          date: "April 18, 2025",
          genre: "R&B",
          genreColor: "#48dbfb",
          readTime: "6 min read"
        }
      ]
    };
  }
};
</script>

<style scoped>
.creative-portfolio {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.portfolio-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #2c3e50;
  text-align: center;
  position: relative;
}

.portfolio-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(to right, #FF9FF3, #48dbfb, #ff6b6b);
  border-radius: 2px;
}

.featured-post {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.featured-post:hover {
  transform: translateY(-5px);
}

.featured-post img {
  height: 100%;
  object-fit: cover;
}

.blog-card {
  border: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.blog-card img {
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.card-title {
  font-weight: 600;
  margin: 10px 0;
}

.newsletter-card {
  border: none;
  border-radius: 15px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.post-meta {
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.post-tags {
  margin-top: 1rem;
}

.btn-primary {
  background-color: #6c5ce7;
  border-color: #6c5ce7;
}

.btn-primary:hover {
  background-color: #5649c0;
  border-color: #5649c0;
}

.btn-outline-primary {
  color: #6c5ce7;
  border-color: #6c5ce7;
}

.btn-outline-primary:hover {
  background-color: #6c5ce7;
  color: white;
}

@media (max-width: 768px) {
  .featured-post .col-md-5 {
    height: 250px;
  }
  
  .portfolio-title {
    font-size: 2rem;
  }
}
</style>