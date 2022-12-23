
const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];

function test1(){
    let resArr = ["lll","mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
function test2(){
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}
function test3(){
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
}
function test4(){
    const res = ulSurround(strArray1);
    console.log(res);
}
function test5(){
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}

function arrayCopy(src,srcPos,dst,dstPos,length){
    let temp = src.slice(srcPos);
    dst.splice(dstPos,0, ...temp);
}
function count(array, str){
    let count = 0;
    array.forEach(e => {
        if(e === str){
            count++
        }
       })
    return count;
}
function displayOccurrences(array){
    let count = {};
    for (let el of array){
        count[el] = count[el] ? count[el] + 1 : 1;
    }
    console.log(count);
}
function ulSurround(strings){
    let tmp = strings.map(e => {return "<li>" + e + "</li>"})
    tmp.splice(0,0, "<ul>");
    tmp.splice(tmp.length,0,"</ul>");
    return tmp;
}
function lengthSort(array){
    return array.sort(function (a, b){
        return a.length - b.length;
    })
}