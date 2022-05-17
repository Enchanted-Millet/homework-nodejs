let input = [
    {id:"a",value:"31,49"},
    {id:"b",value:"44,67"},
    {id:"c",value:"93,6"},
    {id:"d",value:"20,16"},
    {id:"e",value:"68,53"},
    {id:"f",value:"71,8"},
    {id:"g",value:"61,90"},
    {id:"h",value:"34,97"},
    {id:"i",value:"21,63"},
    {id:"j",value:"19,84"},
    {id:"k",value:"0,81"},
    {id:"l",value:"6,76"},
    {id:"m",value:"43,64"},
    {id:"n",value:"18,64"},
    {id:"o",value:"10,61"},
    {id:"p",value:"37,27"},
    {id:"q",value:"44,88"},
    {id:"r",value:"75,63"},
    {id:"s",value:"99,46"},
    {id:"t",value:"28,51"},
    {id:"u",value:"88,79"},
    {id:"v",value:"47,21"},
    {id:"w",value:"18,66"},
    {id:"x",value:"84,100"},
    {id:"y",value:"75,92"},
    {id:"z",value:"32,33"}
]


// sort the object by its x-y value of the ecludian distance from the target
/**
 * @param {object[]} obj
 * @param {object} tar
 * @return {object[]}
 */
function EcludianSort(obj, tar){
    // this is only for visualization verification, can be shortened
    let newInput = [] 
    let target = tar.value.split(',')
    // rearranger the array of objects to have the exludian distance
    obj.forEach(x => {
        let temp = x.value.split(',')
        d = Math.pow(Number(temp[0]) - Number(target[0]), 2) + 
            Math.pow(Number(temp[1]) - Number(target[1]), 2)
        newInput.push({'id':x.id, 'd':d})
    });
    newInput = newInput.sort((a,b) => (a.d - b.d))
    // console.log(newInput)

    // get the sorting reference array
    let sortArr = []
    newInput.forEach(x => sortArr.push(x.id))
    // console.log(sortArr)
    obj.sort((a, b) => sortArr.indexOf(a.id) - sortArr.indexOf(b.id)); // ??????? ask in TA session
    
    return obj
}

// use the 1st object as a test case
console.log(EcludianSort(input,{id:"a",value:"31,49"})) 