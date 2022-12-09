
export const arraySum=(arr)=>{
    const sum = arr.reduce((acc, o) => acc + parseInt(o.cartPrice), 0)
    return sum;
}