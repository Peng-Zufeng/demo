function copyDeepData(item){
    let newItem;
    if(Array.isArray(item)){
        newItem = [],
        item.map(function (arr){
            newItem.push(copyDeepData(arr));
        })
    }else if (typeof item === 'function'){
        newItem = item;
    }else if(item instanceof Object){
        newItem = {}
        for(let prop in item){
            newItem[prop] = copyDeepData(item[prop]);
        }
    }else{
        newItem = item;
    }
    return newItem;
}

export {copyDeepData}