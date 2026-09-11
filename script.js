const btn = document.getElementById('launch-btn');
const btnText = document.getElementById('btn-text');
const missile = document.getElementById('missile');
const targetWindow = document.getElementById('target-window');
const blessingText = document.getElementById('blessing-text');
const topInstruction = document.getElementById('top-instruction'); // תפיסת הכותרת העליונה

let launched = false;

btn.addEventListener('click', () => {
    if (launched) return; 
    launched = true;

    // 1. מעלים את הכותרת העליונה
    topInstruction.classList.add('hide');

    // 2. עדכון סטטוס כפתור
    btn.style.cursor = 'default';
    btnText.innerText = 'משגר...';

    // 3. הפעלת האנימציה של הטיל
    missile.classList.add('fire-missile');

    // 4. לאחר הפגיעה מציגים את הברכה המעודכנת
    setTimeout(() => {
        targetWindow.classList.add('show');
        blessingText.classList.add('show');
        
        btnText.innerText = 'סטטוס: שיגור מוצלח';
        btnText.style.fontSize = '16px';
        btnText.style.background = 'rgba(0,0,0,0.6)';
        btnText.style.padding = '5px 10px';
        btnText.style.borderRadius = '5px';
    }, 1400); 
});