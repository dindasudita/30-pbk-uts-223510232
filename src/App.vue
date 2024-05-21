<template>

<header>
  <nav>
    <img src="../src/assets/logonama.png" class="logodin">
    <ul>
      <li><a href="#todos">TODOS</a></li>
      <li><a href="#posts">POSTS</a></li>
    </ul>
  </nav>
</header>

  <div class="TODOS" id="todos">
        <Todos>Hei, ayo kerjakan tugas-tugasmu 📝! {{ msg }}</Todos>
    </div>

    <div class="posts" id="posts">
      <Posts 
      :users="users"
      :selectedUser="selectedUser"  
      :posts="posts"
      :isLoading="isLoading"
      @select-user="getPost"
      />
    </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue'
import Todos from './components/Todos.vue'
import Posts from './components/Posts.vue'

const users = ref([])

const selectedUser = ref(null)

const posts = ref([])

const isLoading = ref(false)

onMounted(() => { 
  getUser()
});

const getUser = async() => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  users.value = await response.json()

}

const getPost = async(userId) => {
  isLoading.value = true
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  posts.value = await response.json()
  isLoading.value = false
}

getUser()

watch(selectedUser, getPost)
</script>

<style>
body{
  background-color: #fad0c9;
  
}

header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color:#ef8b7a ;
  padding: 15px 25px;
  z-index: 1000;
}

nav{
  display: flex;
  width: 100%;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  margin: 0;
}

nav ul{
  list-style: none;
  padding: 0;
  display: inline-block;
  margin: 10px 20px;
}

nav ul li{
  display: inline-block;
  list-style: none;
  margin: 10px 20px;
}

nav ul li{
  display: inline-block;
  margin-right: 20px;
}

nav ul li a{
  text-decoration: none;
  color: #903324;
  font-weight: bold;
}

nav ul li a:hover{
  color: #783024;
}

.logodin{
  max-width: 250px;
  max-height: 50px;
}

.container{
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #903324;
}

.TODOS{
  margin-top: 20%;
}

.TODOS, .posts {
  padding: 20px;
  margin-bottom: 200px;
  margin-top: 90px;
  overflow-y: auto;
  max-height: 400px;
}

</style>
