export type Media = "base" | "sm" | "md" | "lg"


type MediaDict<T extends Media, U extends any> = {
    [K in T]?: U
}

export type { MediaDict }