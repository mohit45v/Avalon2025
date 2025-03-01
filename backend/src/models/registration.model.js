import { Schema, model } from 'mongoose';

const teamMemberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    whatsapp: {
        type: String,
        required: true
    }
});

const registrationSchema = new Schema({
    teamMembers: {
        type: [teamMemberSchema],
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    collegeAddress: {
        type: String,
        required: true
    },
    competition: {
        type: String,
        required: true,
        enum: ['hackathon', 'project', 'robotics']
    },
    workshop: {
        type: String,
        enum: ['ai_ml', 'web3', 'robotics', '']
    },
    transactionId: {
        type: String,
        required: true
    },
    paymentScreenshot: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Registration = model('Registration', registrationSchema);

export default Registration;