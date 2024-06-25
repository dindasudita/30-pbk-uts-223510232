<template>
  <div class="posts-container">
    <h1>DATA USER</h1>
    <select v-bind="{ value:selectedUser }" @change="handleSelectedUser">
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>

    <h1>POSTS</h1>
    <p v-if="isLoading">Loading...</p>
    <ul v-else>
      <li v-for="post in posts" :key="post.id">
        {{ post.userId }} - 
        {{ users.find(user => user.id === post.userId)?.name }} - {{ users.find(user => user.id === post.userId)?.company.name }} - 
        {{ post.title }} - {{ post.body }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMainStore } from '../stores/useMainStore';

const store = useMainStore();
const selectedUser = ref(null);

const handleSelectedUser = () => {
  store.fetchPosts(selectedUser.value);
};

</script>

<style scoped>
.posts-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  font-size: 24px;
  margin-bottom: 30px;
  color: #903324;
}

ul {
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 10px;
  padding-bottom: 10px;
  text-align: justify;
}
</style>
