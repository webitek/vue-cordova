<template>
    <div class="search">
        <h2>Type in your search term</h2>
        <form v-on:submit.prevent="getResults(query)">
            <input type="text" v-model="query" style="border: 1px solid;">
            <template v-if="hints">
                <p>Hints: {{hints}}</p>
            </template>
        </form>
        <div v-if="results">
            <div v-for="result in results">
                <img :src="result.links[0].href" alt="">
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'NasaSearch',
    data() {
      return {
        query: '',
        hints: '',
        results: '',
      }
    },
    methods: {
      getResults(query) {
        axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image')
          .then(res => {
            console.log(res);
            this.hints = res.data.collection.metadata.total_hits;
            this.results = res.data.collection.items;
          })
      }
    }
  }
</script>
