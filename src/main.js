import App from '@/App.vue';

const app = createApp(App);

const $Pinia = Pinia.createPinia();

app.use($Router);
console.log('🚀 ~ $Router:', $Router);
app.use($Pinia);
app.use($I18n);

app.mount('#app');
