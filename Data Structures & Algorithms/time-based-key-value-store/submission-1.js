class TimeMap {

    //store the keys insied the map inside the map
    //store antoher map with key being the time stamp the value being the val
    constructor() {
        this.keyStore = new Map();


    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {

        if (!this.keyStore.has(key)) {

            this.keyStore.set(key, new Map().set(timestamp, value))
        } else {
            const map = this.keyStore.get(key)
            map.set(timestamp, value)
        }

    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {

        if (this.keyStore.has(key)) {
            const map = this.keyStore.get(key)
            const keys = [...map.keys()];
            //gives 20
            //keys[keys.length - 1]
            //binary search on the keys finding the value that is <= the current timestamp
            let left = 0;
            let right = keys.length - 1;

            let max = -1;
            while (left <= right) {
                let middle = Math.floor((left + right) / 2);
                if (keys[middle] <= timestamp) {
                    max = keys[middle]
                    left = middle + 1
                }
                else if (timestamp <= keys[middle]) {
                    right = middle - 1
                }
            }
            if (max > 0) {
                return map.get(max)
            }
        }
        return ''


    }
}
