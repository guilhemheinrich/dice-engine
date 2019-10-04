
export function cartesianProduct<T>(...arrays: Array<Array<T>>) {
    if (arrays.length === 0) return;
    let result: { allTuples: Array<Array<T>> } = { allTuples: [] }
    let starter = arrays.shift();
    _explorer.call(result, [], <Array<T>>starter, ...arrays);
    return result.allTuples;
}

function _explorer<T>(this: { allTuples: Array<Array<T>> }, tuple: Array<T>, arrayLike: Array<T>, ...queue: Array<Array<T>>) {
    arrayLike.forEach((value) => {
        let newTuple = [...tuple, value];
        if (queue.length === 0) {
            this.allTuples.push(newTuple)
        } else {
            let newQueue = [...queue]
            let newArrayLike = newQueue.shift();
            _explorer.call(this, newTuple, <Array<T>>newArrayLike, ...newQueue)
        }
    })
}

export default cartesianProduct; 