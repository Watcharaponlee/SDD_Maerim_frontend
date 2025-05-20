<template>
    <div class="body_login">
        <v-card max-width="400px" width="100%" rounded="md" class="ma-5">
            <v-card style="background-color: #7D4115; border-radius: 0px;"
                class="pa-5 d-flex align-center justify-center">
                <div>
                    <img src="../assets/Logo_Maerim_Resize.png" alt="blank" width="100px">
                </div>
                <v-col>
                    <p style="color: white; font-size: 30px;">ระบบจัดการข้อมูล</p>
                    <p style="color: white; font-size: 18px;">โรงเรียนแม่ริมวิทยาคม</p>
                </v-col>
            </v-card>
            <v-form fast-fail class="pa-5" @submit.prevent="submit">
                <v-row>
                    <v-col cols="12">
                        <v-col class="pa-0">
                            <p style="color: grey;" class="pb-1">ชื่อผู้ใช้งาน (Username)</p>
                            <v-text-field density="compact" variant="outlined" prepend-inner-icon="mdi-account"
                                hide-details="auto" placeholder="ชื่อผู้ใช้งาน" v-model="sendData.username"
                                :rules="[v => !!v || 'โปรดระบุชื่อผู้ใช้งาน']" required></v-text-field>
                        </v-col>
                        <v-col class="px-0 pb-0 pt-5">
                            <p style="color: grey;" class="pb-1">รหัสผ่าน (Password)</p>
                            <v-text-field density="compact" variant="outlined" prepend-inner-icon="mdi-lock"
                                hide-details="auto" placeholder="รหัสผ่าน" v-model="sendData.password"
                                :rules="[v => !!v || 'โปรดระบุรหัสผ่าน']" required
                                :append-inner-icon="visible ? 'mdi-eye    -off' : 'mdi-eye'"
                                :type="visible ? 'text' : 'password'"
                                @click:append-inner="visible = !visible"></v-text-field>
                        </v-col>
                        <v-card-actions class="px-0 pt-5 pb-0">
                            <v-btn height="40px" block variant="flat" color="success" class="d-flex align-center"
                                type="submit">เข้าสู่ระบบ<v-icon icon="mdi-login" class="ml-2"></v-icon></v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import { UserService } from '../api/user';
export default {
    setup() {
        const user = new UserService();
        return {
            user
        }
    },
    data: () => ({
        visible: false,
        sendData: {
            username: '',
            password: '',
        }
    }),
    async mounted() {
        if (this.$store.state.CheckLogin) {
            localStorage.clear();
            this.$store.state.CheckLogin = false
        }
        this.$store.watch(
            (state) => state.CheckLogin,
            (newValue, oldValue) => {
                if (newValue) {
                    this.$swal({
                        title: 'ไม่มีสิทธิ์เข้าถึงได้!',
                        text: "โปรดตรวจสอบให้แน่ชัด!",
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'ยืนยัน',
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            localStorage.clear();
                            this.$store.state.CheckLogin = false
                        }
                    })
                }
            }
        );
    },
    methods: {
        async submit(event) {
            const res = await event
            if (res.valid === true) {
                const data = {
                    username: this.sendData.username,
                    password: this.sendData.password
                }
                await this.user.SignIn(data).then(res => {
                    if (res.status === true) {
                        localStorage.setItem('token', res.accessToken);
                        this.$router.push("/monitor/select");
                    } else if (res.error) {
                        this.$swal({
                            title: 'ชื่อผู้ใช้งาน หรือรหัสผ่านไม่ถูกต้อง!',
                            text: 'กรุณาลองใหม่อีกครั้ง',
                            icon: 'warning',
                        })
                    }
                })
            }
        }
    }
}
</script>

<style scoped></style>