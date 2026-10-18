// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        //need to keep trak of the previous 
        //create a dummy node to create the list 
        //iterate through the head 
        //chek if the next exisits in the new list 
        //create the new next /random ? 

        //create the ndoe and store it in my map
        //if the random exists in my map get it and point to it
        //otherwise create it and add it then point to it 

        //same for the next value 
        //if it exists get it and point to it 
        //otehrwise create it and add it 


        //iterate through the cur list 
        //check if the current node exists in my map 
        //if so get it and update the new node 
        //if it doesn't create it then add it to my map 
        //then udate the poitners 


        const map = new Map();

        const dummyNode = new Node();
        let dummyPtr = dummyNode;

        let cur = head;


        //go through the list once add them to my map so i know they are in there 
        while (cur !== null) {
            let copy = new Node(cur.val)
            map.set(cur, copy);
            cur = cur.next;
        }

        cur = head;

        while (cur !==null) {
            const copy = map.get(cur);
            console.log(copy)
            if (cur.random) {
                copy.random = map.get(cur.random)
            }
            // copy.next = map.get(cur.next)


            dummyPtr.next = copy;
            dummyPtr = dummyPtr.next;



            cur = cur.next;
        }


        // console.log(dummyNode.next)

        return dummyNode.next

    }
}
