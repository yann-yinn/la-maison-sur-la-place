<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135"/>
    <h1>{{$static.metaData.siteName}}</h1>
    <div v-html="$page.header.content"/>
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
  test: contentHome(path: "/content/home/test") {
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
