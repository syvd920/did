
window.DEFAULT_TEMPLATES = [
  {
    id: "tpl1",
    name: "기본 매물형",
    hasPhoto: true,
    photoSplit: 1,
    backgrounds: { landscape:"", portrait:"" },
    orientations: {
      landscape: { width: 1400, height: 1080 },
      portrait: { width: 1080, height: 1300 }
    },
    fields: [
      { key:"dealType", label:"매물 구분", x:70, y:650, fontSize:34, color:"#ffffff", weight:800, align:"left", fontFamily:"Arial" },
      { key:"propertyName", label:"매물명", x:70, y:710, fontSize:70, color:"#ffffff", weight:900, align:"left", fontFamily:"Arial" },
      { key:"pyeong", label:"평", x:70, y:855, fontSize:34, color:"#ffffff", weight:700, align:"left", fontFamily:"Arial" },
      { key:"roomsBaths", label:"방·욕실", x:250, y:855, fontSize:34, color:"#ffffff", weight:700, align:"left", fontFamily:"Arial" },
      { key:"description", label:"매물설명", x:70, y:920, fontSize:31, color:"#ffffff", weight:700, align:"left", fontFamily:"Arial", maxWidth:1120, maxLines:2, lineHeight:40 }
    ]
  }
];
