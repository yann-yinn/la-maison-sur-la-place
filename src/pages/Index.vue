<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135"/>
    <h1>{{$page.metaData.siteName}}</h1>
    <div v-html="$page.header.content"/>
  </Layout>
</template>

<page-query>
query Home {
  metaData {
    siteName
  }
  header: homeSection(path: "/content/home-sections/header") {
    title
    content
  }
  test: homeSection(path: "/content/home-sections/test") {
    title
    content
  }
}
</page-query>


<script>
export default {
  // ..
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
