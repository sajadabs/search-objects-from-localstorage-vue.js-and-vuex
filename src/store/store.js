import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    key: 'roomrate-app',
    storage: localStorage
});

export default new Vuex.Store({
    plugins: [vuexPersist.plugin],
    state: {
        hotels: [
            {id: 1, value: 'هتل قصر'},
            {id: 2, value: 'هتل جواد'},
            {id: 3, value: 'هتل درویشی'},
            {id: 4, value: 'هتل استقلال'},
            {id: 5, value: 'هتل آبان'}
        ],
        roomTypes: [
            {id: 1, name: 'اتاق یک تخته ویژه', capacity: 1},
            {id: 2, name: 'سوئیت یکخوابه دونفره ویژه', capacity: 2},
            {id: 3, name: 'اتاق دو تخته توئین ویژه', capacity: 2},
            {id: 4, name: 'آپارتمان دو خوابه چهارنفره ویژه', capacity: 4}
        ],
        roomRates: [
            {
                propertyId: 3,
                roomTypeId: 2,
                day: 1551731400,
                rachRate: {
                    cost: 127000,
                    extended: 50000,
                    babyCot: 50000
                },
                purchaseRate: {
                    cost: 128000,
                    extended: 60000,
                    babyCot: 60000
                },
                dailyRate: {
                    cost: 129000,
                    extended: 70000,
                    babyCot: 70000
                },
                closed: false,
                inventory: 20
            },
            {
                propertyId: 3,
                roomTypeId: 1,
                day: 1551731400,
                rachRate: {
                    cost: 127000,
                    extended: 50000,
                    babyCot: 50000
                },
                purchaseRate: {
                    cost: 128000,
                    extended: 60000,
                    babyCot: 60000
                },
                dailyRate: {
                    cost: 129000,
                    extended: 70000,
                    babyCot: 70000
                },
                closed: true,
                inventory: 20
            },
        ],
    },
    mutations: {},
    actions: {},
    getters: {
        hotels: state => state.hotels,
        roomTypes: state => state.roomTypes,
        roomRates: state => state.roomRates,
    },
})