/**
 * ハンバーガーメニューをクリック時のモーダル切替
 */
const switchHambargerMenu = () => {
    const header = document.querySelector('.header')
    if (header.classList.contains('hambarger-open')) {
        header.classList.remove('hambarger-open')
    } else {
        header.classList.add('hambarger-open')
    }
}

/**
 * ハンバーガーアイコンを押下
 */
const clickHambarger = () => {
    switchHambargerMenu()
}

const scrollEvents = () => {
    const reason__left_item = document.querySelector('.reason__left_item')
    const online_item_position = reason__left_item.getBoundingClientRect()
    if (online_item_position.top < window.innerHeight) {
        reason__left_item.classList.add('slide-left')
    }

    const reason__right_item = document.querySelector('.reason__right_item')
    const teacher_item_position = reason__right_item.getBoundingClientRect()
    if (teacher_item_position.top < window.innerHeight) {
        reason__right_item.classList.add('slide-right')
    }
}

/**
 * 初回ロード時に実行
 */
const domContentLoaded = () => {
    const hambarger = document.querySelector('.hambarger_icon')
    hambarger.addEventListener('click', clickHambarger)

    document.addEventListener('scroll', scrollEvents)
}

document.addEventListener('DOMContentLoaded', domContentLoaded)