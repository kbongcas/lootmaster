import mongoose from "mongoose";

// An interface to create a new user
interface ItemAttrs {
    name: string;
    cost: number;
    userId: string;
}

// An interface for user models
interface UserModel extends mongoose.Model<ItemDoc> {
    build(attrs: ItemAttrs): ItemDoc;
}

// An interface for user docs
interface ItemDoc extends mongoose.Document {
    name: string;
    cost: number;
    userId: string;
}

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

itemSchema.statics.build = (attrs: ItemAttrs) => {
    return new Item(attrs);
}

const Item = mongoose.model<ItemDoc, UserModel>('Item', itemSchema);


export { Item };