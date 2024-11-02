<script lang="ts">
  import { onMount } from 'svelte';

  let elements = [];

  onMount(() => {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate-fadeIn');
                  observer.unobserve(entry.target);
              }
          });
      });

      elements.forEach(el => {
          observer.observe(el);
      });
  });

  function registerElement(el) {
      if (el) {
          elements.push(el);
      }
  }
</script>

<section class="text-center">
  <!-- Part 1 -->
  <div class="bg-dark text-light py-5">
      <div class="container p-5 bg-light text-dark shadow-lg rounded">
          <h1 class="display-4 mb-4 animate-slideInFromTop">観光PR</h1>
          <p class="lead animate-fadeIn">日本の豊かな文化と美しい自然を体験できる観光プランを紹介します。2024年のディスティネーションキャンペーン、ナッシュ、そしてJP東日本びゅうダイナミックレールパックなどのサービスで、快適で充実した観光体験をお楽しみください。</p>
      </div>
      <hr class="my-4 border-light w-75 mx-auto">
  </div>

  <!-- Part 2 -->
  <div class="bg-secondary text-dark py-5">
      <div class="container bg-light text-dark shadow-lg rounded p-5">
          <h2 class="h1 mb-4 animate-slideInFromTop">観光サービス</h2>
          
          <!-- ディスティネーションキャンペーン -->
          <div class="row align-items-center mb-4" id="destination-campaign" use:registerElement>
              <div class="col-md-6 mb-3">
                  <div class="position-relative">
                      <img src="/distination.png" alt="2024年ディスティネーションキャンペーン" class="img-fluid rounded animate-fadeIn shadow-sm border border-secondary" />
                      <span class="badge bg-dark text-white position-absolute top-0 start-0 m-2">サービス 1</span>
                  </div>
              </div>
              <div class="col-md-6">
                  <h3 class="h2 text-primary">2024年ディスティネーションキャンペーン</h3>
                  <h4 class="h5 text-muted">日本各地の観光資源を楽しむ</h4>
                  <p>2024年の<a href="https://www.jr-odekake.net/navi/hokurikudc/" target="_blank">ディスティネーションキャンペーン</a>では、特別な体験やイベントを通じて、日本の多様な文化や自然の魅力を堪能できます。地域ごとの特色あふれる観光資源をお楽しみください。</p>
              </div>
          </div>

          <!-- ナッシュ -->
          <div class="row align-items-center mb-4" id="nash" use:registerElement>
              <div class="col-md-6 mb-3 order-md-2">
                  <div class="position-relative">
                      <img src="/nosh.png" alt="ナッシュ" class="img-fluid rounded animate-fadeIn shadow-sm border border-secondary" />
                      <span class="badge bg-dark text-white position-absolute top-0 start-0 m-2">サービス 2</span>
                  </div>
              </div>
              <div class="col-md-6 order-md-1">
                  <h3 class="h2 text-primary">ナッシュ</h3>
                  <h4 class="h5 text-muted">日々の疲れを癒すお食事サービス</h4>
                  <p>おいしく栄養バランスの取れた食事を提供する<a href="https://nosh.jp/?utm_source=google&utm_medium=cpc&utm_campaign=nosh_exact&utm_content=nosh&utm_term=nosh_%E3%83%8A%E3%83%83%E3%82%B7%E3%83%A5&gad_source=1&gclid=Cj0KCQjwm5e5BhCWARIsANwm06h0DUsDMuUNaLSTjq7-_wSdXiTJwJd4ZHNCwhxiRn2WRnEduf7T1mwaAlhKEALw_wcB" target="_blank">ナッシュ</a>は、手軽に健康的なお食事を楽しめるサービスです。安心して食べられるメニューで、時間を想像し人生を豊かに。</p>
              </div>
          </div>

          <!-- びゅうダイナミックレールパック -->
          <div class="row align-items-center mb-4" id="byu-dynamic-railpack" use:registerElement>
              <div class="col-md-6 mb-3">
                  <div class="position-relative">
                      <img src="/byuu.png" alt="JPびゅうダイナミックレールパック" class="img-fluid rounded animate-fadeIn shadow-sm border border-secondary" />
                      <span class="badge bg-dark text-white position-absolute top-0 start-0 m-2">サービス 3</span>
                  </div>
              </div>
              <div class="col-md-6">
                  <h3 class="h2 text-primary">JP東日本びゅうダイナミックレールパック</h3>
                  <h4 class="h5 text-muted">お得な旅行パッケージ</h4>
                  <p><a href="https://www.jre-travel.com/" target="_blank">びゅうダイナミックレールパック</a>は、交通と宿泊を自由に組み合わせたパッケージで、自由な旅程とお得な料金を提供します。日本を存分に楽しむための最適なパッケージです。</p>
              </div>
          </div>
      </div>
      <hr class="my-4 border-light w-75 mx-auto">
  </div>

  <!-- Call to Action -->
  <div class="text-center my-5">
      <a href="https://kanko.inc/" class="btn btn-lg btn-primary px-5 py-3">今すぐHP</a>
  </div>
</section>

<style>
  .animate-fadeIn {
      opacity: 0;
      animation: fadeIn 0.8s ease-in forwards;
  }
  .animate-slideInFromTop {
      opacity: 0;
      animation: slideInFromTop 1s ease-out forwards;
  }
  @keyframes fadeIn {
      to { opacity: 1; }
  }
  @keyframes slideInFromTop {
      from { transform: translateY(-20px); }
      to { transform: translateY(0); opacity: 1; }
  }
</style>
