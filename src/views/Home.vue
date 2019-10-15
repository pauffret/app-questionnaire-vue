<template>
  <div class="home">
    <div id="connexion">
      <connexion></connexion>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Connexion from "../components/Connexion";

export default {
  name: 'home',
  components: {
    Connexion
  }
}
</script>
