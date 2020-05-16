const svg = document.querySelectorAll('path');
for (let i = 0; i < svg.length; i++) {
    console.log(`letter ${i} is ${svg[i].getTotalLength()} long`)
}