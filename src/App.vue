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
        <h1>TO DO APP DINDA</h1>
        <input 
            v-model="taskBaru"
            type="text"
            placeholder="Ketik dan Enter"
            @keyup.enter="typehere" 
        />
        

        <select v-model="selected">
            <option v-for = "option in options" :value="option.value">
            {{ option.text }}
            </option>
        </select>

        <div>{{ tasks.value }}</div>     
        
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
            <input type="checkbox" v-model="task.completed" />
            <span>{{ task.text }}</span>
            <button @click="deleteTask(index)">Hapus</button>
            </li>
        </ul>

    </div>

    <div class="posts" id="posts">
      <h1>DATA USER</h1>
      <select v-model="selectedUser">
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
import { ref, onMounted, watch } from 'vue'

const users = ref([])

const selectedUser = ref(null)

const posts = ref([])

const taskBaru = ref("")

const isLoading = ref(false)

const tasks = ref([
    { text: 'ambil kain di laundry simpang', completed: false},
    { text: 'beli sabun cuci piring', completed: true},
    { text: 'ganti oli mesin sepeda motor', completed: false}
]);


const typehere = () => {
  if (taskBaru.value.trim() !== "") {
    tasks.value.push({ text: taskBaru.value, completed: false });
    taskBaru.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};


const selected = ref('Semua')

const options = ref ([
    { text: 'Selesai', value: true, completed : true},
    { text: 'Belum Selesai', value: false, completed : false}
]);

onMounted(() => { });

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
  overflow-y: auto;
  max-height: 400px;
}

input[type="text"] {
    width: 300px;
    padding: 8px;
    margin-bottom: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #903324;
    padding-left: 10px;
    padding-right: 10px;
    text-align: justify;
        
}

input[type="checkbox"] {
    margin-right: 10px;
}

span {
    text-decoration: none;
}

input[type="checkbox"]:checked + span {
    text-decoration: line-through;

}

button {
    background-color: #ef8b7a;
    color: white;
    border: none;
    padding: 6px 10px;
    border-radius: 15px;
    cursor: pointer;
    margin-left: auto;
}

button:hover {
    background-color: #e36550;
}

select{
    background-color: #ef8b7a;
    margin-left: auto;
    font-size: medium;
    border: 25px ;
    border-radius: 5px;
}

option{
    background-color: #fdf4f3;
    color: #783024;
}

.posts ul{
  padding: 0;
}

.posts li{
  margin-bottom: 10px;
  padding-bottom: 10px;
  text-align: justify;
}

</style>
