import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    users: [],
    selectedUser: null,
    posts: [],
    albums: [],
    photos: [],
    selectedAlbum: null,
    isLoading: false,
  }),

    
    actions: {
        async fetchUsers() {
        this.isLoading = true;
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        this.users = await response.json();
        this.isLoading = false;
        },
        async fetchPosts(userId) {
        this.isLoading = true;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        this.posts = await response.json();
        this.isLoading = false;
        },
        async fetchAlbums() {
        this.isLoading = true;
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        this.albums = await response.json();
        this.isLoading = false;
        },
        async fetchPhotos(albumId) {
        this.isLoading = true;
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
        this.photos = await response.json();
        this.isLoading = false;
        },
    },
    });
