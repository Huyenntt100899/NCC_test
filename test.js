function sameEl_arr(a, b){
    let arr = [];
    for (let i =0; i < a.length; i++){
        for (let j = 0; j < b.length; j++){
            if (a[i] === b [j]){
                arr.push(a[i]);
            }
        }
    }
    return sameEl_arr
}