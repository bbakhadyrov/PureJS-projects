const wrapper = document.querySelector('.wrapper');
const blocks = document.querySelectorAll('.block');
const cover = document.querySelector('.div_cover');
const winner_text = document.querySelector('.winner_text')
const form = document.forms[0];
const xScore = document.getElementById('x-score')
const oScore = document.getElementById('o-score')
const gameMenu = document.querySelector('.game-menu')
const btns = gameMenu.querySelectorAll('input')

let varb = 'click'
let count = 0
let winner = 'draw';


wrapper.style.top = (document.documentElement.clientHeight - wrapper.clientHeight) / 2 + 'px';


blocks.forEach((block) => {
    block.addEventListener('click', () => {
        if (varb == 'click_2' && (!block.classList.contains('click'))) {
            block.classList.add('click_2')
            varb = 'click'
            count++
            setTimeout(isWin, 100)
        } else if (varb == 'click' && (!block.classList.contains('click_2'))) {
            block.classList.add('click')
            varb = 'click_2'
            count++
            setTimeout(isWin, 100)
        }
    })
    
})


function isWin() {
    if (block_1.classList.contains('click') && block_2.classList.contains('click') && block_3.classList.contains('click')
    || block_4.classList.contains('click') && block_5.classList.contains('click') && block_6.classList.contains('click')
    || block_7.classList.contains('click') && block_8.classList.contains('click') && block_9.classList.contains('click')
    || block_1.classList.contains('click') && block_5.classList.contains('click') && block_9.classList.contains('click')
    || block_3.classList.contains('click') && block_5.classList.contains('click') && block_7.classList.contains('click')
    || block_1.classList.contains('click') && block_4.classList.contains('click') && block_7.classList.contains('click')
    || block_2.classList.contains('click') && block_5.classList.contains('click') && block_8.classList.contains('click')
    || block_3.classList.contains('click') && block_6.classList.contains('click') && block_9.classList.contains('click')) {
        blocks.forEach(block => {
            block.classList.remove('click')
            block.classList.remove('click_2')
        })
        cover.style.display = 'block'
        varb = 'click';    
        winner = 'X'    
        form.style.display = 'flex'
        form.style.top = (document.documentElement.clientHeight - form.clientHeight) / 2 + 'px'
        form.style.left = (document.documentElement.clientWidth - form.clientWidth) / 2 + 'px'
        winner_text.innerHTML = `${winner} side wins!`
        winner_text.style.color = 'red'
        count = 0
        xScore.innerHTML++
    } else if (block_1.classList.contains('click_2') && block_2.classList.contains('click_2') && block_3.classList.contains('click_2')
    || block_4.classList.contains('click_2') && block_5.classList.contains('click_2') && block_6.classList.contains('click_2')
    || block_7.classList.contains('click_2') && block_8.classList.contains('click_2') && block_9.classList.contains('click_2')
    || block_1.classList.contains('click_2') && block_5.classList.contains('click_2') && block_9.classList.contains('click_2')
    || block_3.classList.contains('click_2') && block_5.classList.contains('click_2') && block_7.classList.contains('click_2')
    || block_1.classList.contains('click_2') && block_4.classList.contains('click_2') && block_7.classList.contains('click_2')
    || block_2.classList.contains('click_2') && block_5.classList.contains('click_2') && block_8.classList.contains('click_2')
    || block_3.classList.contains('click_2') && block_6.classList.contains('click_2') && block_9.classList.contains('click_2')) {
        blocks.forEach(block => {
            block.classList.remove('click')
            block.classList.remove('click_2')
        })
        cover.style.display = 'block'
        varb = 'click';
        winner = 'O'
        form.style.display = 'flex'
        form.style.top = (document.documentElement.clientHeight - form.clientHeight) / 2 + 'px'
        form.style.left = (document.documentElement.clientWidth - form.clientWidth) / 2 + 'px'
        winner_text.innerHTML = `${winner} side wins!`
        winner_text.style.color = 'blue'
        count = 0
        oScore.innerHTML++
    }
    else if (count == 9) {
        blocks.forEach(block => {
            block.classList.remove('click_2')
            block.classList.remove('click')}) 
        varb = 'click'
        count = 0;
        cover.style.display = 'block'
        form.style.display = 'flex'
        form.style.top = (document.documentElement.clientHeight - form.clientHeight) / 2 + 'px'
        form.style.left = (document.documentElement.clientWidth - form.clientWidth) / 2 + 'px'
        winner_text.innerHTML = `Draw!`
        winner_text.style.color = 'black'
        
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault()
})
form.submit.addEventListener('click', () => {
    cover.style.display = 'none'
    form.style.display = 'none'
})

btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        blocks.forEach(block => {
            block.classList.remove('click')
            block.classList.remove('click_2')

        })
        if (btn.classList.contains('new-game')) {
            xScore.innerHTML = oScore.innerHTML = 0
            count = 0
        }
        else if (btn.classList.contains('end-game')) {
            if (xScore.innerHTML > oScore.innerHTML) {
                cover.style.display = 'block'
                form.style.display = 'flex'
                form.style.top = (document.documentElement.clientHeight - form.clientHeight) / 2 + 'px'
                form.style.left = (document.documentElement.clientWidth - form.clientWidth) / 2 + 'px'
                winner_text.innerHTML = `X is winner`
                winner_text.style.color = 'red'
                count = 0
                varb = 'click';  
            } else if (xScore.innerHTML < oScore.innerHTML) {
                cover.style.display = 'block'
                form.style.display = 'flex'
                form.style.top = (document.documentElement.clientHeight - form.clientHeight) / 2 + 'px'
                form.style.left = (document.documentElement.clientWidth - form.clientWidth) / 2 + 'px'
                winner_text.innerHTML = `O is Winner!`
                winner_text.style.color = 'blue'
                count = 0
                varb = 'click';  
            } else {
                cover.style.display = 'block'
                form.style.display = 'flex'
                form.style.top = (document.documentElement.clientHeight - form.clientHeight) / 2 + 'px'
                form.style.left = (document.documentElement.clientWidth - form.clientWidth) / 2 + 'px'
                winner_text.innerHTML = `Draw!`
                winner_text.style.color = 'black'
                count = 0
                varb = 'click';  
            }
            xScore.innerHTML = oScore.innerHTML = 0;
        }
        
    })
})