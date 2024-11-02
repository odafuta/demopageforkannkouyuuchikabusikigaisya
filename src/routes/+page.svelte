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
    <section class="container-fluid px-0">
        <div class="row align-items-center">
            <div id="headingGroup" class="col-lg-6 mt-5" use:registerElement>
                <div id="width" class="text-center text-white d-none d-lg-block animate-slideInFromTop">
                    <h2>WELCOME<span>/</span>TO<span>/</span>観光誘致株式会社</h2>
                    <h2>WELCOME<span>/</span>TO<span>/</span>観光誘致株式会社</h2>
                    <h2>WELCOME<span>/</span>TO<span>/</span>観光誘致株式会社</h2>
                    <h2>WELCOME<span>/</span>TO<span>/</span>観光誘致株式会社</h2>
                    <h2>WELCOME<span>/</span>TO<span>/</span>観光誘致株式会社</h2>
                    <h2>WELCOME<span>/</span>TO<span>/</span>観光誘致株式会社</h2>
                </div>
            </div>
            <div class="col-lg-6">
                <img class="img-fluid animate-fadeIn" src='/home.png' alt="">
            </div>
        </div>
    </section>
    <section class="container-fluid px-0">
        <div class="row text-center align-items-center content" use:registerElement>
            <div class="col-md-6 order-2 order-md-1">
                <img class="img-fluid animate-fadeIn" src="/shiro.png" alt="">
            </div>
            <div class="col-md-6 order-1 order-md-2 animate-slideInFromTop">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2>観光誘致株式会社へようこそ</h2>
                        <p class="lead">観光誘致株式会社は、美しい観光地を広め、訪問者に素晴らしい体験を提供するための活動を行っています。</p>
                        <p>観光PR活動やYouTubeでの情報発信を通じて、国内外から多くの観光客を誘致しています。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row text-center align-items-center content" use:registerElement>
            <div class="col-md-6">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0 animate-slideInFromTop">
                        <h2>観光誘致株式会社へようこそ</h2>
                        <p class="lead">観光誘致株式会社は、美しい観光地を広め、訪問者に素晴らしい体験を提供するための活動を行っています。</p>
                        <p>観光PR活動やYouTubeでの情報発信を通じて、国内外から多くの観光客を誘致しています。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img class="img-fluid animate-fadeIn" src="/nobunaga.jpg" alt="">
            </div>
        </div>
        <div class="row text-center align-items-center content" use:registerElement>
            <div class="col-md-6 order-2 order-md-1">
                <img class="img-fluid animate-fadeIn" src="/shirakawagou.jpg" alt="">
            </div>
            <div class="col-md-6 order-1 order-md-2 animate-slideInFromTop">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2>観光誘致株式会社へようこそ</h2>
                        <p class="lead">観光誘致株式会社は、美しい観光地を広め、訪問者に素晴らしい体験を提供するための活動を行っています。</p>
                        <p>観光PR活動やYouTubeでの情報発信を通じて、国内外から多くの観光客を誘致しています。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
main {
    background-color: #f5d9d5;
    font-family: Nunito, sans-serif;
}

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

/* 他のスタイル */
#width {
    margin: auto;
}

.col-lg-6 img {
    width: 100%;
    border-radius: 10px;
}

img {
    border-radius: 10px;
}

.blurb h2 {
    color: #ea1c2c;
    font-weight: 100;
    font-size: 2.5rem;
}

.blurb p {
    color: #f498b8;
    font-weight: 100;
    font-size: 1.125rem;
    line-height: 2;
}

.content {
    margin-top: 100px;
    margin-bottom: 100px;
}

#headingGroup span {
    color: #ea1c2c;
}

#headingGroup h2 {
    font-weight: 100;
    font-size: 2.5rem;
    white-space: nowrap;
}

@media (max-width: 768px) {
    #headingGroup h2 {
        font-size: 1.5rem;
    }
}

@media (max-width: 1200px) {
    #headingGroup h2 {
        font-size: 2.5rem;
    }
}
</style>
