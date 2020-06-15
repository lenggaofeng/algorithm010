class MyCircularDeque {
    constructor(k: number) {

    }

    insertFront(value: number): boolean {
        return false;
    }

    insertLast(value: number): boolean {
        return false;
    }

    deleteFront(): boolean {
        return true;
    }

    deleteLast(): boolean {
        return false;
    }

    getFront(): number {
        return 0;
    }

    getRear(): number {
        return 0;
    }

    isEmpty(): boolean {
        return false;
    }

    isFull(): boolean {
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