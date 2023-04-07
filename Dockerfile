# ベースイメージを選択 (Node.js)
FROM node:14

# ワークディレクトリを設定
WORKDIR /usr/src/app/my-nest-app

# package.jsonとpackage-lock.jsonをコピー
COPY my-nest-app/package*.json ./

# 依存関係をインストール
RUN npm ci

# ソースコードをコピー
COPY my-nest-app/ ./

# ビルド
RUN npm run build

# ポート3000を開放
EXPOSE 3000

# コンテナを実行する際に実行されるコマンド
CMD ["npm", "run", "start:local"]
