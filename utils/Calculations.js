
export const arraySum=(arr)=>{
    const sum = arr.reduce((acc, o) => acc + parseInt(o.price), 0)
    return sum;
}