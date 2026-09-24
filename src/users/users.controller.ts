import { Body, Controller, Post, Get, Param, Delete, Patch, Query} from '@nestjs/common';

import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';


@Controller('users')
export class UsersController {

    constructor(private readonly userService: UserService){}
     
    @Post()
    registerUser(@Body() createUserDto: CreateUserDto){
        return this.userService.registerUser(createUserDto);
    }

    @Get()
    getAllUsers(@Query('role') role?: string) {
    if (role) {
        return this.userService.getUserByRole(role);    
    }

    return this.userService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string){
         return this.userService.getUserById(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
         return this.userService.deleteUser(id);
    }

    @Patch(':id')
    updateUser(@Param('id') id: string,
                @Body() updatedData: any){
        return this.userService.updateUser(id, updatedData);
    }
}
