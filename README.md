#<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chaos - The Wildest Token Around</title>
    <style>
        /* CSS for Apple-like design */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background: #f5f5f7;
            color: #1d1d1f;
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Header */
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.8);
            padding: 15px 0;
            z-index: 100;
        }

        nav {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        nav .logo {
            color: #fff;
            font-size: 24px;
            font-weight: bold;
        }

        nav ul {
            list-style: none;
            display: flex;
        }

        nav ul li {
            margin-left: 30px;
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            transition: color 0.3s;
        }

        nav ul li a:hover {
            color: #ff4500; /* Chaos-inspired orange-red */
        }

        /* Hero Section */
        #hero {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: linear-gradient(135deg, #000, #2f004f); /* Dark chaotic gradient */
            color: #fff;
        }

        #hero h1 {
            font-size: 64px;
            margin-bottom: 20px;
            animation: fadeIn 1s ease-in;
        }

        #hero p {
            font-size: 24px;
            margin-bottom: 10px;
        }

        #hero .fair-launch {
            font-size: 18px;
            color: #ff4500;
            margin-bottom: 40px;
        }

        #hero .cta {
            background: #ff4500;
            color: #fff;
            padding: 15px 30px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s;
        }

        #hero .cta:hover {
            background: #e63d00;
        }

        /* Section Styling */
        section {
            padding: 80px 20px;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        section h2 {
            font-size: 48px;
            margin-bottom: 40px;
        }

        /* Tokenomics */
        #tokenomics .stats {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        #tokenomics .stat {
            flex: 1;
            min-width: 200px;
            margin: 20px;
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* Roadmap */
        #roadmap .timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
        }

        #roadmap .timeline::before {
            content: '';
            position: absolute;
            width: 2px;
            height: 100%;
            background: #ff4500;
            left: 50%;
            transform: translateX(-50%);
        }

        #roadmap .milestone {
            position: relative;
            width: 45%;
            margin: 40px 0;
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        #roadmap .milestone:nth-child(odd) {
            left: 0;
            text-align: right;
        }

        #roadmap .milestone:nth-child(even) {
            left: 55%;
            text-align: left;
        }

        /* Footer */
        footer {
            background: #1d1d1f;
            color: #fff;
            padding: 40px 20px;
            text-align: center;
        }

        footer a {
            color: #ff4500;
            text-decoration: none;
        }

        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 768px) {
            #hero h1 { font-size: 40px; }
            #hero p { font-size: 18px; }
            #hero .fair-launch { font-size: 16px; }
            #roadmap .milestone { width: 100%; left: 0 !important; text-align: center; }
            #roadmap .timeline::before { display: none; }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <nav>
            <div class="logo">Chaos</div>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#tokenomics">Tokenomics</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#community">Community</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="hero">
        <h1>Welcome to Chaos</h1>
        <p>The Wildest Token in the Blockchain Universe</p>
        <p class="fair-launch">It’s a fair launch</p>
        <a href="#" class="cta">Buy Now</a>
    </section>

    <!-- Tokenomics Section -->
    <section id="tokenomics">
        <h2>Tokenomics</h2>
        <div class="stats">
            <div class="stat">
                <h3>Total Supply</h3>
                <p>1,000,000,000</p>
            </div>
            <div class="stat">
                <h3>Burned</h3>
                <p>20%</p>
            </div>
            <div class="stat">
                <h3>Staking Rewards</h3>
                <p>5% APR</p>
            </div>
        </div>
    </section>

    <!-- Roadmap Section -->
    <section id="roadmap">
        <h2>Roadmap</h2>
        <div class="timeline">
            <div class="milestone">
                <h3>Q1 2025</h3>
                <p>Token Launch & Community Building</p>
            </div>
            <div class="milestone">
                <h3>Q2 2025</h3>
                <p>Exchange Listings & Meme Generator</p>
            </div>
            <div class="milestone">
                <h3>Q3 2025</h3>
                <p>NFT Integration & Staking</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>Join us on <a href="#">Discord</a> | <a href="#">Twitter</a> | <a href="#">Telegram</a></p>
        <p>© 2025 Chaos. All rights reserved.</p>
    </footer>

    <!-- JavaScript for Interactivity -->
    <script>
        // Smooth scrolling for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>
