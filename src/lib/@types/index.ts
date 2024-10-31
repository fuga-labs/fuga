import type { Snippet } from "svelte";
import type { GlobalCSSProperties } from "./globalcssproperties.js";
import type { GlobalHtmlElements } from "./globalhtmlelements.js";


type ComponentPropsType = Partial<GlobalCSSProperties> & Partial<GlobalHtmlElements> & {
    children: Snippet

}


export type { ComponentPropsType, GlobalCSSProperties }