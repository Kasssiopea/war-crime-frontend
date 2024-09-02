<template>
    <section>
        <div class="container-fluid" v-for="item in news" :key="item.isoDate">
            <div class="row">
                <div class="col">
                  <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4">
                          <a :href="item.url_news">
                              <img :src="item.image" class="img-fluid rounded-start" alt="...">
                          </a>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title"><a :href="item.url_news">{{ item.title }}</a></h5>
                          <p class="card-text">{{ item.text.slice(0, 240) }}...</p>
                          <p class="card-text">
                              <small class="text-muted">
                                  {{item.span_date}} from <a :href="item.url_news">{{item.news_name}}</a>
                              </small>
                          </p>
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
export default {
    name: "NewsItems",
    props: {
        news: {
            type: Array,
            required: true,
        }
    },
}
</script>

<style scoped>
    P.item { margin-top: 10px; margin-bottom: 8px; font-family: arial, helvetica, verdana, sans-serif; padding-bottom: 10px; border-bottom: 1px solid #999; line-height: 1.45em; width: 100%; }
    a { color: #00499B; }
    #items { font-size: 13px; }
    SPAN.description { color: #222; line-height: 1.25em; font-size: 17px; }
    SPAN.date { color: #888; font-size: 11px; }
    SPAN.date A { color: #247; }
    SPAN.grey { color: #888; font-weight: bold; font-size: 22px; }

    .parent-div { display: flex; align-items: stretch; box-sizing: border-box; margin: 0; padding: 0; border: none; width: 100%; }
    .parent-div img { height: 100%; }
</style>