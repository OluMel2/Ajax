//Ajaxとは

//「Ajax」では、JavaScriptを使って、非同期にサーバー間での通信を行います。
//たとえば、TwitterやFacebookで「いいね」ボタンを押すと、すぐに「いいね」アイコンに変わります。ページを再読み込みしたり、「送信」ボタンは押していません。
//このように「非同期通信」では、サーバにリクエストを送ったときに、サーバからの結果を待たずに画面が書き換えられます。
//この技術を実装しているのが、Ajaxです。


//Ajaxの仕組み

//イベント（ボタンのクリックなど）がクライアント側で発生する。
//「API」を使って、サーバにリクエストを送信する（非同期通信）。
//リクエストされた情報の処理をサーバ側で行う。
//処理の結果を、「JSON」形式でクライアントに送信する。
//レスポンスの結果でページが更新される。