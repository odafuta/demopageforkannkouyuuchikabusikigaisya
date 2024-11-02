<script lang="ts">
    import Header from './../components/Header.svelte';
    import Footer from './../components/Footer.svelte';
    /*import './../styles.css';
    import "../app.css";*/
  </script>
  
  <svelte:head>
      <!-- Bootstrap CSS -->
  <link  rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>

<!-- BootstrapのJavaScriptおよび依存ライブラリ -->
<script
  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
  crossorigin="anonymous"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
  integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
  crossorigin="anonymous"
></script>
<script
  src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
  integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
  crossorigin="anonymous"
></script>
    <title>観光誘致株式会社</title>
    <meta name="description" content="観光を活発化させます" />
    <link rel="icon" href="https://media.istockphoto.com/id/1824344345/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%97%A5%E3%81%AE%E5%87%BA%E3%81%AE%E5%AF%8C%E5%A3%AB%E5%B1%B1%E3%81%A8%E6%B2%B3%E5%8F%A3%E6%B9%96%E6%97%A5%E6%9C%AC%E3%81%AE%E5%B1%B1%E6%99%BA%E3%81%AE%E7%A7%8B%E3%81%AE%E5%AF%8C%E5%A3%AB%E5%B1%B1.jpg?s=1024x1024&w=is&k=20&c=nk-yQJbfF_JwPKjHD2S283uWEDmzRNpJ4rvcYGAfMaA=" />
  </svelte:head>
  
  <div class="app">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
  
  <style>
    .app {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0 auto;
      box-sizing: border-box;
      min-height: 100vh;
    }
  </style>
  