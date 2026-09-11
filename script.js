const btn = document.getElementById('launch-btn');
const btnText = document.getElementById('btn-text');
const missile = document.getElementById('missile');
const targetWindow = document.getElementById('target-window');
const blessingText = document.getElementById('blessing-text');
const topInstruction = document.getElementById('top-instruction');

let launched = false;

btn.addEventListener('click', () => {
    if (launched) return; 
    launched = true;

    topInstruction.classList.add('hide');

    btn.style.cursor = 'default';
    btnText.innerText = 'משגר...';

    missile.classList.add('fire-missile');

    setTimeout(() => {
        targetWindow.classList.add('show');
        blessingText.classList.add('show');
        
        btnText.innerText = 'סטטוס: שיגור מוצלח';
        btnText.style.fontSize = '16px';
        // הרקע שונה ללבן שקוף כדי שהטקסט השחור יבלוט
        btnText.style.background = 'rgba(255, 255, 255, 0.8)'; 
        btnText.style.padding = '5px 10px';
        btnText.style.borderRadius = '5px';
    }, 1400); 
});