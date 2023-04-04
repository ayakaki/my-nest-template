# my-nest-template-graphql-backend

`Nest.js`を用いたAPIサーバのテンプレートプロジェクト
※ APIクエリ言語・サーバランタイムとして`GraphQL` を使用

## FEATURE
- 環境ごとの環境変数（`@nestjs/config`を利用）
  - ローカル環境：npm run start:local
  - 開発環境：npm run start:dev
  - 本番環境：npm run start:production