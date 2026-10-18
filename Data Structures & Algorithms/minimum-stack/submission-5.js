class MinStack {

    //keep a minstack push if the top of teh stack is larger than the value otherwise push the another duplicaet of the top of the stack
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {

        this.stack.push(val)

        if (this.minStack.length === 0) {
            this.minStack.push(val)
        } else {


            const min = Math.min(this.minStack[this.minStack.length - 1], val)
            this.minStack.push(min)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {

        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];

    }
}
