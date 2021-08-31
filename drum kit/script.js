const wrapper = document.querySelector('.wrapper')
wrapper.style.minHeight = document.documentElement.clientHeight + 'px'


const buttons = document.querySelectorAll('.button')
const sounds = document.querySelectorAll('.sound')

buttons.forEach(btn => {
    document.addEventListener('keydown', (event) => {
        let currentSound = event.code
        if (event.code == btn.getAttribute('data-key')) {
            btn.classList.add('playing')
        } 
        document.getElementById(currentSound).currentTime = 0
        document.getElementById(currentSound).play();
        document.addEventListener('keyup', (event) => {
            buttons.forEach(btn => {
                btn.classList.remove('playing')
            })
        })
    })
})

buttons.forEach(btn => {
    btn.addEventListener('pointerdown', (event) => {
        let soundCode = btn.getAttribute('data-key');
        let currentBtn = btn
        document.getElementById(soundCode).currentTime = 0;
        document.getElementById(soundCode).play();
        buttons.forEach(btn => {
            btn.classList.remove('playing');
        })
        currentBtn.classList.add('playing')
        btn.addEventListener('pointerup', (event) => {
            buttons.forEach(btn => {
                btn.classList.remove('playing')
            })
        })

    })
})



