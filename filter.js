let _ = {};
const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
const isArrayLike = function(list){
    const length = list == null ? void 0 : list.length
return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}
_.isObject = function(obj){
    const type = typeof obj
    return type === 'function' || type === 'object' && !!obj;
}
_.keys = function(obj){
    return _.isObject(obj) ? Object.keys(obj) : []
}
function bloop(new_data, body){
    return function(data, iter_predi){
      
        let result = new_data(data)
       if(isArrayLike(data)){
        for( let i = 0,len=data.length; i<len; i++){
            console.log('data',data)
            //  [ 1, 2, 3, 4 ]
            //{ '0': true, '1': [], '2': 1 }
            body(iter_predi(data[i], i, data),result, data[i])
                    }
       }else{
           for(let i =0, keys = _.keys(data), len = keys.length; i < len ; i++){
               if(data.hasOwnProperty(key)){
                   body(iter_predi(data[keys[i]], keys[i], data), result, data[keys[i]])
               }
           }
       }
       return result;
    }
}
_.map = bloop(function(){
    return []
}, function(val, obj){
    return obj.push(val)
})
_.identity = function(v){
    console.log('idtt',v)//true
    return v}
_.idtt = _.identity
_.array = function(){return [];}
_.values = function(list){
return _.map(list,_.identity)
 }
_.toArray = function(list){
    return Array.isArray(list) ? list : _.values(list);
}
_.if = function(validator, func, alter){
    // console.log('if', arguments)
    // if [Arguments] {
    //     '0': [Function (anonymous)],//idtt
    //     '1': [Function (anonymous)]//rester
    //   }
    return function(){
        console.log('if', arguments)
        //if [Arguments] { '0': true, '1': [], '2': 1 }
        return validator.apply(null, arguments) ? func.apply(null, arguments) : alter && alter.apply(null, arguments)
    }
}
_.rest = function(list, num){
    console.log('rest', list)
    return _.toArray(list).slice(num || 1)
}
_.rester = function(func, num){
    return function(){
        console.log('rester', arguments)
        // [Arguments] { '0': true, '1': [], '2': 1 }

        return func.apply(null, _.rest(arguments, num))
    }
}
_.push = function(obj, val){
    console.log('push',obj, val)
    obj.push(val);
    return obj
}
_.filter = bloop(_.array, _.if(_.idtt, _.rester(_.push)));
_.filter([1,2,3,4], function(val){
    return val < 3
})