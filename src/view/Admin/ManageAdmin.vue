<template>
    <div class="pa-5 pt-0">
        <div>
            <v-breadcrumbs :items="item">
                <template v-slot:divider>
                    <v-icon icon="mdi-chevron-right"></v-icon>
                </template>
            </v-breadcrumbs>
        </div>
        <div>
            <v-toolbar color="#FFFFFF00">
                <v-toolbar-title>
                    <p style="font-size: 22px; font-weight: bold;">จัดการผู้ดูแลระบบ</p>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <Create @submit="getData()" />
            </v-toolbar>
        </div>
        <div>
            <v-sheet class="pa-5" style="background-color: #F3F3F3;border-radius: 10px;">
                <div class="pb-5">
                    <h3><v-icon icon="mdi-filter" size="small" class="mr-2" />ตัวกรองข้อมูล</h3>
                </div>
                <div class="pb-5">
                    <v-row>
                        <v-col cols="12" sm="4">
                            <p class="pb-2" style="font-weight: 500;">ชื่อผู้ดูแล</p>
                            <v-text-field density="compact" variant="outlined" hide-details
                                style="background-color: #FAFAFA;" placeholder="ระบุชื่อผู้ดูแล..."></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <p class="pb-2" style="font-weight: 500;">ชื่อผู้ใช้งาน (Username)</p>
                            <v-text-field density="compact" variant="outlined" hide-details
                                style="background-color: #FAFAFA;" placeholder="ระบุชื่อผู้ใช้งาน..."></v-text-field>
                        </v-col>
                        <v-col cols="4" class="d-flex align-end">
                            <v-btn class="mr-2" color="#42A5F5"><v-icon icon="mdi-magnify"
                                    class="mr-2"></v-icon>ค้นหา</v-btn>
                            <v-btn icon="" size="small" color="#BDBDBD" variant="flat"><v-icon icon="mdi-refresh"
                                    color="white"></v-icon></v-btn>
                        </v-col>
                    </v-row>
                </div>
                <v-divider :thickness="2" class="mb-5"></v-divider>
                <div class="pb-5">
                    <h3><v-icon icon="mdi-table" size="small" class="mr-2" />ตารางแสดงผู้ดูแลระบบ</h3>
                </div>
                <v-card variant="flat" style="border-radius: 10px;">
                    <v-data-table fixed-header :headers="headers" :page="page" :items-per-page="itemsPerPage"
                        hide-default-footer :items="data" class="elevation-1 no-border-table" :search="search"
                        item-value="_id">
                        <template v-slot:headers="column">
                            <tr>
                                <th class="text-center" v-for="hd in column.headers[0]" :key="hd.title">
                                    {{ hd.title }}
                                </th>
                            </tr>
                        </template>
                        <template v-slot:item="row">
                            <tr>
                                <td class="text-center">
                                    {{ row.index + 1 }}
                                </td>
                                <td class="text-center py-2">
                                    <img src="../../assets/Screenshot_3.png" alt="img" width="80px">
                                </td>
                                <td class="text-center">
                                    {{ row.item.displayName }}
                                </td>
                                <td class="text-center">
                                    {{ row.item.username }}
                                </td>
                                <td class="text-center" style="width: 150px;">
                                    <Edit @submit="getData()" />
                                    <v-btn icon="mdi-delete" variant="text"  color="red"
                                        @click="Delete(row.item._id)"></v-btn>
                                </td>
                            </tr>
                        </template>
                        <template v-slot:bottom>
                            <div class="text-center pt-2">
                                <v-pagination v-model="page" :length="pageCount"></v-pagination>
                            </div>
                        </template>
                    </v-data-table>
                </v-card>
            </v-sheet>
        </div>
    </div>
</template>

<script>
import Create from '../../components/Admin/Create.vue';
import Edit from '../../components/Admin/Edit.vue';
export default {
    components: {
        Create,
        Edit
    },
    computed: {
        pageCount() {
            return Math.ceil(this.data.length / this.itemsPerPage)
        }
    },
    data: () => ({
        item: [
            {
                title: 'หน้าหลัก',
                disabled: false,
                href: '/home'
            },
            {
                title: 'จัดการผู้ดูแลระบบ',
                disabled: true
            }
        ],
        page: 1,
        itemsPerPage: 15,
        search: '',
        headers: [
            { title: 'ลำดับ', align: 'center', sortable: false, key: 'index' },
            { title: 'รูปภาพ', align: 'center', sortable: false, key: 'image' },
            { title: 'ชื่อผู้ดูแล', align: 'center', sortable: false, key: 'displayName' },
            { title: 'ชื่อผู้ใช้งาน (Username)', align: 'center', sortable: false, key: 'username' },
            { title: 'จัดการ', align: 'center', sortable: false, key: 'manage' },
        ],
        data: [
            {
                displayName: 'นาย สมชาย ใจดี',
                username: 'somchai',
            },
            {
                displayName: 'นาง สมหญิง ใจดี',
                username: 'somying',
            }
        ]
    }),
    mounted() {

    },
    methods: {
        async getData() {

        },
        async Delete(id) {
            this.$swal({
                title: 'ยืนยันที่จะลบใช่หรือไม่ ?',
                text: "หาก 'ยืนยัน' จะไม่สามารถใช้งานข้อมูลนี้ได้ในภายหลัง !",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#66BB6A',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ยืนยัน',
                cancelButtonText: 'ยกเลิก'
            }).then(async (res) => {
                if (res.isConfirmed) {
                    this.$swal({
                        title: 'ลบสำเร็จ !',
                        text: 'ข้อมูลได้ถูกลบเรียบร้อยแล้ว',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
    },
}
</script>

<style scoped></style>