"use strict";
console.log(' %c Theme Cuteen Version%s%c https://blog.zwying.com/ ', 'color: #fff; background: #2dce89; padding:5px;', CuteenConfig.theme_version, 'background: #1c2b36; padding:5px;');
let Cuteen = {
    PostTOC: () => {
        const el = document.querySelector('#post');
        if (el) {
            tocbot.init({
                tocSelector: '#Toc',
                contentSelector: '#post',
                headingSelector: 'h1,h2,h3,h4,h5,h6',
                scrollSmoothDuration: 800,
                scrollSmooth: !0,
                scrollSmoothOffset: -60,
                headingsOffset: 60
            });
        }
    },
    RandomTagsColor: () => {
        const color = ['green', 'red', 'amber', 'indigo', 'sky']
        const el = document.querySelectorAll('#tag a')
        if (el) {
            el.forEach((element, index) => {
                element.classList.add('bg-' + color[index % 5] + '-50', 'text-' + color[index % 5] + '-500')
            })
        }
    },
    DarkModeToggle: () => {
        const night = localStorage.getItem('dark') || 'false'
        const html = document.getElementsByTagName('html')[0]
        const lightLogo = document.getElementById('light-logo')
        const darkLogo = document.getElementById('dark-logo')
        const darkPrism = document.querySelector('link[title="dark-prism"]')
        const lightPrism = document.querySelector('link[title="light-prism"]')
        if (night === 'true') {
            localStorage.setItem('dark', 'false')
            html.classList.remove("dark")
            if (lightLogo) {
                lightLogo.classList.add("block")
                lightLogo.classList.remove("hidden")
            }
            if (darkLogo) {
                darkLogo.classList.remove("block")
                darkLogo.classList.add("hidden")
            }
            if (darkPrism && lightPrism) {
                darkPrism.disabled = true
                lightPrism.disabled = false
            }
        }
        if (night === 'false') {
            html.classList.add("dark")
            localStorage.setItem('dark', 'true')
            if (lightLogo) {
                lightLogo.classList.remove("block")
                lightLogo.classList.add("hidden")
            }
            if (darkLogo) {
                darkLogo.classList.add("block")
                darkLogo.classList.remove("hidden")
            }
            if (darkPrism && lightPrism) {
                darkPrism.disabled = false
                lightPrism.disabled = true
            }
        }
    },
    CheckDarkMode: () => {
        const night = localStorage.getItem('dark')
        const html = document.getElementsByTagName('html')[0]
        const lightLogo = document.getElementById('light-logo')
        const darkLogo = document.getElementById('dark-logo')
        const darkPrism = document.querySelector('link[title="dark-prism"]')
        const lightPrism = document.querySelector('link[title="light-prism"]')
        if (night === 'true') {
            html.classList.add("dark")
            localStorage.setItem('dark', 'true')
            if (lightLogo) {
                lightLogo.classList.remove("block")
                lightLogo.classList.add("hidden")
            }
            if (darkLogo) {
                darkLogo.classList.add("block")
                darkLogo.classList.remove("hidden")
            }
            if (darkPrism && lightPrism) {
                darkPrism.disabled = false
                lightPrism.disabled = true
            }
        }
        if (night === 'false') {
            html.classList.remove("dark")
            localStorage.setItem('dark', 'false')
            if (lightLogo) {
                lightLogo.classList.add("block")
                lightLogo.classList.remove("hidden")
            }
            if (darkLogo) {
                darkLogo.classList.remove("block")
                darkLogo.classList.add("hidden")
            }
            if (darkPrism && lightPrism) {
                darkPrism.disabled = true
                lightPrism.disabled = false
            }
        }
    }
}

function PjaxLoad() {
    Cuteen.PostTOC()
    Cuteen.RandomTagsColor()
}

document.addEventListener('DOMContentLoaded', function (event) {
    PjaxLoad()
    Cuteen.CheckDarkMode()
});