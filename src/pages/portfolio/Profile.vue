<template>
  <div class="profile-container d-flex align-items-center justify-content-center">
    <div class="profile-card card shadow p-4">
      <div class="text-center">
        <img
          src="../portfolio/diana.jfif"
          class="profile-img rounded-circle mb-3 border"
          alt="Diana Khyle Padullo - Web Developer"
          loading="lazy"
        />
        <h2 class="fw-bold">Diana Khyle Padullo</h2>
        <p class="lead text-muted mb-4">
          Web Developer | UI/UX Enthusiast | Coding with Passion
        </p>
        
        <div class="skills mb-4">
          <span class="badge bg-primary me-2">HTML/CSS</span>
          <span class="badge bg-success me-2">JavaScript</span>
          <span class="badge bg-info text-dark me-2">Vue.js</span>
          <span class="badge bg-warning text-dark me-2">Responsive Design</span>
        </div>
        
        <div class="social-buttons d-flex justify-content-center gap-3 mt-3">
          <a href="https://www.facebook.com/dianakhyle.padullo?rdid=8FokFgS708yXXVKJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EzdJ15JxY%2F#" target="_blank" class="btn btn-outline-primary">
            <i class="bi bi-linkedin"></i> Facebook
          </a>
          <a href="https://github.com/yourusername" target="_blank" class="btn btn-outline-dark">
            <i class="bi bi-github"></i> GitHub
          </a>
          <a href="https://www.instagram.com/accounts/login/?next=%2Fdayana_kaylee%2F&source=omni_redirect" target="_blank" class="btn btn-outline-danger">
            <i class="bi bi-instagram"></i> Instagram
          </a>
          <a href="https://www.tiktok.com/@bb_di?_r=1&_d=dke835h1e3hd1m&sec_uid=MS4wLjABAAAAIVhd2igeD_mr5Pcu-1actS5CiRfSd9D-jbTvd7orzj9W8kCZpBkEJ8K8kDis-6dM&share_author_id=6889810824350417921&sharer_language=en&source=h5_t&u_code=df91130f8l63lh&timestamp=1749471900&user_id=6889810824350417921&sec_user_id=MS4wLjABAAAAIVhd2igeD_mr5Pcu-1actS5CiRfSd9D-jbTvd7orzj9W8kCZpBkEJ8K8kDis-6dM&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7510060069632952082&share_link_id=497ca2e7-537b-44b3-ab13-10c741ac14a8&share_app_id=1180&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1" target="_blank" class="btn btn-outline-secondary">
            <i class="bi bi-tiktok"></i> TikTok
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), 
              url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 2rem;
}

.profile-card {
  max-width: 600px;
  background: linear-gradient(135deg, rgba(255, 212, 96, 0.9), rgba(255, 128, 171, 0.9));
  backdrop-filter: blur(5px);
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
}

.profile-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.profile-img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.social-buttons a {
  transition: all 0.3s ease;
  min-width: 100px;
}

.social-buttons a:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.badge {
  font-size: 0.8rem;
  padding: 8px 12px;
  border-radius: 20px;
}
</style>