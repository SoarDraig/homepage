export default defineAppConfig({
    profile: {
        name: '云螭のDraig',
        userId: 'SoarDraig',
        avatar: './img/avatar.png',
        links: [
            {
                title: 'Blog',
                icon: ['fas', 'blog'],
                href: 'https://blog.SoarDraig.top',
            },
            {
                title: 'GitHub',
                icon: ['fab', 'github'],
                href: 'https://github.com/SoarDraig',
            },
            {
                title: 'Bilibili',
                icon: ['fab', 'bilibili'],
                href: 'https://space.bilibili.com/399516150',
            },
            {
                title: 'Steam',
                icon: ['fab', 'steam'],
                href: 'https://steamcommunity.com/id/SoarDraig/',
            },
            {
                title: 'E-Mail',
                icon: ['fas', 'envelope'],
                href: 'mailto:wildragon1314@gmail.com',
            },
            {
                title: 'QQ',
                icon: ['fab', 'qq'],
                href: 'https://tool.gljlw.com/qqq/?qq=2593147206',
            },
            {
                title: 'Twitter',
                icon: ['fab', 'twitter'],
                href: 'https://twitter.com/9jHXww9u2D10025',
            }
        ],
        sponsor: {
            icon: ['fas', 'mug-saucer'],
            prompt: 'Support me make more content!',
            thanks: 'Thanks for your support!',
            pays: [
                {
                    title: 'WeChat',
                    icon: ['fab', 'weixin'],
                    qrCodeData: 'wxp://f2f0J4Xw3EB3OGthVbiOMGTzwQspicM87x_U9RpnGX6GNbE',
                },
                {
                    title: 'Alipay',
                    icon: ['fab', 'alipay'],
                    qrCodeData: 'https://qr.alipay.com/fkx14527fzzmtreoqikvf22',
                }
            ]
        }
    },
    sponsorsTitle: 'Sponsors (UTC+8)',
    sponsors: [
        {
            name: 'Test',
            money: '0.00',
            time: '2024-08-19',
            msg: 'This is a test message.'
        }
    ]
})