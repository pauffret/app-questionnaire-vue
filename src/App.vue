<!-- Header qui va s'ajouter à toutes les pages -->
<template>
    <div id="app">
        <b-navbar variant="primary" type="dark">
            <!-- Nom de l'entreprise qui permet de revenir à l'accueil / formulaire -->
            <b-navbar-brand tag="h1" class="mb-0">
                <router-link to="/">
                    <b-button variant="primary">EEV SAS</b-button>
                </router-link>
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                <!-- Options qui s'ajoutent quand l'utilisateur se log -->
                <b-dropdown v-if="user != null" :text="user.firstname+' '+user.lastname+' ('+user.company+')'" variant="primary">
                    <b-dropdown-item @click="$router.push('/questionnaire')">Commencer le test</b-dropdown-item>
                    <b-dropdown-item>Mes résultats</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item @click="signOut">Déconnexion</b-dropdown-item>
                </b-dropdown>
            </b-navbar-nav>
        </b-navbar>
        <router-view class="container" @setUser="setUser"/>
    </div>
</template>

<script>
    export default{
        data: function () {
            return {
                user:null
            }
        },
        mounted(){
            this.setUser()
        },
        methods:{
            // Récupère les données de l'utilisateur contenu dans le sessionStorage et les stockent dans "user"
            setUser(){
                try {
                    this.user = JSON.parse(sessionStorage.getItem("currentUser"))
                } catch (e) {
                    this.user = null
                }
            },
            // Set l'user à null et redirige vers le formulaire de connexion
            signOut(){
                this.user = null
                sessionStorage.setItem("currentUser","")
                this.$router.push("/")
            }
        }
    }
</script>

<style lang="scss">
    /* Image de fond */
    #app, html{
        background-size: cover;
        background-image: url("assets/light-electricity-glare-blurring-wallpaper-preview.jpg");
    }
</style>