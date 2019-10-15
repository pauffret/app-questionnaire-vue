<template>
    <div class="questionnaire">
        <h1>EEV SAS</h1><br>
        <h3>Bienvenue {{prenom}} {{nom}} de {{societe}}</h3><br>
        <question></question>
    </div>
</template>

<script>

    import Question from "../components/Question";

    export default {
        name: "Questionnaire",
        components: {
            Question
        },
        data() {
            return {
                nom: this.$route.query.nom,
                prenom: this.$route.query.prenom,
                societe: this.$route.query.societe
            }
        }
    }
</script>

<style scoped>

</style>