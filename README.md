# nodejs爬虫

---

- nodejs v10.12.0
- superagent v4.1.0
- cheerio v1.0.0-rc.2

```
.
├── README.md
├── config                // 配置目标网站的url
├── controllers           // 发送http请求
├── index.js              // koa应用，用来在显示器中显示爬取的数据
├── node_modules
├── package.json
├── utils                 // * 爬取原始数据的解析器
└── yarn.lock
```

因为不同网站有不同的url，所以需要针对你的网站自己写utils文件夹里面的解析器。
