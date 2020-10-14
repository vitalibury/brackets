module.exports = function check(str, bracketsConfig) {
    const newArr = [str[0]]
    for (let i = 1; i < str.length; i++) {
        let symbolCount = newArr.length
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] === bracketsConfig[j][1] && newArr[newArr.length-1] === bracketsConfig[j][0]) {
                newArr.pop()
            } 
        }
        if (newArr.length === symbolCount) {
            newArr.push(str[i])
        }
    }
    if (newArr.length === 0) {
        return true
    } else {
        return false
    }
}
