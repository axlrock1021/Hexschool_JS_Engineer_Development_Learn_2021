/*
  三種常見的 POST 請求 Content-Type
  使用 POST 發送 request 請求的時候，將必須告訴伺服器我們所提交的數據類型是什麼，而這通常都會透過 headers 中的 Content-Type 將相關資訊傳送給伺服器。

  以下為常見的三種 POST Content-Type:
  1.application/x-www-form-urlencoded
    這種 POST 提交數據的方式很常見，它是屬於瀏覽器 <form> 表單的原生提交方式 (也就是說，如果表單沒有設定 enctype 屬性，默認就會用這種方式提交)。
    值得注意的是，它會將提交的數據按照 key1=val1&key2=val2 的方式進行 URL 編碼。
      <form action="#">
        帳號:
        <input type="text" name="email"> <!-- key1 是 email -->
        <br>
        密碼:
        <input type="password" name="passward"> <!-- key2 是 passward -->
        <input type="submit" value="送出">
      </form>

  2.application/json
    因為 JSON 規範現在很流行，這種提交方式也已經非常普遍。這表示傳遞的數據是 JSON 格式 ，課程中所使用的 API 也是使用這種 Content-Type。

  3.multipart/form-data
    如果我們提交的檔案為 「圖片、影片」 等，就必須使用這種 Content-Type。上傳檔案的操作需要使用 <input type="file"> 這個 HTML 標籤進行，
    並且需要將資料轉成 formData 格式才能順利 POST 給伺服器。
*/

/*
  問題
  1.請問瀏覽器預設的表單提交方式，其 Content-Type 類型是什麼?
    解答 : application/x-www-form-urlencoded
    
  2.請問如果資料為 JSON 格式，則應該用哪一種 Content-Type 提交?
    解答 : application/json
    
  3.請問如果檔案為圖片、影片，則應該用哪一種 Content-Type 提交?
    解答 : multipart/form-data