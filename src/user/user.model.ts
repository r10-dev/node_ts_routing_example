import { model, Model, Schema } from "mongoose";
import {IUser} from "./user.interface";

export interface IUserModel extends Model<IUser> {}

export class User {

    private _model: Model<IUser>;

    constructor() {
        const schema =  new Schema({
            creation_date: { type: Date, default: Date.now },
            email: { type: String, required: true },
            name: { type: String, required: true },
            phone: { type: String }
        });
    
        this._model = model<IUser>("User", schema);
    }

    public get model(): Model<IUser> {
        return this._model
    }
}
