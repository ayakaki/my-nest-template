# my-nest-template-graphql-backend

`Nest.js`を用いたAPIサーバのテンプレートプロジェクト
※ APIクエリ言語・サーバランタイムとして`GraphQL` を使用

## FEATURE
- 環境ごとの環境変数（`@nestjs/config`を利用）
  - ローカル環境：npm run start:local
  - 開発環境：npm run start:dev
  - 本番環境：npm run start:production
- クリーンアーキテクチャをベースにディレクトリ構成
- CRUD処理のサンプル記載
- `typeORM`を用いたマイグレーション

## HOW TO USE
1. my-nest-appディレクトリ配下を複製し、対象ディレクトリに移動する
2. .gitフォルダを削除
3. package.jsonの`name`を書き換える

## BEHAVIOR CONFIRMATION
### MySQLのdockerコンテナを起動する
下記コマンドを実行
`docker-compose up -d`

### アプリケーションを立ち上げる
下記コマンドを実行（ローカルでの起動例）
`npm run start:local`

### ※ Dockerコンテナ内のMySQLを操作する
下記コマンドを事項する
`docker-compose exec db mysql -u user-graphql-trial -pP_ssw0rd -h db`

## TODO
- データベースをDockerコンテナ化して確認容易性を向上
  - シードデータを含める
- `.vscode/setting.json`に設定記載
