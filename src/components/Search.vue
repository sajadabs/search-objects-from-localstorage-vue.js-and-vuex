<template>
    <div id="search">
        <b-row>
            <b-col xl="12" cols="12">
                <b-card
                        header="جستجوی اتاق ها"
                        header-text-variant="white"
                        header-tag="header"
                        header-bg-variant="dark"
                        class="line-lg mt-4">
                    <el-row :gutter="10">
                        <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7">
                            <el-autocomplete
                                    v-model="hotel"
                                    :fetch-suggestions="querySearchAsync"
                                    placeholder="هتل مورد نظر را انتخاب کنید."
                                    @select="selectedId"
                            >
                            </el-autocomplete>
                        </el-col>
                        <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7">
                            <date-picker
                                    label="تاریخ شروع"
                                    :color="'#909399'"
                                    v-model="searchData.startDate"
                                    format="X"
                                    :auto-submit="true"
                                    display-format="dddd jDD jMMMM jYYYY">
                            </date-picker>
                        </el-col>
                        <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7">
                            <date-picker
                                    label="تاریخ پایان"
                                    :color="'#909399'"
                                    v-model="searchData.endDate"
                                    format="X"
                                    :auto-submit="true"
                                    display-format="dddd jDD jMMMM jYYYY">
                            </date-picker>
                        </el-col>
                        <el-col :xs="24" :sm="3" :md="3" :lg="3" :xl="3">
                            <el-button style="width: 100%" type="info" @click="sendData">جستجو</el-button>
                        </el-col>
                    </el-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                searchData: {
                    startDate: null,
                    endDate: null,
                    propertyId: null
                },
                hotel: '',
                hotelsArray: [],
                timeout: null,
            }
        },
        methods: {
            querySearchAsync(queryString, cb) {
                cb(this.hotelsArray);
            },
            selectedId(item) {
                this.searchData.propertyId = item.id;
            },
            sendData() {
                this.$emit('searchData', this.searchData)
            }
        },
        mounted() {
            this.hotelsArray = this.hotels;
        },
        computed: {
            hotels() {
                return this.$store.getters.hotels
            }
        }
    }
</script>
