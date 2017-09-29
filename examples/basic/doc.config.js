module.exports = {
    //扫描的文件路径
    paths: ['src/'],
    port: '3005',
    outdir: 'doc/',
    project: {
        name: '商家线UI库',
        description: 'phonix-ui',
        isApp: false,
        type: 'vue',
        version: '1.1.0',
        url: 'https://github.com/future-team',
        navs: [{
            name: "首页",
            url: "https://github.com/future-team"
        }, {
            name: "文档",
            url: "index.html"
        }, {
            name: "关于",
            url: "http://uedfamily.com/about/"
        }],
        menus: [{
            name: "开发指南",
            subMenus: [
                {
                    name: "安装",
                    url: "form/Button.md" //markdown 文件的绝对路径，相对于path
                },
                {
                    name: "快速上手",
                    url: "quickstart.md"
                },
            ]
        }],
        //自定义头部
        header: "",
        //自定义底部
        footer: ""
    }
};

