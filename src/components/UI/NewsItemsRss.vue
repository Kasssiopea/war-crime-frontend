<template>
    <section>
        <div class="container-fluid" v-for="item in feedItems" :key="item.isoDate">
            <div v-if="isLoading" class="text-center">
                <h1>HI</h1>
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          <div v-else>
            <div class="row">
                <div class="col">
                  <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4">
                          <a :href="item.link">
                              <div v-if="item.enclosure && item.enclosure.url">
                                  <img :src="item.enclosure.url" class="img-fluid rounded-start" alt="...">
                              </div>
                          </a>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title"><a :href="item.link">{{ item.title }}</a></h5>
                          <p class="card-text">{{ item.contentSnippet.slice(0, 128) }}...</p>
                          <p class="card-text"><small class="text-muted">{{ formatDate(item.pubDate) }}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
import Parser from "rss-parser";
import axios from "axios";

export default {
    name: "NewsItems",
    data() {
        return {
            feedItems: [],
            isLoading: true,
        }
    },
    props: {
      items_counter: {
        type: Number,
        required: true,
      },
    },
    mounted() {
      this.fetchRssFeed();
    },
    methods: {
      async fetchRssFeed() {
          const parser = new Parser();
          const rssUrl = 'https://feed.informer.com/digests/GCYXJX4GIB/feeder.rss';

          try {
            const response = await axios.get(`https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`);
            const feed = await parser.parseString(response.data);
            this.feedItems = feed.items.slice(0, this.items_counter);
            this.isLoading = false;
          } catch (error) {
            console.error('Ошибка при загрузке или парсинге RSS-ленты:', error);
            this.isLoading = false;
          }
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
        return formattedDate;
      },
    },
}
</script>

<style scoped>
</style>