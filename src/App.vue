<template lang="pug">
#app
  pm-header
  section.section
    nav.nav.has-shadow
      .container
        input.input.is-large(
          type="text",
          v-model="searchQuery"
          placeholder="Buscar canciones")
        a.button.is-info.is-large(@click="search") Buscar
        a.button.is-danger.is-large &times;
    .container
      p
        small {{searchMessage}}
    .container.results
      .columns.is-multiline
        .column.is-one-quarter(v-for="t in tracks")
          pm-track(:track="t")
    .container
      .columuns
        .column
  pm-footer
</template>

<script>
import trackService from '@/services/track'
import PmFooter from '@/components/layout/footer.vue'
import PmHeader from '@/components/layout/header.vue'
import PmTrack from '@/components/Track.vue'

export default {
  name: 'app',
  components: {
    PmFooter,
    PmHeader,
    PmTrack
  },
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) return

      trackService.search(this.searchQuery)
        .then(res => {
          console.log(res)
          this.tracks = res.tracks.items
        })
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
