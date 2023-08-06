# 保有技能
**JavaScript/Typescript**、Java(9 系、11 系)、**Obj-c/Swift**、Docker、Vue.js、Nuxt.js、**NestJS**、Jest
Keycloak、PostgresSQL、MongoDB、Maven、Zabbix、Jenkins、

## PR

### 周りに影響を与える。

- チーム内勉強会を主催(週一)
- 社内情報共有サイトを立ち上げ

### 人材育成スキルがある

- 新人開発研修（5 日/40 人）の講師を二年連続で務める。
- OJT の経験あり。

### システム全体を俯瞰できる

- システム設計~導入を一貫して行なった経験。
- モバイルアプリ開発（iOS）、web アプリ開発開発、API サーバ開発、DB 設計、CI/CD パイプラインの開発の経験あり。

---------------------------------------------------

# 経歴

## 1. チャットサービスの機能開発/運用

社内製品であるチャットサービス(LaKeel Messenger)の開発、運用を行なった。

### 期間
2020 年　8 月 ~ 2022 年　8 月

### 内容

- 新規機能開発(iOS アプリ、サーバ)
  - webView 機能
  - 生体認証機能
  - ツリー検索機能
  - スタンプ機能

- サーバサービスのコンテナ移行
  - 通知サーバ
  - API サーバ
  - メールサーバ
  - CI/CD パイプラインの整備

### サーバOS
CentOS6

### DB
MongoDB()

### ミドルウェア等
Nginx、Zabbix(3 系)、Jenkins()、Tomcat(9 系)、Docker()

### 構成等
API サーバ : Express + Forever
DB : MongoDB + elasticSearch
web アプリ : Eclipse Virgo + Maven + FTL

### 役割
アプリ開発、バックエンド開発
DB 設計、API 設計
チームマネジメント

- チーム　4 人 ~ 11 人
- 開発　4 人 ~ 11 人

---------------------------------------------------

## 2. 認証サービスの開発/運用

社内製品である認証サービス(LaKeel Passport)の開発、運用を行なった。

### 期間
2023 年　8 月 ~ 4 月

### 内容  

- クライアント証明書基盤の社内導入
  - 証明書管理/管理サービスの導入
  - 資料の作成
  - チームマネジメント

- 社内 SNS サービスと社内認証基盤の連携
  - OIDC 認証の導入（サーバ、iOS アプリ）
  - チームマネジメント
  
- keycloak アドオンの開発
  - ログ出力アドオンの開発
  - IP でのアクセス制限アドオンの開発

### サーバOS
Alpine Linux()

### DB
PostgreSQL()

### ミドルウェア、ツール等
Nginx、Kibana、Keycloak(9 系)、GitLab、Docker()、Kubenetes、AWS

### 構成
API サーバ : NestJS() + TypeORM() + Jest()
web アプリ : Vue.js/Nuxt.js(3 系) + Vite() + Element ui

### 役割規模
アドオン開発、フロントエンド開発
システム設計
チームマネジメント

- チーム　7 人
- 開発　5 人

---------------------------------------------------

## 3. webPush管理サービスの先行開発

webPush を web サービスに簡単に導入できるサービスを開発した

### 期間
2023 年　4 月 ~ 5 月

### 内容  

- Nuxt.js サービス用の通知ライブラリの開発
- 通知 API、通知管理 API の開発
- 通知管理 DB の作成

### サーバOS
Alpine Linux

### DB
MongoDB

### ミドルウェア、ツール等
Kong、Kibana、GitLab、Docker、Kubenetes、AWS

### 構成
API サーバ : NestJS + TypeORM + Jest
web アプリ : Vue.js/Nuxt.js(3 系) + Vite +  Element ui

### 役割規模
フロントエンド/バックエンド開発
システム設計

- チーム　1 人

---------------------------------------------------

## 4. 社内フロントエンド開発基盤のvue3移行

### 期間
2023 5 月 ~ 現在

### 内容

- 社内フロントエンド開発基盤（LaKeel Visual Mosaic)の vue2 から vue3 への移行）
- 社内純正ライブラリの vue3 移行
- 社内開発テンプレートの vue3 移行
- 社内開発標準の作成

※ LaKeel Visual Mosaic について

- vue.js コンポーネントの管理サイト
- 登録したコンポーネントの管理/プレビュー/組み合わせを行う

https://dx.lakeel.com/news/20210414

### サーバOS
Alpine Linux

### DB
PostgreSQL

### ミドルウェア、ツール等
Kong、Kibana、GitLab、Docker、Kubenetes、AWS

### 構成
API サーバ : NestJS + TypeORM + Jest
web アプリ : Vue.js/Nuxt.js(3 系) + Vite +  Element ui

### 役割規模
フロントエンド開発
ライブラリ開発
プロジェクト構成設計

- チーム　6 人
- 開発　5 人
