
window.DEFAULT_TEMPLATES = [
  {
    id: "tpl1",
    name: "기본 템플릿",
    hasPhoto: true,
    panelSplit: 1,
    backgrounds: { landscape:"", portrait:"" },
    orientations: {
      landscape: { width: 1400, height: 1080 },
      portrait: { width: 1080, height: 1368 }
    },
    fields: [
      { key:"dealType", label:"매물 구분", x:40, y:40, fontSize:30, color:"#ffffff", weight:800, align:"left", fontFamily:"Arial" },
      { key:"propertyName", label:"매물명", x:40, y:95, fontSize:54, color:"#ffffff", weight:900, align:"left", fontFamily:"Arial" },
      { key:"pyeong", label:"평", x:40, y:185, fontSize:28, color:"#ffffff", weight:700, align:"left", fontFamily:"Arial" },
      { key:"roomsBaths", label:"방·욕실", x:180, y:185, fontSize:28, color:"#ffffff", weight:700, align:"left", fontFamily:"Arial" },
      { key:"description", label:"매물설명", x:40, y:240, fontSize:25, color:"#ffffff", weight:700, align:"left", fontFamily:"Arial", maxWidth:520, maxLines:2, lineHeight:34 }
    ]
  }
];
