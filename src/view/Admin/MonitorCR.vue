<template>
    <div class="pa-3">
        <div>
            <v-card variant="flat" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 29px 0px;">
                <v-toolbar density="compact" color="white"
                    style="border-top-left-radius: 4px;border-top-right-radius: 4px;">
                    <h2 class="ml-5 d-flex align-center justify-start" style="color: #FE8329;">
                        <v-icon icon="mdi-calendar-check" size="small" class="mr-2" style="color: #FE8329;"></v-icon>
                        ลงทะเบียนเข้า - ออก
                    </h2>
                    <v-spacer></v-spacer>
                    <p style="color: black;font-weight: 600;font-size: 25px;"
                        class="d-flex align-center justify-center pr-5">
                        <v-icon icon="mdi-clock" size="small" class="mr-2" color="primary"></v-icon>
                        {{ currentTime }}
                    </p>
                </v-toolbar>
                <v-row class="justify-space-between pa-3">
                    <v-col cols="4" v-for="stu in studentData" :key="stu._id">
                        <v-row class="pb-2">
                            <v-col>
                                <img :src="stu.img_name || '/profile_mockup.jpg'" alt="img" class="ImgBorder">
                            </v-col>
                            <v-col>
                                <img :src="stu.img_snap ? baseUrl + stu.img_snap : '/profile_mockup.jpg'" alt="Img"
                                    class="ImgBorder">
                            </v-col>
                        </v-row>
                        <v-card variant="flat" class="card-second-shadow">
                            <h3 class="text-center" style="background-color: #FE8329;color: white;">ข้อมูลนักเรียน
                            </h3>
                            <div class="pa-3">
                                <v-row class="align-center row-border">
                                    <v-col cols="3" class="text-center pa-0">
                                        <v-icon style="color: #005BB9; font-size: 35px;"
                                            icon="mdi-card-account-details" />
                                    </v-col>
                                    <v-col cols="9">
                                        <p class="FontDetail text-center">{{ stu.p_id || '-' }}</p>
                                    </v-col>
                                </v-row>
                                <v-row class="align-center row-border">
                                    <v-col cols="3" class="text-center pa-0">
                                        <v-icon style="color: #005BB9; font-size: 35px;" icon="mdi-account" />
                                    </v-col>
                                    <v-col cols="9">
                                        <p class="text-center FontDetail">{{ cutPrefixName(stu.name) || '-' }}</p>
                                    </v-col>
                                </v-row>
                                <v-row class="align-center">
                                    <v-col cols="3" class="text-center pa-0">
                                        <v-icon style="color: #43A047;font-size: 35px;" icon="mdi-clock-check" />
                                    </v-col>
                                    <v-col cols="9">
                                        <p class="text-center FontDetail">{{ extractTime(stu.time) || '-' }}</p>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </div>

        <div class="mt-2">
            <v-card variant="flat" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 29px 0px;">
                <v-toolbar density="compact" color="white"
                    style="border-top-left-radius: 4px;border-top-right-radius: 4px;">
                    <h3 class="ml-5 d-flex align-center justify-start" style="color: #FE8329;">
                        <v-icon icon="mdi-account" size="small" class="mr-2" style="color: #FE8329;"></v-icon>
                        รายชื่อนักเรียน
                    </h3>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-row class="text-center pa-3">
                    <v-col v-for="student in data" :key="student._id">
                        <img :src="student.img_name || '/profile_mockup.jpg'" alt="img" class="Imglist">
                        <p class="d-flex align-center justify-center FontSub">
                            <v-icon style="color: #005BB9; " icon="mdi-card-account-details" class="mr-3" />
                            {{ student.p_id }}
                        </p>
                        <p class="d-flex align-center justify-center FontSub">
                            <v-icon style="color: #43A047;" icon="mdi-clock-check" class="mr-3" />
                            {{ extractTime(student.time) }}
                        </p>
                    </v-col>
                </v-row>
            </v-card>
        </div>
    </div>
</template>

