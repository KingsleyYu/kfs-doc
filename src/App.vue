<template>
  <div id="app">
    <main-header></main-header>
    <main class="container main-content">
      <div class="col-xs-6 col-sm-2 col-md-3 navbar">
        <side-nav></side-nav>
      </div>
      <div class="col-xs-6 col-sm-5 page-container">
        <el-button></el-button>
      </div>
      <div class="col-sm-4 demo">
        <phone></phone>
      </div>
    </main>
  </div>
</template>

<script>
import elButton from '../examples/button.md'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    elButton
  }
}
</script>

<style lang="less">
@import './styles/reset.less';
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  background-color: #f0f0f0;
}

#app {
  height: 100%;
}

@media (min-width: 1200px) {
  .container {
    width: 1230px;
  }
}

.main-content {
  height: 100%;
  min-width: 960px;
  transition: transform 0.3s ease-in-out;

  .navbar {
    height: 100%;
    min-width: 190px;
    padding-left: 0;
    overflow: auto;
  }

  .page-container {
    overflow: auto;
    height: 100%;
    padding: 32px 40px;
    background-color: #fff;

    &>section {
      h2,
      h3 {
        font-weight: 400;
        margin-bottom: 15px;
      }

      h2 {
        font-size: 22px;
        color: #333333;
      }

      h3 {
        margin-top: 30px;
        font-size: 14px;
        color: #151515;
      }

      p {
        font-size: 12px;
        color: #999999;
      }

      pre {
        border: none;
        background-color: #f8f8f8;
        padding: 20px;
        margin: 1.2em 0;
        overflow: auto;
      }

      .__config {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .main-content {
    min-width: 0;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;

    &.slide-in-left {
      transform: translate3d(50%, 0, 0);
    }

    .navbar {
      left: 0;
      margin-left: -50%;
      margin-right: 0;
      opacity: 1;
      position: absolute;
      top: 0;
      transition: opacity .3s;
      width: 50%;
      z-index: 10;
      min-width: auto;
      padding: 0;
    }

    .page-container {
      border-radius: 3px;
      margin-left: 15px;
      width: 95%;
      padding: 10px;
    }

    .demo {
      display: none;
    }
  }
}
</style>

