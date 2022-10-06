import { Color } from "./types.d.ts";

const colors: Array<Color> = []

export const addColor = (color: string) => {
    colors.push({name: color})
    return color;
}

export const getColors = () => colors;