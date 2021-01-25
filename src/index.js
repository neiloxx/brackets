module.exports = function check(str, bracketsConfig) {
    let strings = bracketsConfig.map(bracket => bracket.join(''));
    let strLength = str.length;
    let strNewLength = -1;
    while (strLength !== strNewLength) {
        strLength = str.length;
        for (let i = 0; i < strings.length; i++) {
            str = str.replaceAll(strings[i], '');
        }
        strNewLength = str.length;
    }
    return str.length === 0;
}
