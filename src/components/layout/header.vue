<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong :radio: Platzi Music
          .nav-right.nav-menu
            router-link.nav-item(:to="{ name: 'search' }") Buscar
            router-link.nav-item(:to="{ name: 'about' }") Nosotros
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan buenísimas
        pm-player
</template>

<script>
  import PmPlayer from '@/components/Player.vue'

  export default {
    components: { PmPlayer }
  }
</script>
