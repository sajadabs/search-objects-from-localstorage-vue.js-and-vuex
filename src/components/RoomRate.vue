<template>
    <div id="room-rate">
        <Search @searchData="search($event)"></Search>
        <Show :propId="propertyId" :day="day" v-for="(day , index) in days" :key="index"></Show>
    </div>
</template>

<script>
    import Search from './Search'
    import Show from './Show'
    import moment from "moment-jalaali";

    export default {
        name: 'roomRate',
        components: {
            Search,
            Show
        },
        data() {
            return {
                propertyId: null,
                date: {},
                days: [],
            }
        },
        methods: {
            search(searchData) {
                this.date.start = parseInt(searchData.startDate);
                this.date.end = parseInt(searchData.endDate);
                this.propertyId = searchData.propertyId;
                this.days = [];
                var date = this.date.start;
                while (date <= this.date.end) {
                    this.days.push(moment.unix(date).format("jYYYY/jMM/jDD"));
                    date = date + 86400;
                }
            }
        },
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
