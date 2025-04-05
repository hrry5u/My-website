<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CHAOS - Meme Coin</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background: linear-gradient(45deg, #ff0000, #000000);
            color: #fff;
            overflow-x: hidden;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            text-align: center;
            padding: 50px 0;
            position: relative;
        }

        .chaos-title {
            font-size: 5rem;
            text-transform: uppercase;
            animation: glitch 1s linear infinite;
            text-shadow: 0 0 10px #ff0000;
            position: relative;
            z-index: 2;
        }

        @keyframes glitch {
            2%, 64% {
                transform: translate(2px, 0) skew(0deg);
            }
            4%, 60% {
                transform: translate(-2px, 0) skew(0deg);
            }
            62% {
                transform: translate(0, 0) skew(5deg);
            }
        }

        .scratch-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }

        .scratch {
            position: absolute;
            background: #ff0000;
            transform-origin: center;
            animation: scratchMove 2s infinite;
            box-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
        }

        .scratch-1 {
            width: 200px;
            height: 10px;
            top: 40%;
            left: 30%;
            transform: rotate(-45deg);
            animation-delay: 0.2s;
        }

        .scratch-2 {
            width: 150px;
            height: 15px;
            top: 60%;
            left: 60%;
            transform: rotate(30deg);
            animation-delay: 0.4s;
        }

        .scratch-3 {
            width: 180px;
            height: 12px;
            top: 50%;
            left: 45%;
            transform: rotate(-20deg);
            animation-delay: 0.6s;
        }

        @keyframes scratchMove {
            0%, 100% {
                opacity: 0.3;
                transform: translateY(0) rotate(-45deg);
            }
            50% {
                opacity: 1;
                transform: translateY(20px) rotate(-45deg);
            }
        }

        .bio {
            background: rgba(0, 0, 0, 0.7);
            padding: 30px;
            border-radius: 10px;
            margin: 20px 0;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        .token-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 40px 0;
        }

        .info-card {
            background: #ff0000;
            padding: 20px;
            border-radius: 5px;
            transform: rotate(-2deg);
            transition: all 0.3s ease;
        }

        .info-card:hover {
            transform: rotate(0deg) scale(1.05);
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
        }

        .heatmap {
            width: 100%;
            height: 200px;
            background: linear-gradient(to right, #ff0000, #ff3333);
            margin: 20px 0;
            animation: heatPulse 2s infinite;
        }

        @keyframes heatPulse {
            0% { opacity: 0.7; }
            50% { opacity: 1; }
            100% { opacity: 0.7; }
        }

        .buy-button {
            display: inline-block;
            padding: 15px 30px;
            background: #000;
            color: #ff0000;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
            animation: shake 0.5s infinite;
        }

        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
        }

        .chaos-letters {
            font-size: 1.5rem;
            margin: 20px 0;
        }

        .letter {
            display: inline-block;
            transition: all 0.3s ease;
        }

        .letter:hover {
            transform: translateY(-10px);
            color: #ff6666;
        }

        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }
    </style>
</head>
<body>
    <div class="particles" id="particles"></div>
    <div class="container">
        <header>
            <h1 class="chaos-title">CHAOS</h1>
            <div class="scratch-container">
                <div class="scratch scratch-1"></div>
                <div class="scratch scratch-2"></div>
                <div class="scratch scratch-3"></div>
            </div>
            <p>The Ultimate Meme Coin</p>
        </header>

        <section class="bio">
            <h2>About CHAOS</h2>
            <p>Inspired by a Wall Street Stock market crash which has heatmap redder than the Trump coin hodler’s face who bought @ 60 USD</p>
        </section>

        <section class="token-info">
            <div class="info-card">
                <h3>Token Name</h3>
                <p>CHAOS</p>
            </div>
            <div class="info-card">
                <h3>Token Address</h3>
                <p>Not yet decided</p>
            </div>
            <div class="info-card">
                <h3>Total Supply</h3>
                <p>1 Billion Tokens</p>
            </div>
            <div class="info-card">
                <h3>Launch</h3>
                <p>100% Fair Launch</p>
            </div>
        </section>

        <div class="heatmap"></div>

        <div class="chaos-letters">
            <span class="letter">C</span> - Crashing 
            <span class="letter">H</span> - Hodl 
            <span class="letter">A</span> - Ape 
            <span class="letter">O</span> - Oh no 
            <span class="letter">S</span> - Send it!
        </div>

        <center><a href="#" class="buy-button">Buy CHAOS Now!</a></center>
    </div>

    <script>
        // Particle animation
        const particlesContainer = document.getElementById('particles');
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '5px';
            particle.style.height = '5px';
            particle.style.background = '#ff0000';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 100 + 'vh';
            particle.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
            
            particlesContainer.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 5000);
        }

        setInterval(createParticle, 200);

        // Add keyframe animation for falling particles
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
            @keyframes fall {
                0% { transform: translateY(-100vh); opacity: 1; }
                100% { transform: translateY(100vh); opacity: 0; }
            }
        `, styleSheet.cssRules.length);
    </script>
</body>
</html>