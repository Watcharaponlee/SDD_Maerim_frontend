<template>
    <v-app-bar :elevation="1" style="background-color:#005BB9; color: white;">
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click="openDrawer()" :ripple="false">
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
        <v-menu :close-on-content-click="false">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" append-icon="mdi-chevron-down" size="large" :ripple="false">
                    <v-icon>mdi-account-circle-outline</v-icon>
                    <p class="pl-3" style="font-size: 15px;">{{ $store.state.name }}</p>
                </v-btn>
            </template>
            <v-list>
                <v-list-item value="2">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-logout"></v-icon>
                    </template>

                    <v-list-item-title @click="logout">{{ 'ออกจากระบบ' }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
import { UserService } from "../api/user";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    setup() {
        const user = new UserService();
        return {
            user
        }
    },
    computed: {
        ...mapState({
            drawer: (state) => state.drawer,
        })
    },
    methods: {
        ...mapMutations({
            setDrawer: "SET_DRAWER",
        }),
        ...mapActions({
            switchDrawer: "switchDrawer",
        }),
        openDrawer() {
            if (this.drawer) {
                this.switchDrawer(false);
            } else {
                this.switchDrawer(true);
            }
        },
        async logout() {
            this.$swal({
                title: 'คุณยืนยันที่จะออกจากระบบใช่ไหม?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ยืนยัน',
                cancelButtonText: 'ยกเลิก'
            }).then(async (res) => {
                if (res.isConfirmed) {
                    await this.user.SignOut(null).then((res) => {
                        if (res.message === 'Logout successfully') {
                            localStorage.removeItem("token");
                            window.location.href = '/monitor/signin';
                        } else if (res.message === 'Logout failed') {
                            this.$swal({
                                icon: 'warning',
                                title: 'มีบางอย่างผิดพลาด !',
                                text: 'กรุณาลองใหม่อีกครั้ง',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'ยืนยัน',
                            })
                            console.log('res', res.data)
                        }
                    })
                }
            })
        }
    }
}
</script>

<style scoped></style>