import type { Colors } from "./globalcolor.ts";
import type { LongCSSProps } from "./globalcssproperties.ts";
import type { Sizes } from "./globalsize.ts";



const ColorMap: Record<Colors, string> = {
    "red-50": "#FEF2F2",
    "red-100": "#FEE2E2",
    "red-200": "#FECACA",
    "red-300": "#FCA5A5",
    "red-400": "#F87171",
    "red-500": "#EF4444",
    "red-600": "#DC2626",
    "red-700": "#B91C1C",
    "red-800": "#991B1B",
    "red-900": "#7F1D1D",
    "red-950": "#450A0A",
    "rose-50": "#FFF1F2",
    "rose-100": "#FFE4E6",
    "rose-200": "#FECDD3",
    "rose-300": "#FDA4AF",
    "rose-400": "#FB7185",
    "rose-500": "#F43F5E",
    "rose-600": "#E11D48",
    "rose-700": "#BE123C",
    "rose-800": "#9F1239",
    "rose-900": "#881337",
    "rose-950": "#4C0519",
    "yellow-50": "#FEFCE8",
    "yellow-100": "#FEF9C3",
    "yellow-200": "#FEF08A",
    "yellow-300": "#FDE047",
    "yellow-400": "#FACC15",
    "yellow-500": "#EAB308",
    "yellow-600": "#CA8A04",
    "yellow-700": "#A16207",
    "yellow-800": "#854D0E",
    "yellow-900": "#713F12",
    "yellow-950": "#422006",
    "green-50": "#F0FDF4",
    "green-100": "#DCFCE7",
    "green-200": "#BBF7D0",
    "green-300": "#86EFAC",
    "green-400": "#4ADE80",
    "green-500": "#22C55E",
    "green-600": "#16A34A",
    "green-700": "#15803D",
    "green-800": "#166534",
    "green-900": "#166534",
    "green-950": "#052E16",
    "blue-50": "#EFF6FF",
    "blue-100": "#DBEAFE",
    "blue-200": "#BFDBFE",
    "blue-300": "#93C5FD",
    "blue-400": "#60A5FA",
    "blue-500": "#3B82F6",
    "blue-600": "#2563EB",
    "blue-700": "#1D4ED8",
    "blue-800": "#1E40AF",
    "blue-900": "#1E3A8A",
    "blue-950": "#172554",
    "gray-50": "#F9FAFB",
    "gray-100": "#F3F4F6",
    "gray-200": "#E5E7EB",
    "gray-300": "#D1D5DB",
    "gray-400": "#9CA3AF",
    "gray-500": "#6B7280",
    "gray-600": "#4B5563",
    "gray-700": "#374151",
    "gray-800": "#1F2937",
    "gray-900": "#111827",
    "gray-950": "#030712"
} as const





const CSSPropsMap: Record<string, keyof LongCSSProps> = {
    w: "width",
    h: "height",
    bg: "background",
    bgColor: "backgroundColor",
    py: "paddingY",
    px: "paddingX",
    pl: "paddingLeft",
    pr: "paddingRight",
    pb: "paddingBottom",
    pt: "paddingTop",
    p: "padding"
} as const




const SizeMap: Record<Sizes, string> = {
    "1": "0.2rem",
    "2": "0.4rem",
    "3": "0.6rem",
    "4": "0.8rem",
    "5": "1rem",
    "6": "1.2rem",
    "7": "1.4rem",
    "8": "1.6rem",
    "9": "1.8rem",
    "10": "2rem",
    "11": "2.2rem",
    "12": "2.4rem",
    "14": "2.8rem",
    "16": "3.2rem",
    "20": "4rem",
    "24": "4.8rem",
    "28": "5.6rem",
    "32": "6.4rem",
    "36": "7.2rem",
    "40": "8rem",
    "44": "8.8rem",
    "48": "9.6rem",
    "52": "10.4rem",
    "56": "11.2rem",
    "60": "12rem",
    "64": "12.8rem",
    "72": "14.4rem",
    "80": "16rem",
    "96":
        "19.2rem",
    "auto": "auto",
    "full": "100%",
    "screen": "100vw",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
} as const;




export let combineMap: Record<string, any> = {
    ...ColorMap,
    ...CSSPropsMap,
    ...SizeMap
} as const