/*!
* simple-tabs, version 1.0.0
* Auther YAT http://wp.yat-net.com
* Copyright 2016 YAT
* Lisence GPLv3 any later version.
*/

$(function() {
     //初期表示
     $( ".tabs:first" ).addClass( "is-active" ).show();//tabs内最初のliに.activeを追加
     $( ".tab-content:first" ).show();//最初の.tab_contentを表示
     //タブクリック時
     $(".tabs").children().click( function() {
          $(".tabs").children().removeClass( "is-active" );//.is-activeを外す
          $( this ).addClass( "is-active" );//クリックタブに.is-activeを追加
          $( ".tab-content" ).hide();//全ての.tab_contentを非表示
          var activeTab = $( this ).find( "a" ).attr( "href" );//アクティブタブコンテンツ
          $( activeTab ).fadeIn();//アクティブタブコンテンツをフェードイン
          return false;
     });
});
