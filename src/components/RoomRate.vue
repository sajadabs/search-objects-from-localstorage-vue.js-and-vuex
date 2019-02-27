<template>
    <div id="room-rate">
        <Search></Search>
        <Show></Show>
    </div>
</template>

<script>
    import Search from './Search'
    import Show from './Show'

    export default {
        name: 'roomRate',
        components: {
            Search,
            Show
        },
        data() {
            return {}
        }
    }
</script>
