/* =========================================================
   発音すごろく MAP DATA

   四角い渦巻き型
   START → 外周 → 内側 → GOAL

   x / y は盤面内の％座標
========================================================= */

const MAP_DATA = {

  /* =======================================================
     マス
  ======================================================= */

  nodes: [

    /* -------------------------------------------------------
       START
       左下から出発
    ------------------------------------------------------- */

    {
      id: "start",
      label: "START",
      progress: 0,
      x: 5,
      y: 90,
      type: "start"
    },


    /* =======================================================
       1〜13
       下辺を右へ
    ======================================================= */

    {
      id: "n1",
      label: "1",
      progress: 1,
      x: 11,
      y: 90,
      type: "normal"
    },

    {
      id: "n2",
      label: "2",
      progress: 2,
      x: 17,
      y: 90,
      type: "normal"
    },

    {
      id: "n3",
      label: "3",
      progress: 3,
      x: 23,
      y: 90,
      type: "normal"
    },

    {
      id: "n4",
      label: "4",
      progress: 4,
      x: 29,
      y: 90,
      type: "item"
    },

    {
      id: "n5",
      label: "5",
      progress: 5,
      x: 35,
      y: 90,
      type: "normal"
    },

    {
      id: "n6",
      label: "6",
      progress: 6,
      x: 41,
      y: 90,
      type: "normal"
    },

    {
      id: "n7",
      label: "7",
      progress: 7,
      x: 47,
      y: 90,
      type: "normal"
    },

    {
      id: "n8",
      label: "8",
      progress: 8,
      x: 53,
      y: 90,
      type: "event"
    },

    {
      id: "n9",
      label: "9",
      progress: 9,
      x: 59,
      y: 90,
      type: "normal"
    },

    {
      id: "n10",
      label: "10",
      progress: 10,
      x: 65,
      y: 90,
      type: "normal"
    },

    {
      id: "n11",
      label: "11",
      progress: 11,
      x: 71,
      y: 90,
      type: "normal"
    },

    {
      id: "n12",
      label: "12",
      progress: 12,
      x: 77,
      y: 90,
      type: "normal"
    },

    {
      id: "n13",
      label: "13",
      progress: 13,
      x: 83,
      y: 90,
      type: "normal"
    },


    /* =======================================================
       14〜20
       右端を上へ
    ======================================================= */

    {
      id: "n14",
      label: "14",
      progress: 14,
      x: 89,
      y: 82,
      type: "item"
    },

    {
      id: "n15",
      label: "15",
      progress: 15,
      x: 89,
      y: 72,
      type: "normal"
    },

    {
      id: "n16",
      label: "16",
      progress: 16,
      x: 89,
      y: 62,
      type: "normal"
    },

    {
      id: "n17",
      label: "17",
      progress: 17,
      x: 89,
      y: 52,
      type: "normal"
    },

    {
      id: "n18",
      label: "18",
      progress: 18,
      x: 89,
      y: 42,
      type: "event"
    },

    {
      id: "n19",
      label: "19",
      progress: 19,
      x: 89,
      y: 32,
      type: "normal"
    },

    {
      id: "n20",
      label: "20",
      progress: 20,
      x: 89,
      y: 22,
      type: "normal"
    },


    /* =======================================================
       21〜32
       上辺を左へ
    ======================================================= */

    {
      id: "n21",
      label: "21",
      progress: 21,
      x: 83,
      y: 14,
      type: "normal"
    },

    {
      id: "n22",
      label: "22",
      progress: 22,
      x: 77,
      y: 14,
      type: "normal"
    },

    {
      id: "n23",
      label: "23",
      progress: 23,
      x: 71,
      y: 14,
      type: "normal"
    },

    {
      id: "n24",
      label: "24",
      progress: 24,
      x: 65,
      y: 14,
      type: "item"
    },

    {
      id: "n25",
      label: "25",
      progress: 25,
      x: 59,
      y: 14,
      type: "normal"
    },

    {
      id: "n26",
      label: "26",
      progress: 26,
      x: 53,
      y: 14,
      type: "normal"
    },

    {
      id: "n27",
      label: "27",
      progress: 27,
      x: 47,
      y: 14,
      type: "item"
    },

    {
      id: "n28",
      label: "28",
      progress: 28,
      x: 41,
      y: 14,
      type: "normal"
    },

    {
      id: "n29",
      label: "29",
      progress: 29,
      x: 35,
      y: 14,
      type: "normal"
    },

    {
      id: "n30",
      label: "30",
      progress: 30,
      x: 29,
      y: 14,
      type: "event"
    },

    {
      id: "n31",
      label: "31",
      progress: 31,
      x: 23,
      y: 14,
      type: "normal"
    },

    {
      id: "n32",
      label: "32",
      progress: 32,
      x: 17,
      y: 14,
      type: "normal"
    },


    /* =======================================================
       33〜38
       左側を下へ

       ここで外周から内側へ巻き込む
    ======================================================= */

    {
      id: "n33",
      label: "33",
      progress: 33,
      x: 10,
      y: 22,
      type: "normal"
    },

    {
      id: "n34",
      label: "34",
      progress: 34,
      x: 10,
      y: 32,
      type: "item"
    },

    {
      id: "n35",
      label: "35",
      progress: 35,
      x: 10,
      y: 42,
      type: "normal"
    },

    {
      id: "n36",
      label: "36",
      progress: 36,
      x: 10,
      y: 52,
      type: "normal"
    },

    {
      id: "n37",
      label: "37",
      progress: 37,
      x: 10,
      y: 62,
      type: "normal"
    },

    {
      id: "n38",
      label: "38",
      progress: 38,
      x: 10,
      y: 72,
      type: "normal"
    },


    /* =======================================================
       39〜44
       内側の下辺を右へ

       外周の下辺より上に置くことで
       渦巻きとして内側に入る
    ======================================================= */

    {
      id: "n39",
      label: "39",
      progress: 39,
      x: 17,
      y: 76,
      type: "normal"
    },

    {
      id: "n40",
      label: "40",
      progress: 40,
      x: 24,
      y: 76,
      type: "normal"
    },

    {
      id: "n41",
      label: "41",
      progress: 41,
      x: 31,
      y: 76,
      type: "normal"
    },

    {
      id: "n42",
      label: "42",
      progress: 42,
      x: 38,
      y: 76,
      type: "item"
    },

    {
      id: "n43",
      label: "43",
      progress: 43,
      x: 45,
      y: 76,
      type: "normal"
    },

    {
      id: "n44",
      label: "44",
      progress: 44,
      x: 52,
      y: 76,
      type: "event"
    },


    /* =======================================================
       45〜47
       内側の右辺を上へ
    ======================================================= */

    {
      id: "n45",
      label: "45",
      progress: 45,
      x: 59,
      y: 69,
      type: "normal"
    },

    {
      id: "n46",
      label: "46",
      progress: 46,
      x: 59,
      y: 59,
      type: "normal"
    },

    {
      id: "n47",
      label: "47",
      progress: 47,
      x: 59,
      y: 49,
      type: "item"
    },


    /* =======================================================
       48〜49
       中心方向へ左に入る
    ======================================================= */

    {
      id: "n48",
      label: "48",
      progress: 48,
      x: 52,
      y: 42,
      type: "normal"
    },

    {
      id: "n49",
      label: "49",
      progress: 49,
      x: 45,
      y: 42,
      type: "normal"
    },


    /* =======================================================
       50
       中央のGOAL
    ======================================================= */

    {
      id: "goal",
      label: "50",
      progress: 50,
      x: 38,
      y: 42,
      type: "goal"
    }

  ],


  /* =======================================================
     道の接続

     今回はまず1本道の渦巻き。
     分岐はあとからここに追加できる。
  ======================================================= */

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
