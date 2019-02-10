<template>
  <div class="layout">
    <header class="header">
      <BulmaNavigation/>
    </header>
    <slot/>
  </div>
</template>

<script>
import BulmaNavigation from "~/components/BulmaNavigation";
export default {
  components: {
    BulmaNavigation
  }
};
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
