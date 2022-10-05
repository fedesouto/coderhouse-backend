const colors: any = []

export const addColor = (color: string) => {
    colors.push({name: color})
    return color;
}

export const getColors = () => colors;