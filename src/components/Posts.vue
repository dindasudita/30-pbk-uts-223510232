<template>
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
</template>

<script setup>

const props = defineProps ([
    'users', 'selectedUser','posts','isLoading'
])

const emit = defineEmits(['select-user'])

const handleSelectedUser = (event) => {
    emit('select-user', event.target.value)
}
</script>


<style>
h1{
    font-size: 24px;
    margin-bottom: 30px;
    color: #903324;
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