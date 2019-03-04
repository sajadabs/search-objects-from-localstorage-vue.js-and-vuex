<template>
    <div id="show">
        <b-row>
            <b-col xl="12" cols="6">
                <b-card-header header-bg-variant="light" header-text-variant="dark" class="pt-2 mt-4">
                    اتاق های تاریخ :
                    {{day.date}}
                </b-card-header>
            </b-col>
            <b-col xl="12" cols="6">
                <b-row class="pt-4">
                    <b-col v-for="(roomRate , index) in roomRates" :key="index"
                           v-if="roomRate.propertyId == propId && roomRate.day == day.timestamp" lg="6" md="6" sm="12">
                        <b-card-header header-bg-variant="dark" header-text-variant="white" class="pt-2">
                            <b-button variant="secondary" size="sm" class="float-right">ویرایش</b-button>
                            <div v-for="(roomType , index) in roomTypes" :key="index"
                                 v-if="roomType.id == roomRate.roomTypeId"> {{roomType.name}}
                            </div>
                        </b-card-header>
                        <b-card-body class="border p-2 line-lg">
                            <b-row>
                                <b-col md="3" sm="12" class="pt-4">
                                    <b-badge variant="light" class="p-1" v-for="(roomType , index) in roomTypes"
                                             :key="index" v-if="roomType.id == roomRate.roomTypeId">تعداد تخت :
                                        {{roomType.capacity}}
                                    </b-badge>
                                    <b-badge variant="light" class="p-1">موجودی : {{roomRate.inventory}}</b-badge>
                                    <b-badge v-if="!roomRate.closed" variant="success" class="p-1">وضعیت : باز</b-badge>
                                    <b-badge v-if="roomRate.closed" variant="danger" class="p-1">وضعیت : بسته</b-badge>
                                </b-col>
                                <b-col md="9" sm="12">
                                    <b-row>
                                        <b-col cols="12">
                                            <b-row>
                                                <b-col cols="3"></b-col>
                                                <b-col cols="3"></b-col>
                                                <b-col cols="3">
                                                    <b-badge variant="light">تخت اضافه</b-badge>
                                                </b-col>
                                                <b-col cols="3">
                                                    <b-badge variant="light">تخت کودک</b-badge>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12">
                                            <b-row>
                                                <b-col cols="3">
                                                    <b-badge variant="light">قیمت برد</b-badge>
                                                </b-col>
                                                <b-col cols="3">
                                                    <b-badge>{{roomRate.rachRate.cost}}</b-badge>
                                                </b-col>
                                                <b-col cols="3">
                                                    <b-badge>{{roomRate.rachRate.extended}}</b-badge>
                                                </b-col>
                                                <b-col cols="3">
                                                    <b-badge>{{roomRate.rachRate.babyCot}}</b-badge>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12">
                                            <b-row>
                                                <b-col cols="3">
                                                    <b-badge variant="light">قیمت خرید</b-badge>
                                                </b-col>
                                                <b-col cols="3">
                                                    <b-badge>{{roomRate.purchaseRate.cost}}</b-badge>
                                                </b-col>
                                                <b-col cols="3">
                                                    <b-badge>{{roomRate.purchaseRate.extended}}</b-badge>
                                                </b-col>
                                                <b-col cols="3">
                                                    <b-badge>{{roomRate.purchaseRate.babyCot}}</b-badge>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12">
                                            <b-row>
                                                <b-col cols="3">
                                                    <b-badge variant="light">قیمت روز</b-badge>
                                                </b-col>
                                                <b-col cols="3">
                                                    <b-badge>{{roomRate.dailyRate.cost}}</b-badge>
                                                </b-col>
                                                <b-col cols="3">
                                                    <b-badge>{{roomRate.dailyRate.extended}}</b-badge>
                                                </b-col>
                                                <b-col cols="3">
                                                    <b-badge>{{roomRate.dailyRate.babyCot}}</b-badge>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Show',
        props: [
            'propId', 'day'
        ],
        data() {
            return {}
        },
        methods: {},
        computed: {
            roomTypes() {
                return this.$store.getters.roomTypes
            },
            roomRates() {
                return this.$store.getters.roomRates
            }
        }
    }
</script>