<script>
import { formatitemdevice, dateTimeFormatValue } from '../../function/day';
import moment from "moment-timezone"
export default {
    setup() {
        const baseUrl = import.meta.env.VITE_APP_BASE_URL;
        return {
            formatitemdevice,
            dateTimeFormatValue,
            baseUrl,
        };
    },
    data: () => ({
        studentData: [
            {
                Img: '/profile_mockup.jpg',
                p_id: "",
                name: "",
                time: ""
            },
            {
                Img: '/profile_mockup.jpg',
                p_id: "",
                name: "",
                time: ""
            },
            {
                Img: '/profile_mockup.jpg',
                p_id: "",
                name: "",
                time: ""
            },
        ],
        currentTime: moment().tz('Asia/Bangkok').format('DD/MM/YYYY HH:mm:ss'),
        deviceInfo: {
            serialNumber: '',
            location: '',
            name: '',
        },
        data: [
            {
                Img: '/profile_mockup.jpg',
                Id: "",
                name: "",
                timeST: ""
            },
            {
                Img: '/profile_mockup.jpg',
                Id: "",
                name: "",
                timeST: ""
            },
            {
                Img: '/profile_mockup.jpg',
                Id: "",
                name: "",
                timeST: ""
            },
            {
                Img: '/profile_mockup.jpg',
                Id: "",
                name: "",
                timeST: ""
            },
            {
                Img: '/profile_mockup.jpg',
                Id: "",
                name: "",
                timeST: ""
            },
            {
                Img: '/profile_mockup.jpg',
                Id: "",
                name: "",
                timeST: ""
            },
            {
                Img: '/profile_mockup.jpg',
                Id: "",
                name: "",
                timeST: ""
            },
            {
                Img: '/profile_mockup.jpg',
                Id: "",
                name: "",
                timeST: ""
            },
            {
                Img: '/profile_mockup.jpg',
                Id: "",
                name: "",
                timeST: ""
            },
            {
                Img: '/profile_mockup.jpg',
                Id: "",
                name: "",
                timeST: ""
            },
        ],
        serverTime: '',
        headers: [
            { title: 'ลำดับ', align: 'center', sortable: false, key: 'index' },
            { title: 'รูปภาพ', align: 'center', sortable: false, key: 'data.snapPicture' },
            { title: 'ชื่อ-นามสกุล', align: 'center', sortable: false, key: 'data.name' },
            { title: 'ระดับชั้น', align: 'center', sortable: false, key: 'data.position' },
            { title: 'เวลา', align: 'center', sortable: false, key: 'data.timestamp' },

        ],
        studentCounter: 0,
        FirstName: '',
        LastName: '',
        socket: null,
        socketReconnectTimeout: null, // <- เพิ่มตัวนี้เพื่อใช้ clearTimeout
        isComponentAlive: true, // <- flag นี้ไว้เช็กว่า component ยังอยู่ไหม
        lastClearedHour: null,
        clearInterval: null
    }),
    created() {
        setInterval(() => {
            this.currentTime = moment().tz('Asia/Bangkok').format('DD/MM/YYYY HH:mm:ss');
        }, 1000);
    },
    mounted() {
        this.deviceInfo.serialNumber = this.$route.query.serial;
        this.deviceInfo.location = this.$route.query.location;
        this.deviceInfo.name = this.$route.query.name;

        this.connectWebSocket();
        this.setupDataClearTimer();

        window.addEventListener('beforeunload', this.disconnectWebSocket);
    },
    beforeUnmount() {
        this.isComponentAlive = false;

        if (this.socket) {
            this.socket.close();
        }

        if (this.socketReconnectTimeout) {
            clearTimeout(this.socketReconnectTimeout);
            this.socketReconnectTimeout = null;
        }

        console.log("Component destroyed, WS disconnected.");

        if (this.clearInterval) {
            clearInterval(this.clearInterval);
            this.clearInterval = null;
        }
    },
    methods: {
        disconnectWebSocket() {
            if (this.socket && this.socket.readyState === WebSocket.OPEN) {
                this.socket.close(1000, 'User navigated away');
                console.log('WebSocket disconnected on page leave.');
            }
        },
        getSocketUrl() {
            const isDevLocalhost = window.location.hostname === 'localhost' && window.location.port === '5173';

            if (isDevLocalhost) {
                // ใช้ค่าจาก .env ตอน dev
                return import.meta.env.VITE_APP_SOCKET_URL;
            } else {
                // ใช้ hostname จริง แต่ path และ port เดิม
                const protocol = 'ws'; // หรือใช้ wss ถ้าระบบใช้ https
                const hostname = window.location.hostname;
                return `${protocol}://${hostname}:3050/socket`;
            }
        },
        connectWebSocket() {
            const socketUrl = this.getSocketUrl();
            this.socket = new WebSocket(socketUrl);

            this.socket.onopen = () => {
                console.log('Connected !')
            };

            this.socket.onmessage = (event) => {
                const socketData = JSON.parse(event.data);

                if (socketData.sn === this.deviceInfo.serialNumber) {
                    if (socketData.p_id !== 'STRANGERBABY') {
                        if (this.studentData.length === 3) {
                            const removed = this.studentData.pop();
                            this.data.unshift(removed); // เพิ่มที่หน้าสุด

                            // จำกัดให้ data เก็บได้ไม่เกิน 10
                            if (this.data.length > 10) {
                                this.data.pop();
                            }
                        }

                        // ใส่ข้อมูลใหม่เข้า studentData
                        this.studentData.unshift(socketData);

                        console.log('📌 studentData (ล่าสุด 3):', this.studentData);
                        console.log('📦 data (ของเก่า ไม่เกิน 10):', this.data);
                    } else {
                        console.log('Stranger : ', socketData)
                    }
                }
            };

            this.socket.onerror = (error) => {
                console.log('WebSocket Error', error)
            };

            this.socket.onclose = () => {
                console.log('Connection Closed!');
                // เช็กก่อน reconnect
                if (this.isComponentAlive) {
                    console.log('Attempting to reconnect in 3 seconds...');
                    this.socketReconnectTimeout = setTimeout(() => {
                        this.connectWebSocket();
                    }, 3000);
                }
            }
        },
        setupDataClearTimer() {
            this.clearInterval = setInterval(() => {
                const now = new Date();
                const hour = now.getHours();
                const minute = now.getMinutes();

                console.log(`Checking time: ${hour}:${minute < 10 ? '0' + minute : minute}`);

                const isClearTime = (hour === 9 || hour === 19) && minute === 0;

                if (isClearTime && this.lastClearedHour !== hour) {
                    console.log(`🧹 Clearing data at ${hour}:00`);
                    this.data = [];
                    this.studentData.picture = null;
                    this.studentData.snapPicture = null;
                    this.lastClearedHour = hour;
                }

                if (minute > 0 && this.lastClearedHour === hour) {
                    this.lastClearedHour = null;
                }
            }, 60000); // ทำงานทุก 1 นาที
        },
        // beforeDestroy() {
        //     if (this.socket) {
        //         this.socket.close();
        //     }
        // },
        extractTime(dateTimeString) {
            if (!dateTimeString) return null;

            const date = new Date(dateTimeString);

            // ตรวจสอบว่า date ถูกต้องหรือไม่
            if (isNaN(date.getTime())) return null;

            const hour = date.getHours().toString().padStart(2, '0');
            const minute = date.getMinutes().toString().padStart(2, '0');
            return `${hour}:${minute}`;
        },
        cutPrefixName(name) {
            if (name) {
                return name.replace(/^(เด็กชาย|เด็กหญิง|นาย|นางสาว)/, '').trim();
            }
        },
        cutName(name) {
            if (name) {
                // ตัดคำนำหน้า
                const newName = name.replace(/^(เด็กชาย|เด็กหญิง|นาย|นางสาว)/, '').trim();

                // แยกชื่อ-นามสกุล
                const [firstName, ...lastName] = newName.split(' ');

                // เก็บค่าลงตัวแปร
                this.FirstName = firstName || '';
                this.LastName = lastName.join(' ') || '';
            } else {
                this.FirstName = '';
                this.LastName = '';
            }
        },
        cutNameParts(name) {
            if (!name) return { first: '', last: '' };

            const trimmed = name.replace(/^(เด็กชาย|เด็กหญิง|นาย|นางสาว)/, '').trim();
            const [first, ...last] = trimmed.split(' ');

            return {
                first: first || '',
                last: last.join(' ') || ''
            };
        }
    },
}
</script>

<style scoped>
.ImgBorder {
    /* padding: 10px; */
    border-radius: 5px;
    width: 100%;
    height: 300px;
}

.Imglist {
    border-radius: 5px;
    width: 120px;
    height: 130px;
    margin-bottom: 5px;
}

.FontDetail {
    font-size: 22px;
    font-weight: 600;
}

.FontSub {
    font-size: 20px;
    font-weight: 500;
}

.FontHeader {
    font-size: 19px;
    font-weight: bold;
    text-align: center;
}

.overflow-y-auto {
    overflow-y: auto;
}

.card-second-shadow {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 24px;
}

.row-border {
    border-bottom: 1px solid #E0E0E0;
}
</style>