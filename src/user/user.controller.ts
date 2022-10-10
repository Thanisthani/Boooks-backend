import { Controller,Post,Body, Get,Param } from '@nestjs/common';
import { userCreatedto } from './dto/userCreate.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService)
    { }

    @Post()
    createUser(@Body() userCreateDTO: userCreatedto) {
        return this.userService.createUser(userCreateDTO);
    }

    @Get()
    getUser() {
        return this.userService.getUsers();
    }
    
    @Get(':userId')
    getOneUser(@Param('userId') userId: string) {
        return this.userService.getOneUser(userId);
    }
}
