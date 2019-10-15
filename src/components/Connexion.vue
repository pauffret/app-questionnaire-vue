<template>
    <div class="formulaireConnexion">
        <h1>EEV SAS</h1><br>
        <h2>Formulaire de connexion</h2><br>
        <span v-if="showError" class="errorMessage">Tous les champs doivent être remplis !</span>
        <b-input-group prepend="Nom" class="mt-3">
            <b-form-input v-model="nom" placeholder="Nom" required></b-form-input>
        </b-input-group>
        <b-input-group prepend="Prénom" class="mt-3">
            <b-form-input v-model="prenom" placeholder="Prénom" required></b-form-input>
        </b-input-group>
        <b-input-group prepend="Société" class="mt-3">
            <b-form-input v-model="societe" placeholder="Société" required></b-form-input>
        </b-input-group>

        <b-button block variant="primary" class="connectButton" @click="connected">Commencer le test</b-button>
    </div>
</template>

<script>
    export default {
        name: "Connexion",
        data() {
            return {
                nom: "",
                prenom: "",
                societe: "",
                showError: false
            }
        },
        methods: {
            connected() {
                if (this.nom.trim() != "" && this.prenom.trim() != "" && this.societe.trim() != "") {
                    this.$router.push({
                        path: 'questionnaire',
                        query: {
                            nom: this.nom,
                            prenom: this.prenom,
                            societe: this.societe
                        }
                    })
                } else {
                    this.showError = true
                }
            }
        }
    }
</script>

<style scoped>
    .connectButton {
        margin-top: 4%;
    }
    .errorMessage {
        font-weight: bold;
        color: red;
        font-size: 18px;
    }
    .formulaireConnexion{
        margin-left: 30%;
        margin-right: 30%;
    }
</style>