<template>
    <div id="search">
        <b-row>
            <b-col xl="12" cols="12">
                <b-card
                        header="جستجوی اتاق ها"
                        header-text-variant="white"
                        header-tag="header"
                        header-bg-variant="dark"
                        class="line-lg">
                    <el-row :gutter="10">
                        <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
                            <el-autocomplete
                                    v-model="state4"
                                    :fetch-suggestions="querySearchAsync"
                                    placeholder="هتل مورد نظر را انتخاب کنید."
                                    @select="handleSelect">
                            </el-autocomplete>
                        </el-col>
                        <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
                            <el-moment format="MMMM Do YYYY, h:mm:ss a">
                                <el-date-picker
                                        v-model="value7"
                                        type="daterange"
                                        range-separator="تا"
                                        start-placeholder="تاریخ شروع"
                                        end-placeholder="تاریخ پایان"
                                        value-format="timestamp">
                                </el-date-picker>
                            </el-moment>
                            <!--<date-picker></date-picker>-->

                        </el-col>
                        <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">
                            <el-button style="width: 100%" type="info">جستجو</el-button>
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
                links: [],
                state4: '',
                timeout: null,
                value7: '',
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: []
                },
                foods: [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            }
        },
        methods: {
            loadAll() {
                return [
                    {"value": "vue", "link": "https://github.com/vuejs/vue"},
                    {"value": "element", "link": "https://github.com/ElemeFE/element"},
                    {"value": "cooking", "link": "https://github.com/ElemeFE/cooking"},
                    {"value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui"},
                    {"value": "vuex", "link": "https://github.com/vuejs/vuex"},
                    {"value": "vue-router", "link": "https://github.com/vuejs/vue-router"},
                    {"value": "babel", "link": "https://github.com/babel/babel"}
                ];
            },
            querySearchAsync(queryString, cb) {
                var links = this.links;
                var results = queryString ? links.filter(this.createFilter(queryString)) : links;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 3000 * Math.random());
            },
            createFilter(queryString) {
                return (link) => {
                    return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.links = this.loadAll();
        }
    }
</script>
