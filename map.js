/* =========================================================
   発音すごろく
   四角い渦巻きマップ
   50マス・分岐なし
========================================================= */

const MAP_DATA = {

  nodes: [

    /* START */
    {
      id: "start",
      progress: 0,
      label: "START",
      type: "start",
      x: 5,
      y: 90
    },

    /* =========================
       下側：右へ
    ========================= */

    { id:"n1",  progress:1,  label:"1",  type:"normal", x:11, y:90 },
    { id:"n2",  progress:2,  label:"2",  type:"normal", x:17, y:90 },
    { id:"n3",  progress:3,  label:"3",  type:"normal", x:23, y:90 },
    { id:"n4",  progress:4,  label:"🎁", type:"item",   x:29, y:90 },
    { id:"n5",  progress:5,  label:"5",  type:"normal", x:35, y:90 },
    { id:"n6",  progress:6,  label:"6",  type:"normal", x:41, y:90 },
    { id:"n7",  progress:7,  label:"7",  type:"normal", x:47, y:90 },
    { id:"n8",  progress:8,  label:"🌠", type:"event",  x:53, y:90 },
    { id:"n9",  progress:9,  label:"9",  type:"normal", x:59, y:90 },
    { id:"n10", progress:10, label:"10", type:"normal", x:65, y:90 },
    { id:"n11", progress:11, label:"11", type:"normal", x:71, y:90 },
    { id:"n12", progress:12, label:"12", type:"normal", x:77, y:90 },
    { id:"n13", progress:13, label:"13", type:"normal", x:83, y:90 },

    /* =========================
       右側：上へ
    ========================= */

    { id:"n14", progress:14, label:"🎁", type:"item",   x:89, y:82 },
    { id:"n15", progress:15, label:"15",  type:"normal", x:89, y:72 },
    { id:"n16", progress:16, label:"16",  type:"normal", x:89, y:62 },
    { id:"n17", progress:17, label:"17",  type:"normal", x:89, y:52 },
    { id:"n18", progress:18, label:"🌠", type:"event",  x:89, y:42 },
    { id:"n19", progress:19, label:"19",  type:"normal", x:89, y:32 },
    { id:"n20", progress:20, label:"20",  type:"normal", x:89, y:22 },

    /* =========================
       上側：左へ
    ========================= */

    { id:"n21", progress:21, label:"21",  type:"normal", x:83, y:14 },
    { id:"n22", progress:22, label:"22",  type:"normal", x:77, y:14 },
    { id:"n23", progress:23, label:"23",  type:"normal", x:71, y:14 },
    { id:"n24", progress:24, label:"🎁", type:"item",   x:65, y:14 },
    { id:"n25", progress:25, label:"25",  type:"normal", x:59, y:14 },
    { id:"n26", progress:26, label:"26",  type:"normal", x:53, y:14 },
    { id:"n27", progress:27, label:"🎁", type:"item",   x:47, y:14 },
    { id:"n28", progress:28, label:"28",  type:"normal", x:41, y:14 },
    { id:"n29", progress:29, label:"29",  type:"normal", x:35, y:14 },
    { id:"n30", progress:30, label:"🌠", type:"event",  x:29, y:14 },
    { id:"n31", progress:31, label:"31",  type:"normal", x:23, y:14 },
    { id:"n32", progress:32, label:"32",  type:"normal", x:17, y:14 },

    /* =========================
       左側：下へ
    ========================= */

    { id:"n33", progress:33, label:"33",  type:"normal", x:10, y:22 },
    { id:"n34", progress:34, label:"🎁", type:"item",   x:10, y:32 },
    { id:"n35", progress:35, label:"35",  type:"normal", x:10, y:42 },
    { id:"n36", progress:36, label:"36",  type:"normal", x:10, y:52 },
    { id:"n37", progress:37, label:"37",  type:"normal", x:10, y:62 },
    { id:"n38", progress:38, label:"38",  type:"normal", x:10, y:72 },

    /* =========================
       内側：右へ
    ========================= */

    { id:"n39", progress:39, label:"39",  type:"normal", x:17, y:76 },
    { id:"n40", progress:40, label:"40",  type:"normal", x:24, y:76 },
    { id:"n41", progress:41, label:"41",  type:"normal", x:31, y:76 },
    { id:"n42", progress:42, label:"🎁", type:"item",   x:38, y:76 },
    { id:"n43", progress:43, label:"43",  type:"normal", x:45, y:76 },
    { id:"n44", progress:44, label:"🌠", type:"event",  x:52, y:76 },

    /* =========================
       内側：上へ
    ========================= */

    { id:"n45", progress:45, label:"45",  type:"normal", x:59, y:69 },
    { id:"n46", progress:46, label:"46",  type:"normal", x:59, y:59 },
    { id:"n47", progress:47, label:"🎁", type:"item",   x:59, y:49 },

    /* =========================
       中央へ
    ========================= */

    { id:"n48", progress:48, label:"48", type:"normal", x:52, y:42 },
    { id:"n49", progress:49, label:"49", type:"normal", x:45, y:42 },

    /* GOAL */
    {
      id: "goal",
      progress: 50,
      label: "GOAL",
      type: "goal",
      x: 38,
      y: 42
    }

  ],

  /* =========================================================
     一本道
  ========================================================= */

  links: [

    ["start","n1"],

    ["n1","n2"],
    ["n2","n3"],
    ["n3","n4"],
    ["n4","n5"],
    ["n5","n6"],
    ["n6","n7"],
    ["n7","n8"],
    ["n8","n9"],
    ["n9","n10"],
    ["n10","n11"],
    ["n11","n12"],
    ["n12","n13"],

    ["n13","n14"],
    ["n14","n15"],
    ["n15","n16"],
    ["n16","n17"],
    ["n17","n18"],
    ["n18","n19"],
    ["n19","n20"],

    ["n20","n21"],
    ["n21","n22"],
    ["n22","n23"],
    ["n23","n24"],
    ["n24","n25"],
    ["n25","n26"],
    ["n26","n27"],
    ["n27","n28"],
    ["n28","n29"],
    ["n29","n30"],
    ["n30","n31"],
    ["n31","n32"],

    ["n32","n33"],
    ["n33","n34"],
    ["n34","n35"],
    ["n35","n36"],
    ["n36","n37"],
    ["n37","n38"],

    ["n38","n39"],
    ["n39","n40"],
    ["n40","n41"],
    ["n41","n42"],
    ["n42","n43"],
    ["n43","n44"],

    ["n44","n45"],
    ["n45","n46"],
    ["n46","n47"],

    ["n47","n48"],
    ["n48","n49"],
    ["n49","goal"]

  ]

};
