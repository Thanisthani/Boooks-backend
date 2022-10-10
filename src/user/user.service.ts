import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { userCreatedto } from './dto/userCreate.dto';


@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel : Model<UserDocument>
    ) { }


    // createUser

    createUser(createUserDTO:userCreatedto): Promise<User> {
        const newUser = new this.userModel(createUserDTO);

        return newUser.save();
    
    }

     // get all users

     getUsers() {
        return this.userModel.find();
    }
    
    // getOne user
    getOneUser(id: string ) {
        return this.userModel.findById(id);
    }


}
