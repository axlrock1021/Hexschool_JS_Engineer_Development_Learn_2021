/*
  完成任務可以獲得以下技能
  1. 物件與陣列讀取
  2. 物件與陣列的新增、刪除、修改
  3. 物件與陣列、搭配 if 邏輯運算子來練習
*/

/*
  題目一
  請在 obj 上新增以下內容
  1.設定屬性名為 "myName"，並賦予值為 "Tom"
  2.設定屬性名為 "age"，並賦予值為 18
  3.設定屬性名為 "pets"，並賦予值為 ["John", "Mike"]
  4.設定屬性名為 "isWakeUp"，並賦予值為 false
*/

let obj = {
  myName: "Tom",
  age: 18,
  pets: ["John", "Mike"],
  isWakeUp: false,
};
console.log(obj);

/*
  題目二
  請新增一行 code，在 colors 用 push 語法新增一筆顏色資料，名稱為 black
  請新增一行 code，寫 console.log 來印出陣列總長度筆數
*/

let colors = ["red", "black", "yellow"];
colors.push("black");
console.log(`陣列總長度為: ${colors.length}`);

/*
  題目三
  母親今年的狀態需要更新，還請協助她修改物件資料
  流程一 : 母親多了一歲，幫她累加一歲在 age 屬性對應的 value 上
  流程二 : 母親多了一位小孩，幫她在 sons 屬性新稱一位 "John"
  請新增一行 code，寫 console.log 來印出 motherStatus
*/

let motherStatus = [
  {
    name: "Mary",
    age: 31,
    sons: ["Tom", "Bob"],
  },
];
motherStatus[0].age += 1;
motherStatus[0].sons.push("John");
console.log(motherStatus[0]);

/*
  題目四 縮減版
  小杰獲得高雄旅遊網的資料，並且把資料放進 kaohsiungTravelData 物件哩，
  但是資料太雜了，他只想取出他想要的內容，還請幫幫他
  資料一 : 小杰想取得第一筆旅遊景點名稱，也就是 "佛光山"
  資料二 : 小杰想取得第二筆旅遊景點 x 座標，屬性名稱為 Px
  例 : 取出 contentType 的 value 為 kaohsiungTravelData.contentType
*/

let kaohsiungTravelData = {
  contentType: "application/json; charset=utf-8",
  isImage: false,
  data: {
    XML_Head: {
      Listname: "1",
      Language: "C",
      Orgname: "397000000A",
      Updatetime: "2021/02/24 15:42:14",
      Infos: {
        Info: [
          {
            Id: "C1_397000000A_000026",
            Status: "2",
            Name: "佛光山",
            Zone: "",
            Toldescribe:
              "佛光山寺位於大樹區北端，由星雲法師於民國56年帶領弟子披荊斬棘一磚一瓦所建，佔地五十餘公頃，與2011年新建的佛陀紀念館綿延於高屏溪右岸，大大小小的佛殿依山勢羅列，莊嚴雄渾、氣勢宏偉，是臺灣重要的佛教勝地。佛光山有四座殿堂式主建築及上萬尊的神像，另有教育、醫療、美術館等等機構，是以推動人間佛教、建設人間淨土為宗旨，綜合了弘法、教育、慈善、文化、朝聖等並行發展之現代道場。佛光山提供信眾參拜及佛學清修教育等多元環境，同時也是遊人朝聖踏青的熱門景點，尤以夕陽西下時大佛與宮殿式寺廟沐浴在暮靄霞光中更顯莊嚴恢宏、見之忘卻塵世煩憂。農曆春節到元宵期間，滿山掛滿花燈，入夜後更是光華燦爛、美不勝收。",
            Description:
              "佛光山寺由星雲法師於民國56年帶領弟子披荊斬棘一磚一瓦所建，大大小小的佛殿依山勢羅列，莊嚴雄渾、氣勢宏偉。",
            Tel: "886-7-6561921",
            Add: "高雄市840大樹區興田里興田路153號",
            Zipcode: "840",
            Travellinginfo:
              "台鐵、飛機：在高雄火車站附近轉高雄客運往旗山、美濃、甲仙、六龜等(有經佛光山路線)皆可搭乘；或搭乘台鐵至九曲堂站，再轉搭高雄客運或計程車至佛光山。高鐵：於左營高鐵站轉乘台鐵至九曲堂站，再轉搭高雄客運或計程車至佛光山。搭乘義大客運直達佛光山。台灣好行-大樹祈福線：一日券優惠價50元。哈佛快線：搭乘高雄客運「哈佛快線」從高鐵左營站經國道10號往返佛陀紀念館、佛光山之間，行程約30分...",
            Opentime: "08:30–17:30",
            Map: "",
            Gov: "397000000A",
            Px: "120.44612",
            Py: "22.74740",
            Orgclass: "",
            Level: "",
            Website: "",
            Parkinginfo: "",
            Parkinginfo_px: "",
            Parkinginfo_py: "",
            Ticketinfo: "",
            Remarks: "",
            Keyword: "",
            Changetime: "2021/02/17 10:13:42",
            Class1: "4",
            Class2: "",
            Class3: "",
            Picture1: "https://khh.travel/image/18453/640x480",
            Picdescribe1: "佛光山-大佛照",
            Picture2: "",
            Picdescribe2: "",
            Picture3: "",
            Picdescribe3: "",
          },
        ],
      },
    },
  },
  id: "a88b3594-64d6-41c7-a48e-92820beda8f7",
  success: true,
};
console.log(kaohsiungTravelData.data.XML_Head.Infos.Info[0].Name);
console.log(kaohsiungTravelData.data.XML_Head.Infos.Info[0].Px);

