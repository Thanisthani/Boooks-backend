import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { userCreatedto } from './dto/userCreate.dto';
import { encodePassword } from 'src/product/utils/bcrypt';


@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel : Model<UserDocument>
    ) { }


    // createUser

    async createUser(createUserDTO: userCreatedto) {
        const existingUser = await this.findUserByEmail(createUserDTO.email);
        if (!existingUser)
            {
        const password = await encodePassword(createUserDTO.password);
        const newUser = new this.userModel({...createUserDTO, password});

        return newUser.save();
        }
        
        return {
            message:"Already email registered"
        }
    }

     // get all users

     getUsers() {
        return this.userModel.find();
    }
    
    // getOne user
    getOneUser(id: string ) {
        return this.userModel.findById(id);
    }

    // get by email id

    findUserByEmail(email: string)
    {
        return this.userModel.findOne({ email });
    }


}
