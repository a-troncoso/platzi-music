<template lang="pug">
  .container
    .content.has-text-centered
      h1 Cargando ...
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
// scoped hace q los estilos sólo apliquen al componente actul y no a todo el proyecto
// esto es util en el caso de sobreescribir clases globales
  .content {
    padding: 20px;
    min-height: 40vh;
  }
</style>
