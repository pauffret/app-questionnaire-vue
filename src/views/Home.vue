<template>
  <div>
    <Connexion @setUser="setUser"/>
  </div>
</template>

<script>
  import Connexion from '../components/paConnexion.vue'

  export default {
    name: 'home',
    mounted: function () {
      this.setUser(null)
    },
    components: {
      Connexion
    },
    methods: {
      setUser() {
        this.$emit('setUser');
      }
    }
  }
</script>
