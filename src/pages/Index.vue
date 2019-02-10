<template>
  <Layout>
    <div class="container">
      <div class="columns">
        <div class="column">
          <g-image alt="La maison sur la place" src="/images/la-maison-sur-la-place-dessin.webp"/>
        </div>
        <div class="column">
          <h1 class="title is-1">{{$static.metaData.siteName}}</h1>
          <div class="content" v-html="$page.header.content"/>
          <button
            v-scroll-to="'#element'"
            style="font-size:2rem"
            class="button is-primary"
          >En savoir plus</button>
        </div>
      </div>
      <div class="content" v-html="$page.enSavoirPlus.content"/>
      <img id="element" src="/images/ambrugeat-groupe-la-maison-sur-la-place.jpg">
    </div>
  </Layout>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<page-query>
query Home {
  header: contentHome(path: "/content/home/header") {
    title
    content
  }
  enSavoirPlus: contentHome(path: "/content/home/en-savoir-plus") {
    title
    content
  }
}
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
