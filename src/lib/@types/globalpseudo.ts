type PseudoSelector = "_hover"
    | "__after"
    | "_focus"
    | "__before"


type PseudoDict<T extends PseudoSelector, U> = {
    [K in T]: U

}


type PseudoUtlity<T> = PseudoDict<PseudoSelector, T> | T | (string & {})

export type {PseudoUtlity}