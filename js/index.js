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

/**
 * 画面内に指定の要素が表示されたら、クラスを付与
 * @param {*} element_name
 * @param {*} add_class_name
 */
const addClassWhenSelfPos = (element_name, add_class_name) => {
    const elements = document.querySelectorAll(element_name)

    for (const element of elements) {
        const pos = element.getBoundingClientRect()
        if (pos.top < window.innerHeight) {
            element.classList.add(add_class_name)
        }
    }
}

/**
 * スクロールイベント時の処理
 */
const scrollEvents = () => {
    addClassWhenSelfPos('.reason__left_item', 'slide-left')
    addClassWhenSelfPos('.reason__right_item', 'slide-right')
    addClassWhenSelfPos('.voice__message_left', 'balloon')
    addClassWhenSelfPos('.voice__message_right', 'balloon')
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