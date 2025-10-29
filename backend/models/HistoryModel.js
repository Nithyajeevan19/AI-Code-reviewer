import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    format: {
        type: String,
        enum: ['brief', 'bullets', 'steps', 'code-first'],
        required: true
    },
    tone: {
        type: String,
        enum: ['concise', 'detailed', 'beginner', 'formal'],
        required: true
    },
    analysisResult: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true
    }
}, {
    timestamps: true
});



const History = mongoose.model('History', historySchema);

export default History;
