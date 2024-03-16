const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: "Post can't be blank!",
            minLength: 1,
            maxLength: 280,
        }, 
        createdAt: {    
            type: Date,    
            default: Date.now,     
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }
);

// Reaction mini-model that DOES NOT NEED to be in its' own .js file
    const reactionSchema = new Schema({
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            types: String,
            required: true,
            maxLength: 280,
        },
        username: {
            types: String,
            required: true,
        },
        createdAt: {
            types: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    },
        {
            toJSON: {
                virtuals: true,
            },
            id: false,
        },
    );

    // **Schema Settings**:

    // Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
    reactionSchema.virtual("reactionCount").get(function() {
        return this.reactions.length;
    });

    const Thought = model("Thought", thoughtSchema);

    module.exports = Thought;

