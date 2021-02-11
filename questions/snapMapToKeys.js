/**
 * Tasks A, B, C
 *
 * A <- B
 * B <- C
 *
 * C - B - A
 */

/**
 *
 * {
 *  a: [],
 *  b: [],
 *  c: ['d'],
 *  f: ['i'],
 *  i: ['j]
 * }
 *
 */
// ['c', 'b', 'a']

// const initialConditionExtrator = entires => {
//     const ans = [];
//     while(entires.length) {
//         const entry = entires[0];
//         const firstKey = entry[0]
//         const firstValues = entry[1];

//         if (!firstValues.length) {
//            ans.push(firstKey);
//            entires.shift();
//            continue;
//         }
//         break;
//     }
//     return ans;
// }

function main(stepMap) {
    const queue = [];
    const ans = [];
    const keys = Object.keys(stepMap);

    // initial condition
    const firstRel = stepMap[keys[0]];
    ans.push(keys[0]);
    ans.push(firstRel.shift());
    queue.push(...firstRel);
    const visitedKeys = {};

    // handles the eventual circular loop case;
    visitedKeys[ans[0]] = true;
    visitedKeys[ans[1]] = true;

    // handle the case where relationships are sparse
    // const initialConditionEntries = Object.entries(stepMap);
    // ans.push(initialConditionExtrator(initialConditionEntries));

    // inital search conditions
    const last = ans[ans.length - 1];
    let isSearching = !!stepMap[last];

    while (queue.length || isSearching) {
        // if isSearching is false, continue the search through the queue
        if (!isSearching) {
            const searchCandidate = queue.shift();
            ans.push(searchCandidate);
            isSearching = !!stepMap[searchCandidate]
            continue;
        }

        const currentLast = ans[ans.length - 1];
        const nextRels = stepMap[currentLast];
        const nextRelationship = nextRels.shift();
        ans.push(nextRelationship);

        // istead of blindinly pushing into the queue, lets strip out visited keys
        nextRels.forEach(rel => {
            if(!visitedKeys[rel]) {
                queue.push(rel);
                visitedKeys[rel] = true;
            }
        })

        isSearching = !!stepMap[nextRelationship];
    }

    return ans;
}

const first = {
    a: ['b', 'g', 'h'],
    b: ['c', 'f'],
    c: ['d'],
    d: ['i'],
    i: ['j'],
    h: ['k']
};

console.log(main(first));
