function solveStory() {
    // 1. Ambil input dan bersihkan spasi berlebih
    const text = storyInput.value.toLowerCase().trim();
    const nums = text.match(/\d+(\.\d+)?/g);

    if (!nums || nums.length < 2) {
        alert("Harap masukkan minimal 2 angka!");
        return;
    }

    const a = parseFloat(nums[0]);
    const b = parseFloat(nums[1]);
    let result = 0;
    let kataStatus = "totalnya"; 

    // 2. Ambil kata benda (Kita ambil kata setelah angka PERTAMA)
    const words = text.split(/\s+/);
    let benda = "item"; // Default
    
    for (let i = 0; i < words.length; i++) {
        // Jika kata saat ini mengandung angka pertama, ambil kata SETELAHNYA
        if (words[i].includes(nums[0])) {
            if (words[i+1]) {
                // Bersihkan tanda baca seperti titik atau koma
                benda = words[i+1].replace(/[?.!,]/g, "");
                break;
            }
        }
    }

    // 3. Tentukan Operasi Matematika
    if (text.includes("kurang") || text.includes("sisa") || text.includes("makan") || text.includes("hilang") || text.includes("kasih")) {
        result = a - b;
        kataStatus = "sisanya";
    } else if (text.includes("kali")) {
        result = a * b;
        kataStatus = "hasilnya";
    } else if (text.includes("bagi")) {
        result = a / b;
        kataStatus = "hasilnya";
    } else {
        // Default Tambah
        result = a + b;
        kataStatus = "totalnya";
    }

    // 4. UPDATE LAYAR (Sangat kaku agar tidak double)
    screen.style.fontSize = "22px";
    
    // Kita susun manual string-nya
    let jawabanFinal = kataStatus + " adalah " + result + " " + benda;
    
    screen.innerText = jawabanFinal;

    showPanel('calc'); 
}