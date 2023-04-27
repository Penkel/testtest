export function isColluding(obj1, obj2) {
    let bottomObj1 = obj1.position.y
    let topObj1 = obj1.position.y + obj1.size;;
    let leftObj1 = obj1.position.x;
    let rightObj1 = obj1.position.x + obj1.size

    let bottomObj2 = obj2.position.y;
    let topObj2 = obj2.position.y + obj2.size;
    let leftObj2 = obj2.position.x;
    let rightObj2 = obj2.position.x + obj2.size


if (
    rightObj1 >= leftObj2 
    && 
    leftObj1 <= rightObj2 
    && 
    bottomObj1 <= topObj2 
    && 
    topObj1 >= bottomObj2
    )
    {
 console.log('ldkfjslkj')
 return true;
    }
}