<template>
  <div class="todos-container">
    <h1>TO DO APP DINDA</h1>
    <input 
      v-model="taskBaru"
      type="text"
      placeholder="Ketik dan Enter"
      @keyup.enter="typehere" 
    />
    <select v-model="selected">
      <option value="all">Semua</option>
      <option value="completed">Selesai</option>
      <option value="incomplete">Belum Selesai</option>
    </select>
    <ul>
      <li v-for="(task, index) in filteredTasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span>{{ task.text }}</span>
        <button @click="deleteTask(index)">Hapus</button>
      </li>
    </ul>
    <slot>Jangan lupa dengan tugas anda! </slot>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const taskBaru = ref("");

const tasks = ref([
  { text: 'ambil kain di laundry simpang', completed: false },
  { text: 'beli sabun cuci piring', completed: true },
  { text: 'ganti oli mesin sepeda motor', completed: false }
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

const selected = ref('all');

const filteredTasks = computed(() => {
  if (selected.value === 'completed') {
    return tasks.value.filter(task => task.completed);
  } 
  else if (selected.value === 'incomplete') {
    return tasks.value.filter(task => !task.completed);
  } 
  else {
    return tasks.value;
  }
});
</script>

<style>
.todos-container {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #903324;
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
  
select {
    background-color: #ef8b7a;
    margin-left: auto;
    font-size: medium;
    border: 25px;
    border-radius: 5px;
}
  
option {
    background-color: #fdf4f3;
    color: #783024;
}

</style>
