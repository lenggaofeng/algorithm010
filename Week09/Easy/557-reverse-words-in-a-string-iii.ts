function reverseWords(s: string): string {
    // return s.map(v=>v.split("").reverse().join("")).join(" ");
    return s.split("").reverse().join("").split(" ").reverse().join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));