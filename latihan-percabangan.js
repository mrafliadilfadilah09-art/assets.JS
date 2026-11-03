console.log("latihan percabangan 1");
function cekKelulusan(nilaiSiswa) {
            // Batas lulus minimal 75
            if (nilaiSiswa >= 75) {
                console.log("Nilai " + nilaiSiswa + ", statusnya: Lulus!");
            } else {
                console.log("Nilai " + nilaiSiswa + ", statusnya: Remedial.");
            }
        }

        // Coba beberapa contoh nilai
        cekKelulusan(85);
        cekKelulusan(60);
        cekKelulusan(75);
    
        console.log("latihan percabangan Soal 2");
        let role = "A" ;
        switch (role) {
             case "A":
                 console.log("Admin");
                     break;
                    case "U":
                console.log ("User");
                break;
             default:
        console.log("Guest");
        break;
}