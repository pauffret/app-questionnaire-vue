
<template>
    <div class="question">
        <b-form-group label="Using options array:">
            <b-form-checkbox-group
                    id="checkbox-group-1"
                    v-model="selected"
                    :options="options"
                    name="flavour-1"
            ></b-form-checkbox-group>
        </b-form-group>
    </div>
</template>

<script>
    export default {
        name: "Question",
        data() {
            return {
                selected: [], // Must be an array reference!
                options: [
                    { text: 'Orange', value: 'orange' },
                    { text: 'Apple', value: 'apple' },
                    { text: 'Pineapple', value: 'pineapple' },
                    { text: 'Grape', value: 'grape' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>