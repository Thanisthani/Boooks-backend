import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { logindto } from './dto/login.dto';
import { compare} from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService : JwtService
    ) { }

    async validateUser(loginDTO: logindto) {
        
        const user = await this.userService.findUserByEmail(loginDTO.email);

        if (user)
        {
            const isMatch = await compare(loginDTO.password, user.password);
            if (isMatch)
            {
                const payload = { email: user.email, id: user.id, name:user.name };
                const token = this.jwtService.sign(payload);
            
            return {
                access_token: token,
                user,
                message:"Sucessfully Login"
            };
            }

            return {
                user:null,
                message:"Incorrect password"
            };
            
        }
        return {
            user:null,
            message:"User not exists"
        };
    }

    

    // async login(user: any)
    // {
    //     const payload = { email: user.email, sub: user.id };

    //     return {
    //         access_token: this.jwtService.sign(payload),
    //         user
    //     };
    // }
}
