<template>
    <v-btn color="success" prepend-icon="mdi-plus-circle" variant="flat">
        <p style="font-weight: 400;">เพิ่มผู้ดูแลระบบ</p>
        <v-dialog v-model="dialog" activator="parent" transition="dialog-bottom-transition" max-width="500px">
            <v-card style="background-color: #FAFAFA;">
                <v-toolbar title="เพิ่มผู้ดูแลระบบ" density="compact" color="#005BB9"></v-toolbar>
                <v-form fast-fail @submit.prevent="submit" class="pa-5 pb-0">
                    <v-row>
                        <v-col cols="12" class="">
                            <p style="font-weight: 500; font-size: 18px;" class="d-flex align-center"><v-icon
                                    class="mr-2" icon="mdi-image-area"></v-icon>รูปภาพ</p>
                        </v-col>
                        <v-col cols="12" class="text-center py-0">
                            <img src="../../assets/Screenshot_3.png" alt="Avatar" width="130px">
                        </v-col>
                        <v-col>
                            <v-file-input label="อัพโหลดรูปภาพ..." prepend-icon="mdi-camera" variant="outlined"
                                density="compact"></v-file-input>
                        </v-col>
                        <v-divider :thickness="2" class="mx-3 mb-2"></v-divider>
                        <v-col cols="12" class="mb-2">
                            <p style="font-weight: 500; font-size: 18px;" class="d-flex align-center"><v-icon
                                    icon="mdi-shield-account" class="mr-2"></v-icon>
                                ข้อมูลผู้ดูแลระบบ </p>
                        </v-col>
                        <v-col cols="12" class="py-0">
                            <p style="font-weight: 500;" class="pb-2">ชื่อผู้ดูแลระบบ</p>
                            <v-text-field density="compact" variant="outlined" placeholder="ระบุชื่อผู้ดูแลระบบ..."
                                prepend-inner-icon="mdi-account-cog-outline"></v-text-field>
                        </v-col>
                        <v-col cols="12" class="py-0">
                            <p style="font-weight: 500;" class="pb-2">ชื่อผู้ใช้งาน (Username)</p>
                            <v-text-field density="compact" variant="outlined" placeholder="ระบุชื่อผู้ใช้งาน..."
                                prepend-inner-icon="mdi-account-outline"></v-text-field>
                        </v-col>
                        <v-col cols="12" class="py-0">
                            <p style="font-weight: 500;" class="pb-2">รหัสผ่าน (Password)</p>
                            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                :type="visible ? 'text' : 'password'" density="compact" variant="outlined"
                                placeholder="ระบุรหัสผ่าน..." prepend-inner-icon="mdi-lock-outline"
                                @click:append-inner="visible = !visible"
                                :rules="[v => !!v || 'Password is required']"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-divider :thickness="2" class="mt-4"></v-divider>
                    <v-card-actions class="justify-end py-4 px-0">
                        <v-btn variant="text" color="red lighten-1" @click="dialog = false" rounded="xl"
                            width="100">ยกเลิก</v-btn>
                        <v-btn rounded="xl" append-icon="mdi-arrow-right" type="submit" color="green-lighten-1"
                            variant="flat" width="120">ยืนยัน</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </v-btn>
</template>

<script>
export default {
    data: () => ({
        visible: false,
        dialog: false,
    }),
    methods: {
        async submit(event) {

        },
    },
}
</script>

<style scoped></style>