function isPowerOfTwo(n: number): boolean {
    return n > 0 && (n & n - 1) == 0;
};

console.log(isPowerOfTwo(8))