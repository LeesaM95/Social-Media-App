const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
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
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

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
            getters: true,
        },
        id: false,
    },
);

const thoughtTextSchema = new Schema({
    thoughtText: {
        type: thoughtSchema,
        required: true,
    }
})

// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
reactionSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;

