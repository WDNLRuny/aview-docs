export default {
	title: 'aview',
	description: 'aview',
	lang: "zh-CN",

	lastUpdated: true,


	head: [
		['link', {
			rel: 'preconnect',
			href: 'https://g.alicdn.com/de/prismplayer/2.13.2/skins/default/aliplayer-min.css'
		}],
		['script', {
			charset: 'utf-8',
			href: 'https://g.alicdn.com/de/prismplayer/2.13.2/aliplayer-h5-min.js',
			type: 'text/javascript'
		}],
	],
	themeConfig: {
		logo: '/aview.png',
		outline: [2, 3],
		lastUpdatedText: "上次更新",
		outlineTitle: "目录",
		editLink: {
			pattern: 'https://github.com/WDNLRuny/aviewdocs/edit/main/docs/:path',
			text: '在GitHub上编辑此页面'
		},
		docFooter: {
			prev: '上一篇',
			next: '下一篇'
		},
		nav: [{
				text: '指南',
				link: '/guide/introduction',
				activeMatch: '^/guide/',
			}, {
				text: 'API',
				link: '/api/entry/summary',
				activeMatch: '^/api/',
			},
			{
				text: '范例',
				link: '/example/entry/aview',
				activeMatch: '^/example/',
			},
		],
		sidebar: {
			'/guide/': [{
				text: '指南',
				items: [{
						text: '简介',
						link: '/guide/introduction'
					},
					{
						text: '快速上手',
						link: '/guide/quick-start'
					},
					{
						text: '配置',
						link: '/guide/config'
					},
					{
						text: 'aardio',
						link: '/guide/aardio'
					},
					{
						text: 'webview2',
						link: '/guide/webview2'
					}
				]
			}, {
				text: "QQ交流群",
				items: [{
					text: "701707930"
				}]
			}],
			'/api/': [{
				text: '入门',
				items: [{
					text: '概述',
					link: '/api/entry/summary'
				}]
			}, {
				text: '基础',
				items: [{
						text: 'winform',
						link: '/api/winform'
					},
					{
						text: 'webview',
						link: '/api/webview'
					},
				]
			}, {
				text: 'fsys 文件操作',
				collapsible: true,
				collapsed: true,
				items: [{
					text: '默认库',
					link: '/api/fsys',
				}, {
					text: 'dlg',
					link: '/api/fsys',
				}, ]
			}, {
				text: 'win 窗口操作',
				collapsible: true,
				collapsed: true,
				items: [{
					text: '默认库',
					link: '/api/win',
				}]
			}],
			'/example/': [{
					text: '入门',
					items: [{
						text: 'aview',
						link: '/example/entry/aview'
					}]
				},
				{
					text: '窗口',
					items: [{
							text: '快捷键',
							link: '/example/window/hotkey'
						},
						{
							text: '菜单',
							link: '/example/window/menu'
						},
						{
							text: '视频',
							link: '/example/window/video'
						},
						{
							text: '游戏',
							link: '/example/window/game'
						}
					]
				},
				{
					text: '文件操作',
					items: [{
						text: 'File System Access API',
						link: '/example/file/File_System_Access_API'
					}, {
						text: 'fsys 文件操作',
						link: '/example/file/fsys'
					}]
				},
				{
					text: '图形图像',
					items: [{
						text: '截图',
						link: '/example/image/screenshot'
					}]
				}
			],
		},
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2022-present WDNL'
		}
	}
}
