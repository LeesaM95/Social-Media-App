const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            unique: true,
            required: "Username Required!"
        },
        email: {
            type: String,
            unique: true,
            required: "Valid Email Required!",
            match: [/.+@.+\..+/]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            reference: "Thought"
        }
        ],
        friends: [{
            type: Schema.Types.ObjectId,
            reference: "User",
        }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// **Schema Settings**:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema.virtual("friendCount").get(function() {
    return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;