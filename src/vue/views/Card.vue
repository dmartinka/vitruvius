<template>
  <section id="card">
    <h1 class="mb-30">Cards</h1>

    <h2>Basic Card</h2>

    <vp-card name="foo">
      This is a card.
    </vp-card>

    <h2>Card with Image</h2>

    <vp-card image="https://i.imgur.com/75kuZXj.jpg">
      This is a card with an image.
    </vp-card>

    <h2>Card with Image and Reveal</h2>

    <vp-card
      image="https://i.imgur.com/Hb21JAa.jpg"
      reveal="This is Richard Sherman. Perhaps the greatest niner of all time.">
      This is a card with an image and image reveal.
    </vp-card>

  </section>
</template>

<script>
  import { card } from '../../components/card/card'
  export default {
    data() {
      return {}
    }
  }
</script>

<style>

</style>
