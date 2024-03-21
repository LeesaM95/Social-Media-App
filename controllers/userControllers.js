const { User } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__V');
            if(!user) {
                return res.status(404).json({ message: "No user with that ID" });
            }
            res.json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body)
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId});
            if (!user) {
                return res.status(404).json({ message: "No user with that ID" });   
            }
            res.json({ message: "User and associated Thoughts deleted!"})
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // addFriend logic
    async addFriend(req, res) {
        try {
            const users = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet: { friends: req.params.friendId} },
                { runValidators: true, new: true }
            );
            if (!users) {
                return res.status(404).json({ message: 'No user with this id!'})
            }
            res.json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    
    // removeFriend Logic
    async removeFriend(req, res) {
        try {
            const users = await User.findOneAndUpdate(
                { _id: req.params.userId },
                {$pull: { friends:  req.params.friendId}},
                { runValidators: true, new: true }
                )
            if (!thoughts) {
                return res.status(404).json({ message: 'no friend with this id!'})
            }

            res.json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}