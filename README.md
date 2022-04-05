# RepoViewer

## Description

串接GitHub REST API，並用React實作瀏覽單一使用者GitHub repository 的網站

## Run

### Online

佈署於Netlify上 https://repoviewer.netlify.app

### Local

> 準備好Node.js

1. clone專案

```dotnetcli
git clone https://github.com/jeff3071/repoviewer.git
```

2. 進入資料夾並使用npm啟動

```dotnetcli
cd repoviewer
npm install
npm start
```

`npm start`會將網站啟動在 http://localhost:3000 上

## Architecture

```
│  App.css
│  App.js
│  App.test.js
│  AppRoute.js
│  index.js
│
├─components
│      repodetail.js
│      repoitem.js
│      userinfo.js
│
├─pages
│      repo.js
│      user.js
│
└─static
        Fork.png
        Repo.png
        Star.png
```

### Components

- repodetail.js
    - 顯示repository的資訊
- repoitem.js
    - 顯示user repository的list item
- userinfo.js
    - 顯示user的avatar、name