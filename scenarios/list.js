/* 歴史探偵事件簿 ── 事件簿一覧(ここに1行足すと新しい時代が増える)
   巻数=「時代の指定席」方式: 壱旧石器 弐縄文 参弥生 四古墳 五飛鳥 六奈良 七平安 八鎌倉 九室町 十戦国 …
   内容の多い時代は「上・下」の枝番で分割する(指定席は崩れない) */
window.SCENARIO_LIST=[
  {id:"kyusekki", no:"壱", era:"旧石器時代", title:"消えた祖先事件",
   lead:"「日本に旧石器時代はなかった」──学界の定説に、君は挑む。",
   icon:"🦣", face:"aizawa", itemTotal:8, file:"scenarios/kyusekki.js"},
  {id:"jomon", no:"弐", era:"縄文時代", title:"豊かなムラのナゾ",
   lead:"「縄文人は貧しい原始人」──二度目の定説に、再び挑め。",
   icon:"🏺", face:"tema", itemTotal:9, file:"scenarios/jomon.js"},
  {id:"yayoi", no:"参", era:"弥生時代", title:"戦うムラのナゾ",
   lead:"1万年の平和は、なぜ終わったのか──女王・卑弥呼が、君を試す。",
   icon:"🌾", face:"himiko", itemTotal:11, file:"scenarios/yayoi.js"},
  {id:"kofun", no:"四", era:"古墳時代", title:"二本の剣のナゾ",
   lead:"埼玉と熊本、900km離れた古墳から同じ大王の名が──巨大な墓は何を語る?",
   icon:"⛰️", face:"ookimi", itemTotal:10, file:"scenarios/kofun.js"},
  {id:"asuka1", no:"五・上", era:"飛鳥時代(聖徳太子編)", title:"日出づる手紙のナゾ",
   lead:"島国が大帝国に「対等」の手紙を──なぜ皇帝は怒り、なぜ使者は帰されたのか?",
   icon:"🛕", face:"shotoku", itemTotal:10, file:"scenarios/asuka1.js"},
  {id:"asuka2", soon:true, no:"五・下", era:"飛鳥時代(大化の改新編)", title:"続巻 準備中", icon:"⚡"},
  {id:"sengoku", no:"十", era:"戦国時代", title:"本能寺の変",
   lead:"信長が燃える寺に消えた。犯人に証拠をつきつけろ!",
   icon:"🏯", face:"mitsuhide", itemTotal:11, file:"scenarios/sengoku.js"}
];
