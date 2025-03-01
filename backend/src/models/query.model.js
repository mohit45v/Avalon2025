import { Schema, model } from "mongoose";

const querySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Replied'],
        default: 'Pending'
    },
    reply: {
        type: String,
        default: ''
    }
}, { timestamps: true });

const Query = model('Query', querySchema);
export default Query;