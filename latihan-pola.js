console.log("SOAL POLA 1")
{
    for (let i = 1; i <= 4; i++) {
        let pola = "";
        for (let j = 1; j <= i; j++) {
            pola += "*";
        }
        console.log(pola);
    }
}
console.log("SOAL POLA 2")
for (let i = 1; i <= 1; i++) {
        let bintang ="";
        for (let j = 1; j <= 15; j++) {
            bintang += "*";
        }
        console.log(bintang);
    }
    for (let i = 1; i <= 1; i++) {
        let bintang ="";
        for (let j = 1; j <= 15; j++) {
            bintang += "*";
        }
        console.log(bintang);
    }
    for (let i = 1; i <= 1; i++) {
        let bintang ="";
        for (let j = 1; j <= 15; j++) {
            bintang += "*";
        }
        console.log(bintang);
    }
    for (let i = 1; i <= 1; i++) {
        let bintang ="";
        for (let j = 1; j <= 15; j++) {
            bintang += "*";
        }
        console.log(bintang);
    }
console.log("SOAL POLA 3")
for (let i = 1; i <= 1; i++) {
        let pola = "";
        for (let j = 1; j <= 10; j++) {
            if (i === 1 || i === 1 || j === 1 || j === 10) {
                pola += "*";
            } else {
                pola += "";
            }
        }
        console.log(pola);
    }
    for (let i = 1; i <= 1; i++) {
        let pola = "";
        for (let j = 1; j <= 2; j++) {
            if (i === 1 || i === 1 || j === 1 || j === 2) {
                pola +="*        ";
            } else {
                pola +="";
            }
        }
        console.log(pola);
    }
    for (let i = 1; i <= 1; i++) {
        let pola = "";
        for (let j = 1; j <= 2; j++) {
            if (i === 1 || i === 1 || j === 1 || j === 2) {
                pola +="*        ";
            } else {
                pola +="";
            }
        }
        console.log(pola);
    }
        for (let i = 1; i <= 1; i++) {
        let pola = "";
        for (let j = 1; j <= 2; j++) {
            if (i === 1 || i === 1 || j === 1 || j === 2) {
                pola +="*        ";
            } else {
                pola +="";
            }
        }
        console.log(pola);
    }
    for (let i = 1; i <= 1; i++) {
        let pola = "";
        for (let j = 1; j <= 10; j++) {
            if (i === 1 || i === 1 || j === 1 || j === 10) {
                pola += "*";
            } else {
                pola += "";
            }
        }
        console.log(pola);
    }
console.log("SOAL POLA 4")
for(let i = 1; i <= 4; i++){
    let pola = "";
    for(let j = 1; j <= 4 -i; j++) {
        pola += " ";
    }
    for(let j= 1; j <= ( 2* i - 1); j++) {
        pola += i;
    }
    console.log(pola);
}
console.log("SOAL POLA 5")
let nomor = 1;
for(let i = 1; i <= 4; i++) {
    let pola ="";
    for(let j= 1; j <= i; j++) {
        pola += nomor;
        nomor++;
    }
    console.log(pola);
}
console.log("SOAL POLA 6")
 for (let i = 1; i <= 4; i++) {
        let pola = " ".repeat(4 - i);
        pola += "*".repeat(2 * i - 1);
        console.log(pola);
    }

    for (let i = 3; i >= 1; i--) {
        let pola = " ".repeat(4 - i);
        pola += "*".repeat(2 * i - 1);
        console.log(pola);
    }
console.log ("SOAL POLA 7")
 for (let i = 4; i >= 1; i--) {
        let pola = " ".repeat(4 - i);
        pola += "*".repeat(2 * i - 1);
        console.log(pola);
    }

    for (let i = 2; i <= 4; i++) {
        let pola = " ".repeat(4 - i);
        pola += "*".repeat(2 * i - 1);
        console.log(pola);
    }
console.log("SOAL POLA 8")
for (let i = 1; i <= 5; i++) {
        let pola = "";

        for (let j = 1; j <= 9; j++) {
            if (i === 5 || j === 6 - i || j === 4 + i) {
                pola += "*";
            } else {
                pola += " ";
            }
        }
        console.log(pola);
    }