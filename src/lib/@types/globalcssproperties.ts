import type { Colors } from "./globalcolor.js";
import type { MediaDict, Media } from "./globalmedia.ts";
import type { PseudoUtlity } from "./globalpseudo.ts";
import type { Sizes } from "./globalsize.ts";


type MediaUtility<T> = MediaDict<Media, T> | T | (string & {})



interface ShorthandCSSProps {
    w: MediaUtility<Sizes>,
    h: MediaUtility<Sizes>,
    bg: string,
    bgColor: MediaUtility<Colors>,
    py: MediaUtility<Sizes>,
    px: MediaUtility<Sizes>,
    pl: MediaUtility<Sizes>,
    pb: MediaUtility<Sizes>,
    pr: MediaUtility<Sizes>,
    pt: MediaUtility<Sizes>,
    p: MediaUtility<Sizes>
}


export interface LongCSSProps {
    color: MediaUtility<Colors>
    backgroundColor: MediaUtility<Colors>
    width: MediaUtility<Sizes>,
    background: string,
    maxWidth: MediaUtility<Sizes>,
    padding: MediaUtility<Sizes>,
    margin: MediaUtility<Sizes>,
    paddingTop: MediaUtility<Sizes>,
    paddingLeft: MediaUtility<Sizes>,
    paddingRight: MediaUtility<Sizes>,
    paddingBottom: MediaUtility<Sizes>,
    paddingY: MediaUtility<Sizes>,
    paddingX: MediaUtility<Sizes>
    height: MediaUtility<Sizes>
}






type combineProps = LongCSSProps & ShorthandCSSProps

type GlobalCSSProperties = combineProps & PseudoUtlity<Partial<combineProps>>
export type { GlobalCSSProperties }