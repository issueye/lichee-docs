module.exports = {
    title: 'issueye',
    description: '欢迎来到我的博客',
    base: '/',
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            { text: "lichee", link: "/lichee/" },
            { text: "项目实战", link: "/project/" }
        ],
        sidebar: {
            '/lichee/': [
                {
                    title: '使用指南',
                    collapsable: true,
                    path: '/lichee/start/',
                    children: [
                        {
                            title: 'lichee 下载',
                            path: '/lichee/start/download/'
                        },
                        {
                            title: '添加到环境变量',
                            path: '/lichee/start/download/'
                        },
                    ]
                }
            ],
            '/': ['']
        }
    }
}