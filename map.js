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
    { id:"n35", progress:35, label:"35",  type:"normal", x
