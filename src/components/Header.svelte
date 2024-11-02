<script>
    import { onMount } from 'svelte';
    onMount(() => {
        console.log("JavaScript is working!");
    });

    let isMenuOpen = false;

    //メニューを開閉する関数
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    // メニューを閉じる関数
    function closeMenu() {
        isMenuOpen = false;
    }

    // onMountでスクロールによるクラス操作とメニュー外クリックのイベントリスナーを設定
    onMount(() => {
        const navbar = document.getElementById("mainNavbar");

        // スクロール時の背景色切り替え
        const handleScroll = () => {
            navbar.classList.toggle("scrolled", window.scrollY > navbar.offsetHeight);
        };

        // スクロールイベントリスナーを追加
        window.addEventListener("scroll", handleScroll);

        // メニュー外クリックで閉じる
        const handleOutsideClick = (event) => {
            const menu = document.getElementById("navLinks");
            if (!menu.contains(event.target) && isMenuOpen) {
                console.log(event.target);
                closeMenu();
            }
        };

        document.addEventListener("click", handleOutsideClick);

        // クリーンアップ
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleOutsideClick);
        };
    });
</script>

<nav id="mainNavbar" class="navbar navbar-dark navbar-expand-md py-0 fixed-top">
    <a href="https://kanko.inc/" class="navbar-brand">観光誘致株式会社</a>
    <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navLinks"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        on:click={toggleMenu}
    >
        <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navLinks" class="collapse navbar-collapse" class:isOpen={isMenuOpen}>
        <div class="navbar-nav">
            <a href="/" class="nav-item nav-link" on:click={closeMenu}>ホーム</a>
            <a href="/suits" class="nav-item nav-link" on:click={closeMenu}>スーツさんの紹介</a>
            <a href="/tourism" class="nav-item nav-link" on:click={closeMenu}>観光PR</a>
        </div>
    </div>
</nav>

<style>
    #mainNavbar.scrolled {
        background: #090809;
        transition: background 500ms;
    }
    #mainNavbar {
        background-color: rgb(91, 85, 100);
        font-size: 1.5rem;
        font-weight: 100;
    }
    #mainNavbar .navbar-brand {
        color: #ea1c2c;
        font-size: 1.5rem;
    }
    #mainNavbar .nav-link {
        color: white;
    }
    #mainNavbar .nav-link:hover {
        color: #ea1c2c;
    }
</style>
