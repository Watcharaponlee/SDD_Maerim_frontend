<template>
    <div>
        <v-container fluid class="d-flex pt-2 pb-0">
            <!-- //NOTE - Student Details -->
            <v-sheet width="65%" height="100%">
                <v-card width="100%">
                    <v-toolbar density="compact" color="#FE8329"
                        style="border-top-left-radius: 4px;border-top-right-radius: 4px;">

                        <h2 class="ml-5 d-flex align-center justify-start">
                            <v-icon icon="mdi-calendar-check" size="small" class="mr-2"
                                style="color: #FFF200;"></v-icon>
                            ลงทะเบียนเข้า - ออก
                        </h2>
                        <v-spacer></v-spacer>

                        <h2 class="text-white mr-5">
                            {{ this.deviceInfo.location }}
                        </h2>
                    </v-toolbar>
                    <v-row class="text-center pa-5 d-flex align-center justify-center">
                        <v-col cols="5" class="pr-5" style="justify-items: end;">
                            <div>
                                <img class="ImgBorder" :src="this.studentData.picture || '/profile_mockup.jpg'"
                                    alt="blank" width="250px" height="350px">
                            </div>
                        </v-col>
                        <v-col cols="1" class="d-flex align-center justify-center">
                            <div>
                                <v-icon icon="mdi-check-circle" color="green" style="font-size: 80px;"></v-icon>
                            </div>
                        </v-col>
                        <v-col cols="5" class="pl-5" style="justify-items: start;">
                            <div>
                                <img class="ImgBorder" :src="this.studentData.snapPicture || '/profile_mockup.jpg'"
                                    alt="blank" width="250px" height="350px">
                            </div>
                        </v-col>
                        <v-col cols="12" class="text-center">

                            <!-- <v-toolbar density="compact" color="#005BB9">
                                    <v-toolbar-title>
                                        <h3 class="d-flex align-center justify-center">
                                            <v-icon style="color: #FFF200;" class="mr-2"
                                                icon="mdi-card-account-details-outline" size="small"></v-icon>
                                            ข้อมูลนักเรียน
                                        </h3>
                                    </v-toolbar-title>
                                </v-toolbar> -->

                            <v-row class="text-center pa-3 pt-0" style="color: black;">
                                <v-col cols="3" class="py-0">
                                    <h1 style="font-size: 2.4rem;">
                                        <v-icon style="color: #005BB9;" icon="mdi-card-account-details"
                                            size="small"></v-icon><br>
                                        {{ studentData.id }}
                                    </h1>
                                </v-col>
                                <v-col cols="6" class="py-0">
                                    <h1 style="font-size: 2.4rem;">
                                        <v-icon style="color: #005BB9;" icon="mdi-account" size="small"></v-icon><br>
                                        {{ cutPrefixName(studentData.name) }}
                                    </h1>
                                </v-col>

                                <!-- <v-col cols="6" class="py-0">
                                    <h1 style="font-size: 2.3rem;">
                                        <v-icon style="color: #546E7A;" icon="mdi-school" size="small"
                                            class="mr-3"></v-icon><br>
                                        {{ studentData.position }}
                                    </h1>
                                </v-col> -->

                                <v-col cols="3" class="py-0">
                                    <h1 style="font-size: 2.4rem;">
                                        <v-icon style="color: #43A047;" icon="mdi-clock-check"
                                            size="small"></v-icon><br>
                                        {{ extractTime(studentData.timeStamp) }}
                                    </h1>
                                </v-col>
                            </v-row>
                            <v-col class="px-0 py-2">
                                <v-divider :thickness="2"></v-divider>
                            </v-col>
                            <v-row class="mt-2 d-flex align-center justify-space-between">

                                <!-- <v-col style="border-radius: 4px;background-color: #546E7A;" cols="5"
                                    class="pa-1 mr-0 d-flex align-center justify-start">
                                    <div class="d-flex align-center justify-center">
                                        <img src="/SDD.png" alt="img" width="150px">
                                    </div>
                                </v-col> -->

                                <v-col cols="12" class="d-flex align-center justify-end pa-0">
                                    <v-card variant="flat" width="100%" style="background-color: #FE8329;">
                                        <h1 style="font-size: 4.2rem;color: white;"
                                            class="d-flex align-center justify-center py-0">
                                            <v-icon icon="mdi-clock" size="small" class="mr-2"
                                                style="color: #FFF200;"></v-icon>
                                            {{ currentTime }}
                                        </h1>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-sheet>

            <!-- //NOTE - Students List -->
            <v-sheet width="35%" height="100%" class="ml-5">
                <v-card width="100%" color="#FE8329">
                    <!-- <v-toolbar color="#005BB9">
                        <v-toolbar-title>
                            <h2 class="d-flex align-center justify-start">
                                <v-icon icon="mdi-account-group" size="small" class="mr-2"
                                    style="color: #FFF200;"></v-icon>
                                รายการนักเรียน
                            </h2>
                        </v-toolbar-title>
                    </v-toolbar> -->

                    <div class="pa-1">
                        <v-list class="text-center py-0" style="background-color: #FFFFFF00;">
                            <v-list-item v-for="(student, index) in data" :key="index" class="px-1">
                                <v-card class="pa-5 pb-3" variant="flat" color="white">
                                    <v-row class="d-flex justify-start align-center">
                                        <v-col cols="3" class="pa-0 text-end">
                                            <img class="ImgBorder"
                                                :src="student.picture || '/Chakkam_Khanathon_School_logo.png'" alt="Img"
                                                width="100px" height="114px">
                                        </v-col>
                                        <v-col cols="4" class="pa-0">
                                            <img class="ImgBorder"
                                                :src="student.snapPicture || '/Chakkam_Khanathon_School_logo.png'"
                                                alt="img" width="100px" height="114px">
                                        </v-col>
                                        <v-col cols="5" class="text-start pa-0">
                                            <h3>
                                                <v-icon style="color: #005BB9;" icon="mdi-card-account-details"
                                                    size="small" class="mr-3"></v-icon>
                                                {{ student.id }}
                                            </h3>
                                            <h3>
                                                <v-row class="align-center">
                                                    <!-- icon -->
                                                    <v-col cols="auto">
                                                        <v-icon style="color: #005BB9;" icon="mdi-account"
                                                            size="small"></v-icon>
                                                    </v-col>

                                                    <!-- ชื่อ + นามสกุล -->
                                                    <v-col class="pl-1">
                                                        <div class="d-flex flex-column">
                                                            <template v-if="cutNameParts(student.name)">
                                                                <span>{{ cutNameParts(student.name).first }}</span>
                                                                <span>{{ cutNameParts(student.name).last }}</span>
                                                            </template>
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                            </h3>
                                            <h3>
                                                <v-icon style="color: #43A047;" icon="mdi-clock-check" size="small"
                                                    class="mr-3"></v-icon>
                                                {{ extractTime(student.timeStamp) }}
                                            </h3>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-list-item>
                        </v-list>
                    </div>

                    <!-- <v-card variant="flat">
                        <v-data-table hide-default-footer fixed-header :items="data" item-value="_id"
                            :headers="headers">
                            <template v-slot:headers="column">
                                <tr class="FontHeader">
                                    <th class="text-center" v-for="hd in column.headers[0]" :key="hd.title">
                                        {{ hd.title }}
                                    </th>
                                </tr>
                            </template>
