<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Pintar Ame & Team</title>
    <style>
        /* CSS - Tampilan Pink Soft Aesthetic */
        body {
            background: linear-gradient(135deg, #fdf2f5 0%, #fce4ec 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .container {
            width: 360px;
            background-color: #ffffff;
            padding: 25px;
            border-radius: 40px;
            box-shadow: 0 15px 35px rgba(244, 143, 177, 0.3);
            border: 3px solid #f8bbd0;
        }

        .user-identity {
            text-align: center;
            margin-bottom: 10px;
        }

        .user-identity p {
            color: #ad1457;
            font-size: 10px;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: bold;
        }

        .user-identity h2 {
            color: #880e4f;
            font-size: 15px;
            margin: 5px 0;
        }

        .display-area {
            background: #fff8fa;
            padding: 20px;
            margin-bottom: 20px;
            min-height: 100px;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            box-shadow: inset 0 2px 8px rgba(0,0,0,0.05);
            border: 1px solid #fce4ec;
            overflow: hidden;
        }

        #screen {
            color: #c2185b;
            font-size: 40px;
            font-weight: 400;
            margin: 0;
            text-align: right;
            width: 100%;
            transition: all 0.2s;
        }

        .mode-nav {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        .mode-btn {
            flex: 1;
            padding: 12px;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .active { background-color: #f06292; color: white; }
        .inactive { background-color: #fce4ec; color: #ad1457; }

        .btn-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }

        .btn {
            border: none;
            border-radius: 18px;
            height: 68px;
            width: 100%;
            font-size: 22px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.2s;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: none;
        }

        .light-gray { background-color: #fce4ec; color: #ad1457; }
        .dark-gray { background-color: #ffffff; color: #444; border: 1px solid #f8bbd0; }
        .orange { background-color: #f8bbd0; color: #ad1457; }
        .scientific { background-color: #f48fb1; color: white; font-size: 15px; }

        .btn-zero { grid-column: span 2; }

        #storyPanel {
            display: none;
            flex-direction: column;
            gap: 15px;
        }

        textarea {
            width: 100%;
            height: 120px;
            background: #fff8fa;
            border: 2px solid #f8bbd0;
            border-radius: 20px;
            padding: 15px;
            color: #880e4f;
            font-size: 14px;
            box-sizing: border-box;
            outline: none;
            resize: none;
        }

        .solve-btn {
            background: #f06292;
            color: white;
            border: none;
            padding: 15px;
            border-radius: 20px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.1s;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="user-identity">
        <p>Kalkulator Project</p>
        <h2>Alya, Amaliyah, Aisyah</h2>
    </div>

    <div class="display-area">
        <h1 id="screen">0</h1>
    </div>

    <div class="mode-nav">
        <button id="btnCalc" class="mode-btn active" onclick="animateButton(this); showPanel('calc')">Kalkulator</button>
        <button id="btnStory" class="mode-btn inactive" onclick="animateButton(this); showPanel('story')">Soal Cerita</button>
    </div>

    <div id="calcPanel" class="btn-grid">
        <button class="btn scientific" onclick="animateButton(this); append('Math.sin(')">sin</button>
        <button class="btn scientific" onclick="animateButton(this); append('Math.cos(')">cos</button>
        <button class="btn scientific" onclick="animateButton(this); append('Math.tan(')">tan</button>
        <button class="btn orange" onclick="animateButton(this); append('/')">÷</button>

        <button class="btn light-gray" onclick="animateButton(this); clearScreen()">AC</button>
        <button class="btn light-gray" onclick="animateButton(this); toggleSign()">+/-</button>
        <button class="btn light-gray" onclick="animateButton(this); append('%')">%</button>
        <button class="btn orange" onclick="animateButton(this); append('*')">×</button>

        <button class="btn dark-gray" onclick="animateButton(this); append('7')">7</button>
        <button class="btn dark-gray" onclick="animateButton(this); append('8')">8</button>
        <button class="btn dark-gray" onclick="animateButton(this); append('9')">9</button>
        <button class="btn orange" onclick="animateButton(this); append('-')">-</button>

        <button class="btn dark-gray" onclick="animateButton(this); append('4')">4</button>
        <button class="btn dark-gray" onclick="animateButton(this); append('5')">5</button>
        <button class="btn dark-gray" onclick="animateButton(this); append('6')">6</button>
        <button class="btn orange" onclick="animateButton(this); append('+')">+</button>

        <button class="btn dark-gray" onclick="animateButton(this); append('1')">1</button>
        <button class="btn dark-gray" onclick="animateButton(this); append('2')">2</button>
        <button class="btn dark-gray" onclick="animateButton(this); append('3')">3</button>
        <button class="btn orange" onclick="animateButton(this); calculate()">=</button>

        <button class="btn dark-gray btn-zero" onclick="animateButton(this); append('0')">0</button>
        <button class="btn dark-gray" onclick="animateButton(this); append('.')">,</button>
    </div>

    <div id="storyPanel">
        <textarea id="storyInput" placeholder="Tanya nama atau masukkan soal cerita..."></textarea>
        <button class="solve-btn" onclick="animateButton(this); solveStory()">Dapatkan Jawaban ✨</button>
    </div>
</div>

<script>
    const screen = document.getElementById('screen');

    function animateButton(element) {
        if (!element) return;
        element.style.transform = "scale(0.85)";
        setTimeout(() => {
            element.style.transform = "scale(1)";
        }, 100);
    }

    function showPanel(type) {
        const calcP = document.getElementById('calcPanel');
        const storyP = document.getElementById('storyPanel');
        const btnC = document.getElementById('btnCalc');
        const btnS = document.getElementById('btnStory');

        if(type === 'calc') {
            calcP.style.display = 'grid';
            storyP.style.display = 'none';
            btnC.className = 'mode-btn active';
            btnS.className = 'mode-btn inactive';
        } else {
            calcP.style.display = 'none';
            storyP.style.display = 'flex';
            btnC.className = 'mode-btn inactive';
            btnS.className = 'mode-btn active';
        }
    }

    function append(val) {
        // Mendeteksi jika ada teks hasil di layar agar terhapus saat angka baru ditekan
        const isText = screen.innerText.includes("adalah") || 
                       screen.innerText.includes("Amaliyah") || 
                       screen.innerText.includes("Kami") ||
                       screen.innerText === "Error";
        
        if (screen.innerText === '0' || isText) {
            screen.innerText = val;
            screen.style.fontSize = "40px";
        } else {
            screen.innerText += val;
        }
    }

    function clearScreen() { 
        screen.innerText = '0'; 
        screen.style.fontSize = "40px";
    }

    function toggleSign() { 
        if(!isNaN(screen.innerText)) {
            screen.innerText = parseFloat(screen.innerText) * -1; 
        }
    }

    function calculate() {
        try {
            let expression = screen.innerText.replace(/×/g, '*').replace(/÷/g, '/');
            let res = eval(expression);
            screen.innerText = Number.isInteger(res) ? res : res.toFixed(2);
        } catch {
            screen.innerText = "Error";
            setTimeout(clearScreen, 1500);
        }
    }

    function solveStory() {
        const input = document.getElementById('storyInput').value.toLowerCase().trim();
        
        // --- LOGIKA BARU: JAWABAN 3 NAMA ---
        if (input.includes("siapa") && input.includes("nama")) {
            screen.style.fontSize = "18px";
            screen.innerText = "Kami adalah Amaliyah, Alya, dan Aisyah";
            showPanel('calc');
            return; 
        }

        const nums = input.match(/\d+(\.\d+)?/g);
        if (!nums || nums.length < 2) {
            alert("Harap masukkan soal dengan minimal 2 angka!");
            return;
        }

        const a = parseFloat(nums[0]);
        const b = parseFloat(nums[1]);
        let result = 0;
        let status = "Totalnya"; 

        const words = input.split(/\s+/);
        const indexNum = words.findIndex(w => w.includes(nums[0]));
        let benda = (indexNum !== -1 && words[indexNum + 1]) ? words[indexNum + 1].replace(/[?.!,]/g, "") : "";

        if (input.includes("kurang") || input.includes("sisa") || input.includes("makan") || input.includes("hilang")) {
            result = a - b;
            status = "Sisanya";
        } else {
            result = a + b;
            status = "Totalnya";
        }

        screen.style.fontSize = "22px"; 
        screen.innerText = `${status} adalah ${result} ${benda}`;
        showPanel('calc'); 
    }
</script>

</body>
</html>
