<template>
    <v-app-bar :elevation="1" style="background-color: #7D4115;color: white;">
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click="$router.push('/monitor/select')" :ripple="false">
                <img class="ml-5" src="../assets/Logo_Maerim_Resize.png" style="width: 100%; max-width: 45px;">
            </v-app-bar-nav-icon>
            <v-app-bar-title>
                <v-row class=" ml-4">
                    <v-col cols="9">
                        <p style="font-size: 18px;">โรงเรียนแม่ริมวิทยาคม</p>
                    </v-col>
                </v-row>
            </v-app-bar-title>
        </template>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style></style>