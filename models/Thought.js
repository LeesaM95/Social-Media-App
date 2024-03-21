const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat')


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            required: true,
            trim: true,
        },
        reactions: [
            reactionSchema
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);



// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
reactionSchema.virtual("reactionCount").get(function () {
let reactions = reactionSchema;
    if(reactions !== 'undefined') {
        console.log(reactions.length)
    } else {
        return this.reactions.length;
    }
   
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;

