<script>
    const screen = document.getElementById('screen');

    // FUNGSI ANIMASI: Membuat efek tombol 'tindis' (mengecil lalu kembali)
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
        // Jika layar berisi hasil teks, reset saat tombol angka baru ditekan
        const isText = screen.innerText.includes("adalah") || screen.innerText.includes("Amaliyah") || screen.innerText === "Error";
        
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
            screen.style.fontSize = "40px";
        } catch {
            screen.innerText = "Error";
            setTimeout(clearScreen, 1500);
        }
    }

    function solveStory() {
        const input = document.getElementById('storyInput').value.toLowerCase().trim();
        
        // 1. LOGIKA CEK NAMA
        if (input.includes("siapa") && input.includes("nama")) {
            screen.style.fontSize = "25px";
            screen.innerText = "Nama saya Amaliyah";
            showPanel('calc');
            return; 
        }

        // 2. LOGIKA HITUNG OTOMATIS
        const nums = input.match(/\d+(\.\d+)?/g);
        
        if (!nums || nums.length < 2) {
            alert("Harap masukkan soal dengan minimal 2 angka!");
            return;
        }

        const a = parseFloat(nums[0]);
        const b = parseFloat(nums[1]);
        let result = 0;
        let status = "Totalnya"; 

        // Deteksi Otomatis Kata Benda (mobil, apel, dll)
        const words = input.split(/\s+/);
        const indexNum = words.findIndex(w => w.includes(nums[0]));
        let benda = (indexNum !== -1 && words[indexNum + 1]) ? words[indexNum + 1].replace(/[?.!,]/g, "") : "item";

        // Logika Operasi (Tambah, Kurang, Kali, Bagi)
        if (input.includes("kurang") || input.includes("sisa") || input.includes("makan") || input.includes("hilang")) {
            result = a - b;
            status = "Sisanya";
        } else if (input.includes("kali")) {
            result = a * b;
            status = "Hasil kalinya";
        } else if (input.includes("bagi")) {
            result = a / b;
            status = "Hasil baginya";
        } else {
            result = a + b;
            status = "Totalnya";
        }

        // OUTPUT OTOMATIS: "Totalnya adalah 7 mobil"
        screen.style.fontSize = "22px"; 
        screen.innerText = `${status} adalah ${result} ${benda}`;
        
        showPanel('calc'); 
    }
</script>
