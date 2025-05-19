<template>
    <v-app-bar :elevation="1" style="background-color: #005BB9;color: white;">
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click="$router.push('/home')" :ripple="false">
                <img class="ml-5" src="../assets/Chakkam_Khanathon_School_logo.png" alt="blank"
                    style="width: 100%; max-width: 50px;">
            </v-app-bar-nav-icon>
            <v-app-bar-title>
                <v-row class="ml-4">
                    <v-col cols="9">
                        <p style="font-size: 18px;">โรงเรียนจักรคำคณาทร จังหวัดลำพูน</p>
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