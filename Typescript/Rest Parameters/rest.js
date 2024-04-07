function sumnumbers(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var result = a;
    for (var i = 0; i < b.length; i++) {
        result += b[i];
    }
    return result;
}
var ans = sumnumbers(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
console.log(ans);
