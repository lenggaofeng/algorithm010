/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!endWord || wordList.indexOf(endWord) == -1){
        return 0;
    }
    var visited = {};
    var minLevel = Number.MAX_SAFE_INTEGER;
    var level = 1;
    function recurse(beginWord,level){
        if(beginWord == endWord){
            minLevel = Math.min(minLevel,level);
        }
        for(var i = 0;i<wordList.length;i++){
            var tmpWord = wordList[i];
            var diff = 0;
            for(var r = 0;r<tmpWord.length;r++){
                if(beginWord[r] != tmpWord[r]){
                    diff++;
                    if(diff > 1){
                        break;
                    }
                }
            }
            if(diff == 1 && !visited[tmpWord]){
                visited[tmpWord] = true;
                recurse(tmpWord,level+1);
                visited[tmpWord] = false;
            }
        }
    }
    recurse(beginWord,level);
    return (minLevel ^ Number.MAX_SAFE_INTEGER) == 0 ? 0 : minLevel;
};
