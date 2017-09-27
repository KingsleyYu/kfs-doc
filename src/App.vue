<template>
  <div id="app">
    <main-header></main-header>
    <main class="container main-content">
      <div class="col-xs-6 col-sm-2 col-md-3 navbar">
        <side-nav></side-nav>
      </div>
      <div class="col-xs-6 col-sm-5 page-container">

      </div>
      <div class="col-sm-4 demo">
        <phone></phone>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
@import './styles/reset.less';
body {
  background-color: #f0f0f0;
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