<template v-slot:item="row">
                                <tr class="text-center">
                                    <td class="FontDetail">
                                        {{ row.item.counter }}
                                    </td>
                                    <td class="pt-2 pb-0" style="align-items: center;">
                                        <img :src="row.item.snapPicture || '/Chakkam_Khanathon_School_logo.png'"
                                            alt="Blank" width="100px" height="100px">
                                    </td>
                                    <td>
                                        <p class="FontDetail">{{ row.item.name }}</p>
                                    </td>
                                    <td>
                                        <p class="FontDetail">{{ row.item.position }}</p>
                                    </td>
                                    <td>
                                        <p class="FontDetail">{{ extractTime(row.item.timeStamp) }}</p>
                                    </td>
                                </tr>
                            </template>
<template v-slot:no-data>
                                <v-alert :value="true"
                                    :class="$store.state.checkMode ? 'bg-grey-darken-3' : 'bg-white'">
                                    ไม่มีข้อมูล
                                </v-alert>
                            </template>
</v-data-table>
<v-divider></v-divider>
</v-card>
</v-card> -->
                </v-card>
            </v-sheet>
        </v-container>
    </div>
</template>

<script>
import { formatitemdevice, dateTimeFormatValue } from '../../function/day';
import moment from "moment-timezone"
export default {
    setup() {
        return {
            formatitemdevice,
            dateTimeFormatValue
        };
    },
    data: () => ({
        studentData: [],
        currentTime: moment().tz('Asia/Bangkok').format('DD/MM/YYYY HH:mm:ss'),
        deviceInfo: {
            serialNumber: '',
            location: '',
            name: '',
        },
        data: [],
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
                this.serverTime = socketData.servertime;

                if (socketData.sn === this.deviceInfo.serialNumber) {
                    this.studentData = socketData.data;

                    if (this.data.length >= 5) {
                        this.data.pop();
                    }

                    this.studentCounter++;
                    const newData = {
                        ...socketData.data,
                        counter: this.studentCounter,
                    };
                    this.data.unshift(newData);

                    console.log(this.data);
                } else {
                    console.log(socketData)
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
            if (dateTimeString && dateTimeString.includes(' ')) {
                const time = dateTimeString.split(' ')[1]; // ได้ hh:mm:ss
                const [hour, minute] = time.split(':'); // แยก ชั่วโมง กับ นาที
                return `${hour}:${minute}`; // คืนค่าเฉพาะ ชั่วโมง:นาที
            }
            return null;
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
}

.FontDetail {
    font-size: 19px;
}

.FontHeader {
    font-size: 19px;
    font-weight: bold;
    text-align: center;
}

.overflow-y-auto {
    overflow-y: auto;
}
</style>