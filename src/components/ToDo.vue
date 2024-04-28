<template>
    <div class="main">
        <h1>TO DO APP DINDA</h1>
        <input
            v-model="taskBaru"
            type="text"
            placeholder="Ketik dan Enter"
            @keyup.enter="typehere"
        />

        <select v-model="selected">
            <option v-for="option in options" :value="option.value">
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
</template>


<script setup>
import { ref, onMounted } from 'vue'
const taskBaru = ref("");
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

</script>


<style scoped>
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

</style>
