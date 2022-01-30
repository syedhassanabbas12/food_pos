const DEFAULT_COLOR = "#003f5c";
const COLOR_PLATE_8 = [
  "#003f5c",
  "#dd2c00",
  "#c7a500",
  "#2f4b7c",
  "#665191",
  "#a05195",
  "#f95d6a",
  "#ff7c43",
];
const COLOR_PLATE_16 = [
  "#003f5c",
  "#41D9C7",
  "#dd2c00",
  "#c7a500",
  "#E6965C",
  "#2f4b7c",
  "#7564CC",
  "#665191",
  "#5C8EE6",
  "#a05195",
  "#5CA3E6",
  "#f95d6a",
  "#B381E6",
  "#F04864",
  "#D598D9",
];
const COLOR_PLATE_24 = [
  "#003f5c",
  "#dd2c00",
  "#c7a500",
  "#2f4b7c",
  "#665191",
  "#a05195",
  "#d45087",
  "#f95d6a",
  "#ff7c43",
  "#ffa600",
  "#ff6434",
  "#dd2c00",
  "#009624",
  "#ffd600",
  "#002171",
  "#006064",
  "#ff6434",
  "#4e342e",
  "#00c853",
  "#3692bc",
  "#f91965",
  "#6a1b9a",
  "#827717",
  "#1a77d2",
];
const COLOR_PIE = [
  "#003f5c",
  "#dd2c00",
  "#c7a500",
  "#2f4b7c",
  "#665191",
  "#a05195",
  "#d45087",
  "#f95d6a",
];
const COLOR_PIE_16 = [
  "#003f5c",
  "#dd2c00",
  "#c7a500",
  "#2f4b7c",
  "#665191",
  "#a05195",
  "#d45087",
  "#f95d6a",
  "#ff7c43",
  "#ffa600",
  "#ff6434",
  "#dd2c00",
  "#009624",
  "#ffd600",
  "#002171",
  "#006064",
];

const FONT_FAMILY =
  '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "sans-serif"';
// tooltip's dom element classname
const TOOLTIP_CONTAINER_CLASS = "g2-tooltip";
const TOOLTIP_TITLE_CLASS = "g2-tooltip-title";
const TOOLTIP_LIST_CLASS = "g2-tooltip-list";
const TOOLTIP_LIST_ITEM_CLASS = "g2-tooltip-list-item";
const TOOLTIP_MARKER_CLASS = "g2-tooltip-marker";