/*
  題目五
  宣告變數，變數名稱請符合描述情境
  依照描述賦予變數陣列與物件的屬性和值
  描述一 : 是一個家庭合照
  描述二 : 母親姓名為 Jane
  描述三 : 父親姓名為 Bill
  描述四 : 女兒姓名為 Rosa
  描述五 : 兒子姓名為 Howard
  描述六 : 有養兩隻狗，名字叫做 Bobo、Koko
*/

let arrFamilyData = [
  {
    familyGroupPhotoStatus: {
      familyPeoples: {
        motherName: "Jane",
        fatherName: "Bill",
        dougtherName: "Rosa",
        sonName: "Howard",
      },
      familyDogs: ["Bobo", "Koko"],
    },
  },
];
console.log(arrFamilyData[0]);

/*
  題目六
  宣告變數，變數名稱請符合描述情境
  依照描述賦予變數陣列與物件的屬性和值
  描述一 : 販售版寫了一棟別墅的販售資訊
  描述二 : 內容是有一個建案，名稱叫做 "六角大別墅"，地點在 "高雄市"
  描述三 : 因為太豪華，所以這個建案只有 "兩戶"
*/

let objVillaData = {
  arrHexVillaStatus: [
    {
      hexVillaPrice: 280000000,
      hexVillaNumberOfPings: 900,
      haveSwimmingPool: false,
      haveBasement: true,
      floor: 5,
      bathroom: 3,
      haveHousekeeper: false,
      isSellOff: true,
    },
    {
      hexVillaPrice: 320000000,
      hexVillaNumberOfPings: 1200,
      haveSwimmingPool: true,
      haveBasement: true,
      floor: 7,
      bathroom: 4,
      haveHousekeeper: true,
      isSellOff: false,
    },
  ],
  location: "高雄市",
};
console.log(objVillaData);

/*
  題目七
  下方為台灣一間旅館的 JSON 資料
  有一個客戶，在下週二平常日時段，將所有房型都訂了一間房
  請透過程式去計算他一共花了多少錢
*/

let roomDetail = {
  success: true,
  items: [
    {
      id: "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
      imageUrl:
        "https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      normalDayPrice: 1380,
      holidayPrice: 1500,
      name: "Single Room",
    },
    {
      id: "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ",
      imageUrl:
        "https://images.unsplash.com/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
      normalDayPrice: 1899,
      holidayPrice: 2000,
      name: "Deluxe Single Room",
    },
    {
      id: "RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg",
      imageUrl:
        "https://images.unsplash.com/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      normalDayPrice: 2460,
      holidayPrice: 2500,
      name: "Double Room",
    },
    {
      id: "kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ",
      imageUrl:
        "https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      normalDayPrice: 2888,
      holidayPrice: 3000,
      name: "Deluxe Double Room",
    },
    {
      id: "VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz",
      imageUrl:
        "https://images.unsplash.com/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      normalDayPrice: 3350,
      holidayPrice: 3500,
      name: "Twin Room",
    },
    {
      id: "YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb",
      imageUrl:
        "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      normalDayPrice: 3899,
      holidayPrice: 4000,
      name: "Deluxe Twin Room",
    },
  ],
};

