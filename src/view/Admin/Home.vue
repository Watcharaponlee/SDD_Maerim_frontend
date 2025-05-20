<template>
    <div style="height: 80vh; align-content: center;" class="text-center pa-5">
        <div class="pb-3" style="justify-items: center;">
            <v-toolbar color="#FE8329" style="width: 90%;border-radius: 5px;">
                <v-toolbar-title>
                    <h1 style="color:white;" class="d-flex align-center justify-center">
                        จัดการมอนิเตอร์
                        <v-icon icon="mdi-monitor" size="small" class="ml-3" color="#FFF200"></v-icon>
                    </h1>
                </v-toolbar-title>
            </v-toolbar>
        </div>
        <div>
            <v-row class=" justify-center">
                <v-col cols="12" class="d-flex justify-center pt-2">
                    <v-card class="pa-5" width="90%">
                        <v-row class="justify-center">
                            <v-col cols="12" sm="6" v-for="(device, index) in DeviceData" :key="device._id">
                                <v-card color="#66BB6A" class="pa-5 text-start" :style="{
                                    backgroundImage: 'url(' + getImage(index) + ')',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }">
                                    <div
                                        style="position: absolute; inset: 0; background-color: rgba(0,0,0,0.4); backdrop-filter: blur(2px);">
                                    </div>
                                    <div style="position: relative; z-index: 1;">
                                        <h1 class="d-flex align-center">
                                            <v-icon color="white" icon="mdi-cctv" size="small" class="mr-2"></v-icon>
                                            {{ device.devinfo.deviceName }}
                                        </h1>
                                    </div>
                                    <div style="position: relative; z-index: 1;">
                                        <p class="fontDetail"><span style="font-weight: 600;">สถานที่ :</span> {{
                                            device.location }}</p>
                                        <p class="fontDetail"><span style="font-weight: 600;">Serial Number : </span> {{
                                            device.serial_number }}</p>
                                        <p class="fontDetail"><span style="font-weight: 600;">IP Address : </span>{{
                                            device.devinfo.ipAddress }}</p>
                                        <v-card-actions class="justify-end">
                                            <v-btn append-icon="mdi-arrow-right" width="90px" variant="tonal"
                                                @click="goToMonitor(device.serial_number, device.location, device.devinfo.deviceName)">
                                                เลือก
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import { DeviceService } from "../../api/device";
export default {
    setup() {
        const device = new DeviceService();
        return {
            device
        }
    },
    data: () => ({
        DeviceData: [],
    }),
    mounted() {
        this.getDevice();
    },
    methods: {
        async getDevice() {
            await this.device.getDevice(this.$store.state.siteId).then(res => {
                if (res.message === 'Successfully!') {
                    this.DeviceData = res.data
                    console.log(this.DeviceData)
                }
            })
        },
        getImage(index) {
            const images = [
                '/cctv_image_1.png',
                '/cctv_image_2.png',
                '/cctv_image_3.png',
                '/cctv_image_4.png'
            ];
            return images[index % images.length]; // ใช้ % เพื่อหมุนภาพถ้าจำนวน DeviceData เกิน 4
        },
        goToMonitor(serialNumber, location, name) {
            this.$router.push({
                path: '/monitor',
                query: {
                    serial: serialNumber,
                    location: location,
                    name: name
                }
            });
        },
    }
}
</script>

<style scoped>
.fontDetail {
    font-size: 20px;
}
</style>