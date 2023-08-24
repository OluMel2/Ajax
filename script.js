// （API_KEY には、"取得したAPIキー" を記述）
const API_KEY = "0000000000000000000"; //APIを意図的に非表示にしています。

$(function(){
  $('#btn').on('click', function() {
    //「検索」ボタン（#btn）がクリックされたときの処理
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
    //$.ajax()は、Ajaxを実装するメソッド
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      //url:では、APIにリクエストするURLを指定します。
      //$('#cityname').val()で#citynameの値を受け取り、URLを結合させています。
      dataType : 'jsonp',
      //dataTypeでは、レスポンスとして取得したいデータの型を指定します。今回はJSONで受け取りたいので、 dataType : 'jsonp',と記述します。

      //成功時と失敗時の処理を追記する
 }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);


 }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');
    });
  });
});