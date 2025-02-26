import { Schema, model } from 'mongoose';

const registrationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
        required: true
    },
    paymentScreenshot: {
        type: String,
        
    }
});

const Registration = model('Registration', registrationSchema);

export default Registration;