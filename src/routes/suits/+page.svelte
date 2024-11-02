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
  
  <main>
    <div class="intro" use:registerElement>
      <h2 class="animate-slideInFromTop">スーツさんの紹介</h2>
      <p>スーツさんは観光誘致株式会社の代表であり、YouTubeを通じて観光地の魅力を発信しています。</p>
    </div>
    <div class="display animate-slideInFromTop">
      <div class="panel pricing-table">
        <div class="pricing-plan" use:registerElement>
          <img src="/transportation.png" alt="" class="animate-fadeIn pricing-img">
          <h2 class="pricing-header">スーツ 交通</h2>
          <ul class="pricing-features">
              <li class="pricing-features-item">Public Transportation</li>
              <li class="pricing-features-item">BRODEN YOUR HORIZON THROUGH THIS CHANNEL</li>
          </ul>
          <span class="pricing-price">Free</span>
          <a href="https://www.youtube.com/@usiusa7991" target="_blank" class="pricing-button">スーツ 交通 / Suit Train</a>
        </div>
        
        <div class="pricing-plan" use:registerElement>
          <img src="/travel.png" alt="" class="animate-fadeIn pricing-img">
          <h2 class="pricing-header">スーツ 旅行</h2>
          <ul class="pricing-features">
              <li class="pricing-features-item">go traveling everywhere</li>
              <li class="pricing-features-item">BRODEN YOUR HORIZON THROUGH THIS CHANNEL</li>
          </ul>
          <span class="pricing-price">FREE</span>
          <a href="https://www.youtube.com/@SuitTravel" target="_blank" class="pricing-button is-featured">スーツ 旅行 / Suit Travel</a>
        </div>
  
        <div class="pricing-plan" use:registerElement>
            <img src="/sebiro.png" alt="" class="animate-fadeIn pricing-img">
            <h2 class="pricing-header">スーツ 背広</h2>
            <ul class="pricing-features">
                <li class="pricing-features-item">see things from a different perspective</li>
                <li class="pricing-features-item">BRODEN YOUR HORIZON THROUGH THIS CHANNEL</li>
            </ul>
            <span class="pricing-price">FREE</span>
            <a href="https://www.youtube.com/@SuitSebiro" target="_blank" class="pricing-button">スーツ 背広チャンネル</a>
        </div>
      </div>
    </div>
  </main>
  
  <style>
  /* アニメーション用のCSS */
  .animate-fadeIn {
      opacity: 0;
      animation: fadeIn 1.0s ease-in forwards;
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
  
  /* 見やすくモダンなイントロセクション */
  .intro {
      text-align: center;
      margin: 5em auto 20px;
      color: #333;
  
      background-color: white;
      border-radius: 10px;
      padding: 15px 25px;
      width: 100%;
      max-width: 960px;
      display: flex;
      flex-direction: column;
      text-align: center;
      text-transform: uppercase;
  }
  
  .intro h2 {
      font-size: 2.5rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 10px;
  }
  
  .intro p {
      font-size: 1.25rem;
      color: #555;
  }
  
  div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  
  .display {
      line-height: 1;
      margin-bottom: 1em;
  }
  
  ol, ul {
      list-style: none;
  }
  
  blockquote, q {
      quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  
  html {
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
  }
  
  .display {
      background-color: #60a9ff;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
  }
  
  main {
      background-color: #60a9ff;
  }
  
  .panel {
      background-color: white;
      border-radius: 10px;
      padding: 15px 25px;
      width: 100%;
      max-width: 960px;
      display: flex;
      flex-direction: column;
      text-align: center;
      text-transform: uppercase;
  }
  
  .pricing-plan {
      border-bottom: 1px solid #e1f1ff;
      border-right: 1px solid #e1f1ff;
      padding: 25px 50px;
      flex: 1; /* 均等な幅に設定 */
  }
  
  .pricing-plan:last-child {
      border-bottom: none;
  }
  
  .pricing-img {
      margin-bottom: 25px;
      max-width: 100%;
  }
  
  .pricing-header {
      color: #888;
      font-weight: 600;
      letter-spacing: 1px;
  }
  
  .pricing-features {
      margin: 50px 0 25px;
      color: #016ff9;
  }
  
  .pricing-features-item {
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 12px;
      line-height: 1.5;
      padding: 15px 0;
      border-top: 1px solid #e1f1ff;
  }
  
  .pricing-features-item:last-child {
      border-bottom: 1px solid #e1f1ff;
  }
  
  .pricing-price {
      color: #016ff9;
      display: block;
      font-size: 32px;
      font-weight: 700;
  }
  
  .pricing-button {
      border: 1px solid #9dd1ff;
      border-radius: 10px;
      color: #348efe;
      display: inline-block;
      padding: 15px 35px;
      text-decoration: none;
      margin: 25px 0;
      transition: background-color 200ms ease-in-out;
  }
  
  .pricing-button:hover {
      background-color: #e1f1ff;
  }
  
  .pricing-button.is-featured {
      background-color: #48aaff;
      color: white;
  }
  
  .pricing-button.is-featured:hover {
      background-color: #269aff;
  }
  
  @media(min-width: 900px) {
      .panel {
          flex-direction: row;
      }
      .pricing-plan {
          border-bottom: none;
          border-right: 1px solid #e1f1ff;
          padding: 25px 50px;
      }
      .pricing-plan:last-child {
          border-right: none;
      }
  }
  </style>
  