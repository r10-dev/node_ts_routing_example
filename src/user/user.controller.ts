import { Request, Response } from "express";
import * as mongoose from "mongoose";
import { IUserModel } from "./user.model";

let user: IUserModel;

export class UserController {

    public addNewUser(req: Request, res: Response) {
        const newUser = new user({
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone
        });
        newUser.save((err: any, _user: any) => {
            if (err) {
                res.send(err);
            }
            res.json(_user);
        });
    }

    public getAllUsers(req: Request, res: Response) {
        user.find({}, (err, results) => {
            if (err) {
                res.send(err);
            }
            res.status(200).json(results);
        });
    }

}
