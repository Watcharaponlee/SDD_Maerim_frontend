<template>
    <v-navigation-drawer v-model="drawer" :width="250" style="background-color: #FAFAFA;">
        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home" value="home" @click="$router.push({ name: 'Home' })">
                <v-list-item-title>
                    <p style="font-size: 14px; width: 100%; height: 30px;" class="d-flex align-center">หน้าหลัก</p>
                </v-list-item-title>
            </v-list-item>
            <v-list-item prepend-icon="mdi-shield-account" value="admin" @click="$router.push({ name: 'ManageAdmin' })">
                <v-list-item-title>
                    <p style="font-size: 14px; width: 100%; height: 30px;" class="d-flex align-center">
                        จัดการผู้ดูแลระบบ
                    </p>
                </v-list-item-title>
            </v-list-item>
            <v-list-item prepend-icon="mdi-face-recognition" value="device" @click="$router.push('/device')">
                <v-list-item-title>
                    <p style="font-size: 14px; width: 100%; height: 30px;" class="d-flex align-center">จัดการอุปกรณ์
                    </p>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    computed: {
        drawer: {
            get() {
                return this.$store.state.drawer;
            },
            set(val) {
                this.$store.commit("SET_DRAWER", val);
            }
        }
    }
}
</script>

<style scoped>
p {
    font-weight: 400;
}
</style>