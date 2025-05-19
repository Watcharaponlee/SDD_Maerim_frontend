<template>
    <v-btn variant="text" icon=""><v-icon color="orange lighten-1">mdi-pencil</v-icon>
        <v-dialog activator="parent" v-model="dialog" transition="dialog-bottom-transition" max-width="500px">
            <v-card style="background-color: #FAFAFA;">
                <v-toolbar title="แก้ไขข้อมูลผู้ดูแล" density="compact" color="#FB8C00"></v-toolbar>
                <v-form fast-fail @submit.prevent="submit" class="pa-5 pb-0">
                    <v-row>
                        <v-col cols="12">
                            <p style="font-weight: 500; font-size: 18px;" class="d-flex align-center">
                                <v-icon class="mr-2" icon="mdi-image-area"></v-icon>รูปภาพ
                            </p>
                        </v-col>
                        <v-col cols="12" class="text-center py-0">
                            <img src="../../assets/Screenshot_3.png" alt="avatar" width="130px">
                        </v-col>
                        <v-col>
                            <v-file-input label="แก้ไขรูปภาพ..." prepend-icon="mdi-camera" variant="outlined"
                                density="compact"></v-file-input>
                        </v-col>
                        <v-divider :thickness="2" class="mx-3 mb-2"></v-divider>
                        <v-col cols="12" class="mb-2">
                            <p style="font-weight: 500; font-size: 18px;" class="d-flex align-center"><v-icon
                                    icon="mdi-shield-account" class="mr-2"></v-icon>ข้อมูลผู้ดูแลระบบ</p>
                        </v-col>
                        <v-col cols="12" class="py-0">
                            <p style="font-weight: 500;" class="pb-2">ชื่อผู้ดูแลระบบ</p>
                            <v-text-field density="compact" variant="outlined" placeholder="ระบุชื่อผู้ดูแลระบบ..."
                                prepend-inner-icon="mdi-account-cog-outline"></v-text-field>
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
        dialog: false,
    }),
    methods: {
        async submit(event) {

        }
    }
}
</script>

<style scoped></style>