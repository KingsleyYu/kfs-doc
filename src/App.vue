<template>
  <div id="app">
    <HeaderComponent :data="project" />
    <ContentComponent/>
    <!-- <FooterComponent/> -->
  </div>
</template>

<script>
import HeaderComponent from './components/Header';
import ContentComponent from './components/Content'
import FooterComponent from './components/Footer';

import docConfig from 'docConfig'

export default {
  name: 'app',
  data() {
    return {
      docConfig
    }
  },
  computed: {
    project: function() {
      return this.docConfig.project
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    ContentComponent
  }
}
</script>

<style lang="less">
@import './styles/reset.less';
body {
  background-color: #f0f0f0;
}

.container,
.page-container {
  width: 1215px;
  margin: 0 auto;
}
</style>

