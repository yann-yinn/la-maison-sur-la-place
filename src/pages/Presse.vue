<template>
  <Layout>
    <h2>La vie Corrézienne</h2>

    <a target="_blank" href="/images/article-la-vie-correzienne-1.jpg">
      <g-image src="/images/article-la-vie-correzienne-1.jpg" width="200"/>
    </a>
    
    <a target="_blank" href="/images/article-la-vie-correzienne-2.jpg">
      <img src="/images/article-la-vie-correzienne-2.jpg" width="200">
    </a>

    <h2>La montagne</h2>

    <a target="_blank" href="/images/article-la-montagne.jpg">
      <g-image src="/images/article-la-montagne.jpg" width="200"/>
    </a>
  </Layout>
</template>

<page-query>
query Home {
  contentPage(path: "/content/page/presse") {
    title
    content
  }
}
</page-query>
