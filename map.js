/* =========================================================
   発音すごろく
   四角い渦巻きマップ
   分岐3か所入り
========================================================= */

const MAP_DATA = {

  nodes: [

    /* =========================
       START
    ========================= */
    {
      id: "start",
      progress: 0,
      label: "START",
      type: "start",
      x: 5,
      y: 90
    },


    /* =========================
       外周・下辺
    ========================= */

    { id:"n1",  progress:1,  label:"1",  type:"normal", x:11, y:90 },
    { id:"n2",  progress:2,  label:"2",  type:"normal", x:17, y:90 },
    { id:"n3",  progress:3,  label:"3",  type:"normal", x:23, y:90 },
    { id:"n4",  progress:4,  label:"🎁", type:"item",   x:29, y:90 },
    { id:"n5",  progress:5,  label:"5",  type:"normal", x:35, y:90 },
    { id:"n6",  progress:6,  label:"6",  type:"normal", x:41, y:90 },

    /* 分岐1 */
    { id:"b1", progress:7, label:"🔀", type:"branch", x:47, y:90 },

    /* 分岐1 近道 */
    { id:"b1s1", progress:8,  label:"💤", type:"rest",   x:53, y:86 },
    { id:"b1s2", progress:9,  label:"9",   type:"normal", x:59, y:82 },

    /* 分岐1 遠回り */
    { id:"b1l1", progress:8,  label:"🎁", type:"item",   x:51, y:95 },
    { id:"b1l2", progress:9,  label:"9",   type:"normal", x:57, y:96 },
    { id:"b1l3", progress:10, label:"🎁", type:"item",   x:63, y:94 },
    { id:"b1l4", progress:11, label:"11",  type:"normal", x:67, y:88 },

    /* 合流 */
    { id:"n12", progress:12, label:"12", type:"normal", x:71, y:82 },
    { id:"n13", progress:13, label:"13", type:"normal", x:77, y:78 },


    /* =========================
       外周・右辺
    ========================= */

    { id:"n14", progress:14, label:"🎁", type:"item",   x:83, y:72 },
    { id:"n15", progress:15, label:"15",  type:"normal", x:89, y:66 },
    { id:"n16", progress:16, label:"16",  type:"normal", x:89, y:58 },
    { id:"n17", progress:17, label:"17",  type:"normal", x:89, y:50 },
    { id:"n18", progress:18, label:"🌠", type:"event",  x:89, y:42 },
    { id:"n19", progress:19, label:"19",  type:"normal", x:89, y:34 },

    /* 分岐2 */
    { id:"b2", progress:20, label:"🔀", type:"branch", x:89, y:26 },

    /* 分岐2 近道 */
    { id:"b2s1", progress:21, label:"21",  type:"normal", x:83, y:20 },
    { id:"b2s2", progress:22, label:"💤", type:"rest",   x:77, y:16 },

    /* 分岐2 遠回り */
    { id:"b2l1", progress:21, label:"🎁", type:"item",   x:93, y:22 },
    { id:"b2l2", progress:22, label:"22",  type:"normal", x:94, y:16 },
    { id:"b2l3", progress:23, label:"🎁", type:"item",   x:88, y:10 },
    { id:"b2l4", progress:24, label:"24",  type:"normal", x:81, y:9 },

    /* 合流 */
    { id:"n25", progress:25, label:"25", type:"normal", x:71, y:14 },
    { id:"n26", progress:26, label:"26", type:"normal", x:65, y:14 },
    { id:"n27", progress:27, label:"🎁", type:"item",   x:59, y:14 },
    { id:"n28", progress:28, label:"28",  type:"normal", x:53, y:14 },
    { id:"n29", progress:29, label:"29",  type:"normal", x:47, y:14 },
    { id:"n30", progress:30, label:"🌠", type:"event",  x:41, y:14 },
    { id:"n31", progress:31, label:"31",  type:"normal", x:35, y:14 },
    { id:"n32", progress:32, label:"32",  type:"normal", x:29, y:14 },


    /* =========================
       外周・左辺
    ========================= */

    { id:"n33", progress:33, label:"33", type:"normal", x:23, y:18 },
    { id:"n34", progress:34, label:"🎁", type:"item",   x:17, y:24 },
    { id:"n35", progress:35, label:"35",  type:"normal", x:11, y:30 },
    { id:"n36", progress:36, label:"36",  type:"normal", x:10, y:38 },
    { id:"n37", progress:37, label:"37",  type:"normal", x:10, y:46 },
    { id:"n38", progress:38, label:"38",  type:"normal", x:10, y:54 },


    /* =========================
       内側へ入る
    ========================= */

    { id:"n39", progress:39, label:"39", type:"normal", x:16, y:62 },
    { id:"n40", progress:40, label:"40", type:"normal", x:22, y:68 },

    /* 分岐3 */
    { id:"b3", progress:41, label:"🔀", type:"branch", x:28, y:74 },

    /* 分岐3 近道 */
    { id:"b3s1", progress:42, label:"💤", type:"rest",   x:35, y:70 },
    { id:"b3s2", progress:43, label:"43",  type:"normal", x:42, y:66 },

    /* 分岐3 遠回り */
    { id:"b3l1", progress:42, label:"🎁", type:"item",   x:31, y:80 },
    { id:"b3l2", progress:43, label:"43",  type:"normal", x:38, y:82 },
    { id:"b3l3", progress:44, label:"🌠", type:"event",  x:45, y:80 },
    { id:"b3l4", progress:45, label:"🎁", type:"item",   x:51, y:75 },

    /* 合流 */
    { id:"n46", progress:46, label:"46", type:"normal", x:57, y:68 },
    { id:"n47", progress:47, label:"🎁", type:"item",   x:59, y:58 },
    { id:"n48", progress:48, label:"48",  type:"normal", x:53, y:50 },
    { id:"n49", progress:49, label:"49",  type:"normal", x:46, y:44 },


    /* =========================
       GOAL
    ========================= */

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
     マス同士のつながり
  ========================================================= */

  links: [

    /* START → 分岐1 */
    ["start","n1"],
    ["n1","n2"],
    ["n2","n3"],
    ["n3","n4"],
    ["n4","n5"],
    ["n5","n6"],
    ["n6","b1"],

    /* 分岐1 */
    ["b1","b1s1","short"],
    ["b1","b1l1","long"],

    /* 分岐1 近道 */
    ["b1s1","b1s2"],
    ["b1s2","n12"],

    /* 分岐1 遠回り */
    ["b1l1","b1l2"],
    ["b1l2","b1l3"],
    ["b1l3","b1l4"],
    ["b1l4","n12"],

    /* 分岐1後 */
    ["n12","n13"],
    ["n13","n14"],
    ["n14","n15"],
    ["n15","n16"],
    ["n16","n17"],
    ["n17","n18"],
    ["n18","n19"],
    ["n19","b2"],

    /* 分岐2 */
    ["b2","b2s1","short"],
    ["b2","b2l1","long"],

    /* 分岐2 近道 */
    ["b2s1","b2s2"],
    ["b2s2","n25"],

    /* 分岐2 遠回り */
    ["b2l1","b2l2"],
    ["b2l2","b2l3"],
    ["b2l3","b2l4"],
    ["b2l4","n25"],

    /* 分岐2後 */
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
    ["n40","b3"],

    /* 分岐3 */
    ["b3","b3s1","short"],
    ["b3","b3l1","long"],

    /* 分岐3 近道 */
    ["b3s1","b3s2"],
    ["b3s2","n46"],

    /* 分岐3 遠回り */
    ["b3l1","b3l2"],
    ["b3l2","b3l3"],
    ["b3l3","b3l4"],
    ["b3l4","n46"],

    /* ゴールへ */
    ["n46","n47"],
    ["n47","n48"],
    ["n48","n49"],
    ["n49","goal"]

  ]

};
