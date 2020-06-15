"use strict";
class MyCircularDeque {
    constructor(k) {
    }
    insertFront(value) {
        return false;
    }
    insertLast(value) {
        return false;
    }
    deleteFront() {
        return true;
    }
    deleteLast() {
        return false;
    }
    getFront() {
        return 0;
    }
    getRear() {
        return 0;
    }
    isEmpty() {
        return false;
    }
    isFull() {
        return true;
    }
}
/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */ 
