class Twitter {
    constructor() {
        this.followersTable = new Map();
        this.counter = 0
        //followerstweets table will be an id mapped to 
        //
        this.followersTweetsTable = new Map();
    }


    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        const followersTweets = this.followersTweetsTable.get(userId) || []
        const counter = ++this.counter;

        // console.log("user", userId)
        followersTweets.push([counter, tweetId])
        this.followersTweetsTable.set(userId, followersTweets);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        //needs to be sorted by the counte
        const maxHeap = new MaxPriorityQueue(count => count[0]);

        //get the users feed, first by getting their tweets 
        // console.log('this.followersTweetsTable', this.followersTweetsTable)


        const curUsersTweets = this.followersTweetsTable.get(userId) ? [...this.followersTweetsTable.get(userId)] : [];

        // console.log("cur users tweets", curUsersTweets)
        //get the current users followers table 
        // console.log(this.followersTable)
        const curUsersFollowers = this.followersTable.has(userId) ? this.followersTable.get(userId) : [];

        // console.log("curUsersFollowers inside get news feed", curUsersFollowers)
        //for all the users get their tweets 
        //add to curUserTweets

        // console.log('curUsersFollowers', curUsersFollowers)
        if (curUsersFollowers.length > 0) {
            for (let follower of curUsersFollowers) {

                const currentFollowersTweets = this.followersTweetsTable.get(follower) ? this.followersTweetsTable.get(follower) : []
                curUsersTweets.push(...currentFollowersTweets)

            }
        }

        // console.log("maxHeap", maxHeap.toArray())
        curUsersTweets.forEach(tweet => maxHeap.push(tweet))
        // maxHeap.push(curUsersTweets)
        //pop k times 

        const curUsersNewsFeed = []
        let i = 0;
        while (i < 10 && maxHeap.size() > 0) {


            // console.log('maxhea', maxHeap.toArray())
            const tweet = maxHeap.pop()
            // console.log('tweet', tweet[1])
            curUsersNewsFeed.push(tweet[1])
            i++;
        }

        return curUsersNewsFeed;

    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId === followeeId) return

        const curUsersFollowers = this.followersTable.has(followerId) ? this.followersTable.get(followerId) : []
        if (!curUsersFollowers.includes(followeeId)) {

            curUsersFollowers.push(followeeId)
        }
        this.followersTable.set(followerId, curUsersFollowers);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followersTable.has(followerId)) {
            const followers = this.followersTable.get(followerId);
            const filteredFollowers = followers.filter(id => id !== followeeId)

            this.followersTable.set(followerId, filteredFollowers)

            // console.log("this followerstable after unfollow", this.followersTable)
        }
    }
}
