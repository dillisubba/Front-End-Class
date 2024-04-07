function sumnumbers(a:number,...b:number[]):number{
    let result = a;
    for (let i=0; i<b.length; i++){
        result+=b[i];
    }
    return result;
}
let ans=sumnumbers(5,6,7,8,9,10,11,12,13,14,15);
console.log(ans);