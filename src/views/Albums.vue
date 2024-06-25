<template>
  <div class="albums-container">
    <h1>Photos in Album 1</h1>
    <div v-if="isLoading" class="loading-text">Loading...</div>
    <div v-else>
      <q-card-list class="card-list">
        <q-card v-for="photo in photos" :key="photo.id" @click.native="viewPhoto(photo.url)" class="photo-card">
          <q-img :src="photo.thumbnailUrl" :alt="photo.title" class="thumbnailPhoto" />
          <q-card-section class="card-section">
            <p class="photo-id">ID: {{ photo.id }}</p>
            <q-card-title>{{ photo.title }}</q-card-title>
            
          </q-card-section>
        </q-card>
      </q-card-list>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const photos = ref([]);
const isLoading = ref(true);

const fetchPhotos = async () => {
  isLoading.value = true;
  const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
  photos.value = await response.json();
  isLoading.value = false;
};

const viewPhoto = (url) => {
  window.open(url, '_blank');
};

onMounted(() => {
  fetchPhotos();
});
</script>

<style scoped>
.albums-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: center;
}


h1 {
  font-size: 24px;
  color: #903324;
  margin-bottom: 20px;
}

.card-list {
  width: 100%;
  max-width: 500px; 
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-bottom:100%;
}

.photo-card {
  border: 5px solid #ef8b7a;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.photo-card:hover {
  transform: scale(1.05);
}

.thumbnailPhoto {
  width: 10%;
  height: 60%;
  border-radius: 8px 8px 0 0;
  text-align: center;
}

.card-section {
  padding: 10px;
}

.card-title {
  font-size: 16px;
}

.photo-id {
  font-size: 14px;
  color: #ba1641;
  font-weight: bold;
}
</style>
