<template>
  <div>
    <h2>Home View</h2>
    <p>$route.path: {{ $route.path }}</p>
    <p>$route.name: {{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About</button>
    <button class="btn btn-info ms-2" @click="person.say">{{ person.name }}</button>
    
    <AppImage image-string="star_icon" />
  </div>
</template>

<script setup>
import AppImage from '@/components/AppImage.vue';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, getCurrentInstance, inject } from 'vue';

const route = useRoute();
const router = useRouter();
console.log('route', route.path);

const goAboutPage = () => {
  router.push({ name: 'About' });
};

const person = inject('person');
console.log('person', person);
person.say();

onMounted(() => {
  // const internalInstance = getCurrentInstance();
  // const person = internalInstance.appContext.config.globalProperties.$person;
  // console.log('person name: ', person.name);
  // person.say();
})
</script>

<style lang="scss" scoped></style>
