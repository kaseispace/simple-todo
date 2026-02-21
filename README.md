# 📝 Memo App

シンプルなメモ管理アプリです。

Nuxt4 を使ったフルスタック構成で、CRUD機能・バリデーションまで一通り実装しています。

## 🚀 Features

- カテゴリごとのタスク管理
- カテゴリの追加・編集・削除
- タスクの追加・削除
- ダークモード対応
- API バリデーション（Zod）
- トースト通知による操作フィードバック
- Prisma Data Platformを利用したクラウドDB運用

## 🛠 Tech Stack

**Frontend**

- Nuxt 4
- Vue 3
- Nuxt UI

**Backend / Database**

- Nuxt Server API
- Prisma ORM
- Prisma Data Platform（Prisma Postgres）

**Validation / Schema**

- Zod

## 🏗 Architecture

以下は本アプリの簡単な構成図です。

![インフラ構成図](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3954066/c3198e0b-69fc-43c9-8610-40f586952927.png)

## ✨ Implementation Notes

- **Nuxt 4 の Server API** を利用してフロントエンドとバックエンドを同一プロジェクト内で構築し、
  Nuxtだけで完結するフルスタック開発を体験しました。

- データベース操作には**Prisma ORM**を採用し、型安全にCRUD処理を実装しています。
  またPrisma Data Platformを利用することで、クラウド上でデータベースを管理しました。

- APIの入力チェックには**Zod**を導入し、バリデーションと型定義をスキーマベースで統一しました。
  フロントとサーバで同じルールを共有できるため、保守性の高い構成になっています。

- UIには**Nuxt UI**を採用し、コンポーネントを活用しながら開発速度と画面の統一感を意識しました。