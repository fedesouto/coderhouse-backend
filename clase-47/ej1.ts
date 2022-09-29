const parseNums = async (nums: Array<number>) => {
    let max = 0;
    let min = 0;
    let sum = 0;
    for(let num of nums) {
        if(num < min || !min) {
            min = num
        }
        if(num > max) {
            max = num
        }
        sum += num;
    }
    const result = `
    Numeros: ${nums.join(', ')}.
    Max: ${max}.
    Min: ${min}.
    Promedio: ${sum / nums.length}
    `
    console.log(result)
    await Deno.writeTextFile("result.dat", result)
}

const numeros = [1, 44, 2, 6, 9, 3, 5, 7, 104, 232, 552]

parseNums(numeros)