module.exports = {
    //扫描的文件路径
    paths: ['src/'],
    //配置demo链接
    demoUrl: 'http://future-team.github.io/eagle-ui/examples/index.html',
    demoDir: "examples/",
    //文档页面输出路径
    outdir: 'doc/',
    project: {
        entry:"src/",
        //项目名称
        name: '商家线UI库',
        //项目描述，可以配置html，会生成到document主页
        description: 'phonix-ui',
        //是否是移动设备平台
        isApp: false,
        //版本信息
        version: '1.1.0',
        //是否隐藏defined in 注解(代码定义于第几行)
        //hideFoundAt:'true',
        //是否禁止每个class里的methods、properties、events表格
        //hideClassItemTable:'true',
        //是否隐藏tab栏
        //hideTabItemList:'true',
        //hideViewDemo:'true',
        //hideEditCode:'true',
        //设置默认active的tab，不设置的话默认激活detail tab
        //activeTab:'method',
        //地址信息
        url: 'https://github.com/future-team',
        //主页面插入的js
        //scripts:['uicode.js'],
        //导航信息
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
                    url: "install.md" //markdown 文件的绝对路径，相对于path
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

