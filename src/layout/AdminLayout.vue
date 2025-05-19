<template>
    <v-layout :key="$route.path" class="rounded rounded-md">
        <NavBar />
        <v-main>
            <router-view />
        </v-main>
    </v-layout>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
    components: {
        NavBar
    }
}
</script>

<style></style>