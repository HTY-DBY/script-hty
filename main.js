// ==UserScript==
// @name         hty 脚本
// @description  hty 的小脚本，个人使用向，不建议社会人士下载
// @version      1.0
// @author       hty
// @namespace    https://github.com/HTY-DBY/script-hty
// @icon         https://hty.ink/logo.jpg
// @grant        none
// @match        *://*.csdn.net/*
// @match        *://*.google.com/*
// @match        *://*.bing.com/*
// @match        *://*.soujianzhu.cn/*
// @match        *://*.bilibili.com/*
// @match        *://*.baidu.com/*
// @match        *://*.yutu.cn/*
// @match        *://*.zhihu.com/*
// @license      MIT
// ==/UserScript==

// @note         1.0 个人使用向，不建议社会人士下载

// bing 刷新
if (window.location.href == 'https://www4.bing.com/#reloaded') {
    window.location.href = "https://www4.bing.com"
} else {
    //获取当前网页url
    var url = window.location.host

    var Dark_hty = url => {
        // 黑暗模式
        // google 黑暗
        if (url == "www.google.com.hk" || url == "www.google.com") {
            let timer = setInterval(function () {
                let OK = 0
                try {
                    document.body.style.backgroundColor = "black"
                    document.getElementsByClassName('yg51vc')[0].style.height = "55px"
                    document.getElementsByClassName('yg51vc')[0].style.backgroundColor = "black"
                    OK = 1
                } catch { }
                if (OK == 1) {
                    clearInterval(timer)
                }
            }, 200)
        }

        // 知乎 黑暗
        if (url == "www.zhihu.com" || url == "zhuanlan.zhihu.com") {
            // 评论区懒加载，故这个计时器不请
            let timer = setInterval(function () {
                // let OK = 0
                try {
                    let alist_1ygdre8 = document.getElementsByClassName('css-1ygdre8')
                    for (let idx = 0; idx < alist_1ygdre8.length; idx++) {
                        document.getElementsByClassName('css-1ygdre8')[idx].style.color = "white"
                    }
                    let alist_1rd0h6f = document.getElementsByClassName('css-1rd0h6f')
                    for (let idx = 0; idx < alist_1rd0h6f.length; idx++) {
                        document.getElementsByClassName('css-1rd0h6f')[idx].style.color = "#bfbfbf"
                    }
                } catch { }
            }, 200)
        }

        // baidu 黑暗
        if (url == "www.baidu.com") {
            let timer = setInterval(function () {
                let OK = 0
                try {
                    document.body.style.backgroundColor = "black"
                    document.getElementById("head").style.backgroundColor = "black"
                    document.getElementsByClassName('s_tab_inner s_tab_inner_81iSw')[0].style.backgroundColor = "black"
                    OK = 1
                } catch { }
                if (OK == 1) {
                    clearInterval(timer)
                }
            }, 200)
        }

        // bilibili 黑暗
        if (url == "www.bilibili.com") {
            let timer_footer = setInterval(function () {
                let OK = 0
                try {
                    document.getElementById("comment").getElementsByClassName("comment-container")[0].style.backgroundColor = "black"
                    OK = 1
                } catch { }
                if (OK == 1) {
                    clearInterval(timer_footer)
                }
            }, 200)
        }

        // bing 黑暗
        if (url == "www.bing.com" || url == "cn.bing.com" || url == "www.bing.cn" || url == "www4.bing.com") {
            // 为了防止首页产生性能损失，在开头做了一个判断语句
            if (document.getElementsByClassName("b_searchboxForm")[0]) {
                let timer = setInterval(function () {
                    let OK = 0
                    try {
                        document.body.style.backgroundColor = "black"
                        let a = document.getElementsByClassName("b_scopebar")[0]
                        let b = a.getElementsByTagName("ul")[0]
                        let c = b.getElementsByTagName("li")
                        for (let idx = 0; idx < c.length; idx++) {
                            let d = c[idx].getElementsByTagName("a")
                            console.log(d[0])
                            d[0].style.color = "#ffffff"
                        }
                        OK = 1
                    } catch { }
                    if (OK == 1) {
                        clearInterval(timer)
                    }
                }, 200)
            }
            // 这里是处理 [图片]分支 的 [黑暗]
            if (document.getElementById("b_header")) {
                let timer = setInterval(function () {
                    let OK = 0
                    try {
                        document.getElementById("b_header").style.backgroundColor = "black"
                        document.getElementById("rfPane").style.backgroundColor = "black"
                        document.getElementsByClassName("dg_b")[0].style.backgroundColor = "black"
                        OK = 1
                    } catch { }
                    if (OK == 1) {
                        clearInterval(timer)
                    }
                }, 200)
            }
        }
    }

    // head事件
    var Head_hty = url => {
        // 滚动函数
        let scroll_hty = (element, scrollS) => {
            if (scrollS > 0) {
                element.slideUp(100)
            } else {
                element.slideDown(100)
            }
        }

        // bilibili head
        // b站请使用旧版模式，并配合广告插件，这样好处理
        // 不清计时器，该处懒加载，可能语句有延迟
        // 该处不放入 Head_pretreatment 是为了防止无限计时器产生
        if (url == "www.bilibili.com" && window.location.pathname.substring(window.location.pathname.indexOf("/", 0) + 1, window.location.pathname.indexOf("/", 1)) == "bangumi") {
            let timer = setInterval(function () {
                try {
                    document.getElementsByClassName("bili-header__bar")[0].style.position = 'absolute'
                } catch { }
            }, 200)
        }

        let Head_pretreatment = url => {
            // 谷歌的建议用广告插件代替，屏蔽 class: minidiv 元素即可

            // baidu head
            if (url == "baidu.com" || url == "www.baidu.com") {
                document.getElementById('head').style.position = 'absolute'
            }

            // 羽兔 head
            if (url == "www.yutu.cn") {
                document.getElementsByClassName('soft-nav')[0].style.position = 'relative'
            }

            // CSDN head
            if (url == "blog.csdn.net" || url == "stitch.blog.csdn.net" || url == "ideashare.blog.csdn.net") {
                var mutationObserver_Related_Searches = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        // 当DOM元素发送改变时执行的函数体
                        try {
                            document.getElementById("csdn-toolbar").style.position = 'relative'
                        } catch { }
                    })
                })
                mutationObserver_Related_Searches.observe(document.getElementById("csdn-toolbar"), {
                    attributes: true,
                    characterData: true,
                    childList: true,
                    subtree: true,
                    attributeOldValue: true,
                    characterDataOldValue: true,
                    style: true
                })
            }

            // soujianzhu head
            if (url == "soujianzhu.cn" || url == "www.soujianzhu.cn") {
                document.getElementsByClassName('ptb_st2')[0].style.position = 'absolute'
            }
        }

        Head_pretreatment(url)

        // 用滚动 处理 head 事件
        window.addEventListener("scroll", (event) => {
            let scrollS = document.documentElement.scrollTop

            // 该处是担心 head_pretreatment 加载缓慢被刷语句，故再来一次
            Head_pretreatment(url)

            // 示例代码
            // if (url == 'xxx') {
            //     if ($("#Header")) {
            //         let head = $("#Header")
            //         scroll_hty(head, scrollS)
            //     }
            // }

        })
    }

    // 其他处理
    var Other_hty = url => {
        // CSDN bode
        if (url == "blog.csdn.net" || url == "stitch.blog.csdn.net" || url == "ideashare.blog.csdn.net") {
            let timer = setInterval(function () {
                try {
                    document.getElementById("mainBox").setAttribute("class", "container clearfix container-concision")
                } catch { }
            }, 200)
        }

        // bilibili
        if (url == "www.bilibili.com") {
            // 宽屏
            // 这里用了多个 if 判别，是因为 b站 的一些迷惑设计
            if (document.getElementById('bilibili-player')) {
                let timer = setInterval(function () {
                    if (!document.getElementsByClassName('bpx-state-entered')[0]) {
                        try {
                            document.getElementsByClassName('bpx-player-ctrl-wide')[0].click()
                        } catch { }
                    }
                    if (!document.getElementsByClassName('squirtle-video-widescreen squirtle-video-item active')[0]) {
                        try {
                            document.getElementsByClassName('squirtle-video-widescreen squirtle-video-item')[0].click()
                        } catch { }
                    }
                    if (!document.getElementsByClassName('bilibili-player-video-btn bilibili-player-video-btn-widescreen closed')[0]) {
                        try {
                            document.getElementsByClassName('bilibili-player-video-btn bilibili-player-video-btn-widescreen')[0].click()
                        } catch { }
                    }
                    if (getComputedStyle(document.querySelector("#bilibili-player"), null).position == 'relative') {
                        clearInterval(timer)
                    }
                }, 200)
            }
            // 评论右置
            if (document.getElementById('bilibili-player')) {
                let hty_set = '340px'
                // bangumi
                if (url == "www.bilibili.com" && window.location.pathname.substring(window.location.pathname.indexOf("/", 0) + 1, window.location.pathname.indexOf("/", 1)) == "bangumi") {
                    let timer = setInterval(function () {
                        try {
                            document.getElementsByClassName('plp-l')[0].style.position = 'absolute'
                            document.getElementsByClassName('comment-wrapper')[0].style.paddingLeft = hty_set
                            document.getElementsByClassName('review-module')[0].style.paddingLeft = hty_set
                            document.getElementsByClassName('media-info')[0].style.paddingLeft = hty_set
                            for (let idx = 0; idx < document.getElementsByClassName('split-line').length; idx++) {
                                document.getElementsByClassName('split-line')[idx].style.borderTop = 'none'
                            }
                            document.getElementsByClassName('tool-bar')[0].style.paddingLeft = hty_set
                            document.getElementsByClassName('plp-r')[0].style.right = 'auto'
                        } catch { }
                    }, 200)
                }
                // video
                if (url == "www.bilibili.com" && window.location.pathname.substring(window.location.pathname.indexOf("/", 0) + 1, window.location.pathname.indexOf("/", 1)) == "video") {
                    let timer = setInterval(function () {
                        try {
                            document.getElementsByClassName('l-con')[0].style.width = 'auto'
                            document.getElementsByClassName('r-con')[0].style.position = 'absolute'
                            document.getElementsByClassName('r-con')[0].style.marginLeft = '0'
                            document.getElementsByClassName('video-info')[0].style.textAlign = 'right'
                            document.getElementsByClassName('video-data')[0].style.display = 'block'
                            document.getElementsByClassName('comment')[0].style.paddingLeft = hty_set
                            document.getElementsByClassName('video-toolbar')[0].style.paddingLeft = hty_set
                            document.getElementsByClassName('video-desc')[0].style.paddingLeft = hty_set
                            document.getElementsByClassName('report-scroll-module')[0].style.paddingLeft = hty_set
                            document.getElementsByClassName('tag-area')[0].style.paddingLeft = hty_set
                            document.getElementsByClassName('b-head')[0].style.paddingLeft = hty_set
                            document.getElementsByClassName('v-wrap')[0].style.justifyContent = 'left'
                        } catch { }
                    }, 200)
                }
            }
        }

        // google search
        if (url == "www.google.com.hk" || url == "www.google.com") {
            let timer = setInterval(function () {
                let OK = 0
                try {
                    document.getElementById("tsf").style.cssText = "--center-abs-margin: 365px"
                    document.getElementById("hdtb-msb").style.cssText = "--center-abs-margin: 0px background-color: black"
                    // 这一段是为了修改 脚本[AC-baidu-重定向优化百度搜狗谷歌必应搜索_favicon_双列] 的bug
                    document.getElementsByClassName('AC-GoogleGridDelta-Style')[0].outerText = ''
                    OK = 1
                } catch { }
                if (OK == 1) {
                    clearInterval(timer)
                }
            }, 200)
        }

        // bing
        if (url == "www.bing.com" || url == "cn.bing.com" || url == "www.bing.cn" || url == "www4.bing.com"
        ) {
            try {
                if (window.location.search.indexOf("FORM") == 1 || window.location.search.indexOf("ensearch") == 1) {
                    window.location.href = "https://www4.bing.com"
                }
            } catch { }
            try {
                document.getElementById("est_switch").style.paddingRight = '0%'
                document.getElementById("est_switch").style.marginLeft = '36%'
            } catch { }
            // 为了防止其他页产生性能损失，在开头做了一个判断语句
            if (document.getElementsByClassName("sbox ")[0]) {
                // 首页搜索框居中
                try {
                    document.getElementsByClassName("sbox ")[0].style.margin = "0px auto"
                    document.getElementsByClassName("sbox ")[0].style.position = 'inherit'
                } catch { }
                let timer_footer = setInterval(function () {
                    let OK = 0
                    try {
                        // 修改搜索框样式使其居中
                        document.getElementsByClassName("sbox ")[0].style.margin = "0px auto"
                        document.getElementsByClassName("sbox ")[0].style.position = 'inherit'
                        // 顺便清除下底部 footer
                        document.getElementById("footer").style.display = "none"
                        document.getElementById("vs_cont").style.display = "none"
                        OK = 1
                    } catch { }
                    if (OK == 1) {
                        clearInterval(timer_footer)
                    }
                }, 200)
            }
            // 为了防止首页产生性能损失，在开头做了一个判断语句
            if (document.getElementsByClassName("b_searchboxForm")[0]) {
                // 去除搜索时弹出的 Related Searches
                let timer_Related_Searches = setInterval(function () {
                    let OK = 0
                    try {
                        // 监听变化
                        var mutationObserver_Related_Searches = new MutationObserver(function (mutations) {
                            mutations.forEach(function (mutation) {
                                // 当DOM元素发送改变时执行的函数体
                                try {
                                    document.getElementsByClassName("b_searchboxForm as_rsform")[0].className = 'b_searchboxForm'
                                } catch { }
                                try {
                                    document.getElementsByClassName("b_focus as_rsform")[0].className = 'b_focus'
                                } catch { }
                                try {
                                    document.getElementById("as_foot").remove()
                                } catch { }
                                try {
                                    document.getElementsByClassName("sa_drw")[0].style.borderRadius = '0px 0px 24px 24px'
                                } catch { }
                            })
                        })
                        mutationObserver_Related_Searches.observe(document.getElementsByClassName("b_searchboxForm")[0], {
                            attributes: true,
                            characterData: true,
                            childList: true,
                            subtree: true,
                            attributeOldValue: true,
                            characterDataOldValue: true
                        })
                        OK = 1
                    } catch { }
                    if (OK == 1) {
                        clearInterval(timer_Related_Searches)
                    }
                }, 200)
            }
        }
    }

    // 动画处理
    var Anime_hty = url => {
        // google anime
        // 不清计时器，该处懒加载，可能语句有延迟
        if (url == "www.google.com.hk" || url == "www.google.com") {
            let timer = setInterval(function () {
                try {
                    document.getElementById("tsf").style.animationName = "null"
                } catch { }
            }, 200)
        }

        // baidu anime
        if (url == "www.baidu.com") {
            let timer = setInterval(function () {
                try {
                    document.querySelector(".head_wrapper").style.animationName = "null"
                } catch { }
                if (document.querySelector(".head_wrapper").style.animationName == "null") {
                    clearInterval(timer)
                }
            }, 200)
        }
    }

    Dark_hty(url)
    Head_hty(url)
    Other_hty(url)
    Anime_hty(url)

}
