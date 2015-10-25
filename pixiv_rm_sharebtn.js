// ==UserScript==
// @name           pixiv_rm_sharebtn
// @namespace      http://shikato.org/pixiv_rm_likebtn
// @author         shikato
// @description    pixivの「いいね」などの危険なシェア系ボタンを削除します
// @version        0.0.1
// @include        http://www.pixiv.net/member_illust.php*
/* load jQuery */  
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js  
// ==/UserScript==  
setInterval(function () {
  if (!$('.share-button').length) return;
  $('.share-button').remove(); 
}, 300);
 
