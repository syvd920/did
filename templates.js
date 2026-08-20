
window.DEFAULT_TEMPLATES = [
  {
    id: "tpl1",
    name: "기본 매물형",
    hasPhoto: true,
    photoSplit: 1,
    orientations: {
      landscape: { width: 1400, height: 1080 },
      portrait: { width: 1080, height: 1300 }
    },
    fields: [
      { key:"headline", label:"메인카피", x:70, y:690, fontSize:70, color:"#ffffff", weight:900, align:"left" },
      { key:"subcopy", label:"서브카피", x:70, y:845, fontSize:32, color:"#ffffff", weight:700, align:"left" },
      { key:"price", label:"가격", x:70, y:915, fontSize:48, color:"#ffd54a", weight:900, align:"left" },
      { key:"agency", label:"상호", x:1325, y:915, fontSize:27, color:"#ffffff", weight:800, align:"right" },
      { key:"phone", label:"연락처", x:1325, y:962, fontSize:24, color:"#ffffff", weight:700, align:"right" }
    ]
  },
  {
    id: "tpl2",
    name: "사진없는 정보형",
    hasPhoto: false,
    photoSplit: 0,
    orientations: {
      landscape: { width: 1400, height: 1080 },
      portrait: { width: 1080, height: 1300 }
    },
    fields: [
      { key:"headline", label:"메인카피", x:70, y:120, fontSize:76, color:"#111111", weight:900, align:"left" },
      { key:"subcopy", label:"서브카피", x:74, y:300, fontSize:34, color:"#555555", weight:700, align:"left" },
      { key:"price", label:"가격", x:74, y:390, fontSize:52, color:"#0d6efd", weight:900, align:"left" },
      { key:"agency", label:"상호", x:74, y:940, fontSize:28, color:"#111111", weight:800, align:"left" },
      { key:"phone", label:"연락처", x:74, y:985, fontSize:24, color:"#555555", weight:700, align:"left" }
    ]
  }
];