let normalDayPriceTotal = 0;
for (let i = 0; i < roomDetail.items.length; i++) {
  normalDayPriceTotal += roomDetail.items[i].normalDayPrice;
}
console.log(`該客戶總共花了${normalDayPriceTotal}元`);

/*
  題目八
  老闆想要幫公司兩人都加薪到 40000 元
  請透過以下資訊修改，幫老闆做加薪的動作
*/

let salaryData = {
  company: "circle center",
  bossName: "casper",
  staff: [
    {
      name: "Bob",
      salary: 32000,
    },
    {
      name: "Jack",
      salary: 28000,
    },
  ],
};

// 第一位員工加薪邏輯
if (salaryData.staff[0].salary < 40000) {
  salaryData.staff[0].salary += 8000;
}
console.log(salaryData.staff[0].salary);

// 第二位員工加薪邏輯
if (salaryData.staff[1].salary < 40000) {
  salaryData.staff[1].salary += 12000;
}
console.log(salaryData.staff[1].salary);

/*
  題目九
  請根據以上三個 JSON 格式 API，選擇其中一個，接著用文字說明他的資料集內容
  例 : 最外層是一個陣列，陣列內包含很多個物件，物件內有 ... 屬性，值為 ...。
  高雄市政府文化局-演出活動 縮減版
*/

let arrKhccData = [
  {
    PRGID: 31836,
    PRGNAME: "「管韻悠揚」之「春風齊奏」110級畢業音樂會",
    PRGACT: "高雄市苓雅區中正國民小學",
    PRGDATE: "2021/04/28",
    PRGSTIME: "1900",
    PRGETIME: "2130",
    ORGNAME: "高雄市文化中心",
    PRGPLACE: "至德堂",
    PRGAG: "高雄市苓雅區中正國民小學",
    PRGCONT: "07-7225936 ",
    PRGTICKET: "索票",
    TICKETSYSURL: "",
    ITEMDESC:
      "高雄市苓雅區中正國小管樂團成立於民國88年，現為第22屆，樂團成立宗旨為對具有音樂興趣的學生，循有計畫的教學，訓練其演奏樂器的技巧，並藉由合奏練習，提昇學生音樂素養，培養團隊精神。樂團自成立以來成果斐然，參加音樂比賽均有優異成績。本著「獨樂樂不如眾樂樂」的想法，樂團除了在校內進行各項演出活動，帶動校內音樂風氣外，也常於校外公開場合進行演出，希望能將美好的樂聲與大眾分享，廣為散播音樂的種子，以真正落實樂團活動的教育意義。<br /> <br /> 高雄市苓雅區中正國民小學110級管樂班經過四年的培訓，無數場次的演出。所有最佳的成果將於今晚呈現出最完美的演出。規劃的演出節目內容包含了古典、爵士、動畫歌曲、耳熟能詳的歌謠等，磅礡的交響管樂曲及平易近人的小品交互搭配，配以主流作曲家的巧思編寫，由本團小朋友認真及深入的詮釋，期能展現最精彩絕倫的演奏水準。全場以「成長、感恩、傳承」為主軸，在展現小朋友多年努力成果之餘，回顧學生的學習歷程、表達感恩之心、完成樂團傳承使命，以期能呈現教育現場充滿愛與溫馨的氛圍，讓觀眾得以享受一場真正的心靈饗宴。",
    IMAGE1: "https://opendata.khcc.gov.tw/upload/art_program/318363_1.jpg",
    IMAGE2: "",
  },
];
// 最外層為一個陣列，陣列內包含多個物件，物件當中又有多個屬性及值
// 例如 : 屬性 : 值 = PRGID: 31836 、 ORGNAME: "高雄市文化中心" 、 PRGTICKET: "索票" etc...。

/*
  題目十
  請用 whimsical 服務畫 BMI 流程圖
  請參考圖片來繪製
  流程請原本的從最輕到重，改為從最重到過輕
  並提供 whimsical 網址方便檢測
*/
