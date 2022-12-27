# 環境
## API
ruby: 3.0.2
rails 7.0.4
graphql: 2.0.16

## DB
mysql: 5.7

## Frontend
nextJS: 13
react: 18.2.0
appollo/client: 3.7.3



# DB
![スクリーンショット 2022-12-27 23 52 53](https://user-images.githubusercontent.com/80092584/209683561-b57efab5-1806-4a44-b34c-a5d7dbda9cf6.png)

# 仕様
## 課題1
* variationsは商品規格テーブルです。在庫が要件に入る場合はここに紐ずくように想定して作っています。
* shopとorderを結びつけましたが仕入れ店と販売店は別テーブルかもしれないと後で気づきました

## 課題2
以下のような画面になっています
![スクリーンショット 2022-12-27 23 58 10](https://user-images.githubusercontent.com/80092584/209684180-72c34de9-886c-4e78-b734-6653f235c1c2.png)

## 課題3
* ファイル出力までは時間が足りませんでしたがAPIとある程度のフロントの実装は終わっています。
* papaparse-reactを使ってCSV出力をしています。
