const { User, Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thoughts = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thoughts) {
                return res.status(404).json({ message: "No thoughts with that ID" });
            }
            res.json(thoughts)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const thoughts = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thoughts._id } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({
                    message: "Thought create, but found no user with that ID"
                })
            }
            ewa.jaon("Created the Thought 🥳")
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thoughts = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!thoughts) {
                return res.status(404).json({
                    message: "No thought with this id!"
                })
            }
            res.json(thoughts);
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thoughts = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

            if (!thoughts) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            const user = await User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({
                    message: 'thought created but no user with this id!',
                });
            }

            res.json({ message: 'thought successfully deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addReaction(req, res) {
        try {
            const thoughts = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );

            if (!thoughts) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async removeReaction(req, res) {
        try {
            const thoughts = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );

            if (!thoughts) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

