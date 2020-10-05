module.exports = function check(str, bracketsConfig) {
    for(let i=0;i<bracketsConfig.length;) {
        let regExp ;
        if(bracketsConfig[i][0].match(/\d/)) {
            regExp = new RegExp(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`, 'g');
        } else {
            regExp = new RegExp('\\' + bracketsConfig[i][0] + '\\' + bracketsConfig[i][1], 'g');
        }
        if(str.match(regExp)){
            str = str.replace(regExp, '');
            i=0;
        } else {
            i++;
        }
    }
    return !str;
}
