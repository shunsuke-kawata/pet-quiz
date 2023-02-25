# バックエンド(FastAPI)

## ・installが必要なもの

- python(自分の環境は3.9)

    ```python --version``` で確認できる

### ・FastAPIAppの起動手順

1. クローンしたフォルダ(gabaithon230303_team2)の中の```/backend```フォルダまで移動する
2. ```/backend```フォルダで以下のコマンドを実行する

    - pipでinstallする人 `pip install -r requirements.txt` 
    - condaでinstallする人 `conda install fastapi==0.92.0 uvicorn==0.20.0` (pipでもいいかもしれんけどあんま詳しくわかりませんでした)

3. インストールの終了を確認したら、起動してみる

   1. `run.py`ファイルを実行する

        `python3 run.py` ,`python run.py` または コードエディタの実行ボタンなど

   2. 以下のような画面が表示されると、[http://localhost:8000/](http://localhost:8000/)でreactアプリケーションが起動する

   ```
    INFO:     Started server process [2952]
    INFO:     Waiting for application startup.
    INFO:     Application startup complete.
    INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
   ```

   3. 「{"gabaithon":"team2"}」と表示されていたらOK

   4. `Ctrl+C`で終了できる