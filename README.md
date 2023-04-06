# my-nest-template-graphql-backend

`Nest.js`を用いたAPIサーバのテンプレートプロジェクト
※ APIクエリ言語・サーバランタイムとして`GraphQL` を使用

## FEATURE
- 環境ごとの環境変数（`@nestjs/config`を利用）
  - ローカル環境：npm run start:local
  - 開発環境：npm run start:dev
  - 本番環境：npm run start:production

## TODO
- CRUD処理のサンプル記載
  - 複数のテーブルからの情報を集結
- GraphQLのベストプラクティスに沿ったクエリ名
- `typeORM`を用いたマイグレーション
- データベースをDockerコンテナ化して確認容易性を向上
  - シードデータを含める
- ディレクトリ構造の整理
  - クリーンアーキテクチャに沿う形を検討中
- `.vscode/setting.json`に設定記載
