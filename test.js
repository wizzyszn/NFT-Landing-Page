let deepClone = function(obj){
const newObj   = {...obj}
for(let property  in newObj){
    if(typeof(newObj[property]) === "object"){
        newObj[property] = deepClone(newObj[property])
    }
}

return newObj
}

const cloned = deepClone({
    test : {
        score : 5,
        grade : {
            type : "A",
            value : '+'
        }
    }
})
console.log(cloned);