<template>
  <div class="app-container">
    <q-layout view="hHh Lpr lFf">
      <q-header elevated class="bg-primary text-white">
        <nav>
        <img src="../src/assets/logonama.png" class="logodin">
        <ul>
          <li><router-link to="/todos">TODOS</router-link></li>
          <li><router-link to="/posts">POSTS</router-link></li>
          <li><router-link to="/albums">ALBUMS</router-link></li>
        </ul>
      </nav>
      </q-header>

      <q-page-container>
        <h1 class="judul">UJIAN AKHIR SEMESTER GENAP PEMROGRAMAN BERBASIS KOMPONEN</h1>
        <h2>DINDA SUDITA MAULINA</h2>
        <RouterView />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style>

body {
  background-color: #fad0c9;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ef8b7a;
  padding: 15px 25px;
  z-index: 1000;
}

nav {
  display: flex;
  width: 100%;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  display: inline-block;
  margin: 10px 20px;
}

nav ul li {
  display: inline-block;
  list-style: none;
  margin: 10px 20px;
}

nav ul li a {
  text-decoration: none;
  color: #903324;
  font-weight: bold;
}

nav ul li a:hover {
  color: #783024;
}

.logodin {
  max-width: 250px;
  max-height: 50px;
}

.container {
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
}

h1 {
  font-size: 24;
  margin-bottom: 20px;
  color: #903324;
  text-align: center;
}

.judul{
  font-size: 25px;
}

h2{
  font-size: 20px;
  color: #903324;
  text-align: center;
}

.TODOS {
  margin-top: 20%;
}

.TODOS,
.posts {
  padding: 20px;
  margin-bottom: 200px;
  margin-top: 90px;
  overflow-y: auto;
  max-height: 400px;
}
</style>
