const app = {
    data() {
        return {
           image1: './images/profile.jpg',
           image2: './images/view.jpg',
           name: 'Nattima Mahapan',
           province: 'Trat',
           follower: 500,
           project: 40,
           rank: 100
        }
    },
}
mountedApp = Vue.createApp(app).mount('#app')