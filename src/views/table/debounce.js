export function debounce(func, delay){
    let timer = null;
    var _this = this
    return function(...args){
        if(timer)clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(_this, args)
        }, delay);
    }
}