const Theme = {
  defaultColor: DEFAULT_COLOR, // default theme color
  plotCfg: {
    padding: [20, 20, 95, 80],
  },
  fontFamily: FONT_FAMILY,
  defaultLegendPosition: "bottom",
  colors: COLOR_PLATE_8,
  colors_16: COLOR_PLATE_16,
  colors_24: COLOR_PLATE_24,
  colors_pie: COLOR_PIE,
  colors_pie_16: COLOR_PIE_16,
  shapes: {
    point: [
      "hollowCircle",
      "hollowSquare",
      "hollowDiamond",
      "hollowBowtie",
      "hollowTriangle",
      "hollowHexagon",
      "cross",
      "tick",
      "plus",
      "hyphen",
      "line",
    ],
    line: ["line", "dash", "dot"],
    area: ["area"],
  },
  markerRadius: 4,
  sizes: [1, 10],
  opacities: [0.1, 0.9],
  axis: {
    top: {
      position: "top",
      title: null,
      label: {
        offset: 14,
        textStyle: {
          fill: "#545454",
          fontSize: 12,
          lineHeight: 20,
          textBaseline: "middle",
        },
        autoRotate: true,
      },
      line: {
        lineWidth: 1,
        stroke: "#BFBFBF",
      },
      tickLine: {
        lineWidth: 1,
        stroke: "#BFBFBF",
        length: 4,
      },
    },
    bottom: {
      position: "bottom",
      title: null,
      label: {
        offset: 22,
        autoRotate: true,
        textStyle: {
          fill: "#545454",
          fontSize: 12,
          lineHeight: 20,
          textBaseline: "middle",
        },
      },
      line: {
        lineWidth: 1,
        stroke: "#BFBFBF",
      },
      tickLine: {
        lineWidth: 1,
        stroke: "#BFBFBF",
        length: 4,
      },
    },
    left: {
      position: "left",
      title: null,
      label: {
        offset: 12,
        autoRotate: true,
        textStyle: {
          fill: "#545454",
          fontSize: 12,
          lineHeight: 20,
          textBaseline: "middle",
        },
      },
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          stroke: "#E9E9E9",
          lineWidth: 1,
          lineDash: [3, 3],
        },
        hideFirstLine: true,
      },
    },
    right: {
      position: "right",
      title: null,
      label: {
        offset: 12,
        autoRotate: true,
        textStyle: {
          fill: "#545454",
          fontSize: 12,
          lineHeight: 20,
          textBaseline: "middle",
        },
      },
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          stroke: "#E9E9E9",
          lineWidth: 1,
          lineDash: [3, 3],
        },
        hideFirstLine: true,
      },
    },
    circle: {
      zIndex: 1,
      title: null,
      label: {
        offset: 12,
        textStyle: {
          fill: "#545454",
          fontSize: 12,
          lineHeight: 20,
        },
      },
      line: {
        lineWidth: 1,
        stroke: "#BFBFBF",
      },
      tickLine: {
        lineWidth: 1,
        stroke: "#BFBFBF",
        length: 4,
      },
      grid: {
        lineStyle: {
          stroke: "#E9E9E9",
          lineWidth: 1,
          lineDash: [3, 3],
        },
        hideFirstLine: true,
      },
    },
    radius: {
      zIndex: 0,
      label: {
        offset: 12,
        textStyle: {
          fill: "#545454",
          fontSize: 12,
          textBaseline: "middle",
          lineHeight: 20,
        },
      },
      line: {
        lineWidth: 1,
        stroke: "#BFBFBF",
      },
      tickLine: {
        lineWidth: 1,
        stroke: "#BFBFBF",
        length: 4,
      },
      grid: {
        lineStyle: {
          stroke: "#E9E9E9",
          lineWidth: 1,
          lineDash: [3, 3],
        },
        type: "circle",
      },
    },
    helix: {
      grid: null,
      label: null,
      title: null,
      line: {
        lineWidth: 1,
        stroke: "#BFBFBF",
      },
      tickLine: {
        lineWidth: 1,
        length: 4,
        stroke: "#BFBFBF",
      },
    },
  },
  label: {
    offset: 20,
    textStyle: {
      fill: "#545454",
      fontSize: 12,
      textBaseline: "middle",
    },
  },
  treemapLabels: {
    offset: 10,
    textStyle: {
      fill: "#fff",
      fontSize: 12,
      textBaseline: "top",
      fontStyle: "bold",
    },
  },
  innerLabels: {
    textStyle: {
      fill: "#fff",
      fontSize: 12,
      textBaseline: "middle",
    },
  },
  // 在theta坐标系下的饼图文本内部的样式
  thetaLabels: {
    labelLine: {
      lineWidth: 1,
    },
    labelHeight: 14,
    offset: 30,
  },
  legend: {
    right: {
      position: "right",
      layout: "vertical",
      itemMarginBottom: 8,
      width: 16,
      height: 156,
      title: null,
      textStyle: {
        fill: "#8C8C8C",
        fontSize: 12,
        textAlign: "start",
        textBaseline: "middle",
        lineHeight: 20,
      }, // 图例项文本的样式
      unCheckColor: "#bfbfbf",
    },
    left: {
      position: "left",
      layout: "vertical",
      itemMarginBottom: 8,
      width: 16,
      height: 156,
      title: null,
      textStyle: {
        fill: "#8C8C8C",
        fontSize: 12,
        textAlign: "start",
        textBaseline: "middle",
        lineHeight: 20,
      }, // 图例项文本的样式
      unCheckColor: "#bfbfbf",
    },
    top: {
      position: "top",
      offset: 6,
      layout: "horizontal",
      title: null,
      itemGap: 10,
      width: 156,
      height: 16,
      textStyle: {
        fill: "#8C8C8C",
        fontSize: 12,
        textAlign: "start",
        textBaseline: "middle",
        lineHeight: 20,
      }, // 图例项文本的样式
      unCheckColor: "#bfbfbf",
    },
    bottom: {
      position: "bottom",
      offset: 58,
      layout: "horizontal",
      title: null,
      itemGap: 24,
      width: 156,
      height: 16,
      textStyle: {
        fill: "#8C8C8C",
        fontSize: 12,
        textAlign: "start",
        textBaseline: "middle",
        lineHeight: 20,
      },
      unCheckColor: "#bfbfbf",
    },
  },
  tooltip: {
    crosshairs: false,
    offset: 15,
    // css style for tooltip
    [`${TOOLTIP_CONTAINER_CLASS}`]: {
      position: "absolute",
      visibility: "hidden",
      whiteSpace: "nowrap",
      zIndex: 999,
      transition:
        "visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      borderRadius: "4px",
      color: "rgb(255, 255, 255)",
      fontSize: "12px",
      fontFamily: FONT_FAMILY,
      lineHeight: "20px",
      padding: "10px 10px 6px 10px",
    },
    [`${TOOLTIP_TITLE_CLASS}`]: {
      marginBottom: "4px",
    },
    [`${TOOLTIP_LIST_CLASS}`]: {
      margin: 0,
      listStyleType: "none",
      padding: 0,
    },
    [`${TOOLTIP_LIST_ITEM_CLASS}`]: {
      marginBottom: "4px",
    },
    [`${TOOLTIP_MARKER_CLASS}`]: {
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      border: "1px solid #fff",
      display: "inline-block",
      marginRight: "8px",
    },
  },
  tooltipMarker: {
    symbol: (x, y, r, ctx, marker) => {
      const color = marker.get("color");
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2, false);
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = 4;
      ctx.arc(x, y, 7, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.restore();
    },
    radius: 4,
  },
  tooltipCrosshairsRect: {
    type: "rect",
    style: {
      fill: "#CCD6EC",
      opacity: 0.3,
    },
  },
  tooltipCrosshairsLine: {
    style: {
      stroke: "rgba(0, 0, 0, 0.25)",
      lineWidth: 1,
    },
  },
  shape: {
    point: {
      lineWidth: 1,
      fill: DEFAULT_COLOR,
      radius: 4,
    },
    hollowPoint: {
      fill: "#fff",
      lineWidth: 1,
      stroke: DEFAULT_COLOR,
      radius: 3,
    },
    interval: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.85,
    },
    pie: {
      lineWidth: 1,
      stroke: "#fff",
    },
    hollowInterval: {
      fill: "#fff",
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1,
    },
    area: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.3,
    },
    polygon: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 1,
    },
    hollowPolygon: {
      fill: "#fff",
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1,
    },
    hollowArea: {
      fill: "#fff",
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1,
    },
    line: {
      stroke: DEFAULT_COLOR,
      lineWidth: 2,
      fill: null,
    },
  },
  guide: {
    line: {
      lineStyle: {
        stroke: DEFAULT_COLOR,
        lineDash: [0, 2, 2],
        lineWidth: 1,
      },
      text: {
        position: "end",
        autoRotate: true,
        style: {
          fill: "#545454",
          fontSize: 12,
          textAlign: "center",
        },
      },
    },
    text: {
      style: {
        fill: "#545454",
        fontSize: 12,
        textBaseline: "middle",
        textAlign: "start",
      },
    },
    region: {
      style: {
        lineWidth: 0,
        fill: "#000",
        fillOpacity: 0.04,
      },
    },
    html: {
      alignX: "middle",
      alignY: "middle",
    },
  },
  pixelRatio: null,
};

export default Theme;
