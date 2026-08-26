import { Get, Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {

private users: CreateUserDto[] = [];
registerUser(createuserDto: CreateUserDto){
        this.users.push(createuserDto);
    return {
        message: "User registered via service",
        data : createuserDto,
        }
    }
    
    getUsers(){
    return this.users;
}

    getUserById(id: string){
        const user = this.users[+id];
        if(!user){
            return{message: `User with id ${id} not found!`}
        }
        return user; 
    }

    getUserByRole(role: string) {
  const users = this.users.filter(user => user.role === role);

  if (users.length === 0) {
    return { message: `No users with role ${role} found!` };
  }

  return users;
}

    deleteUser(id: string){
         const index = +id;
        if(index<0 || index > this.users.length){
            return{message: `User with id ${id} not found!`}
        }
        
    const deleteUser = this.users.splice(index,1);
        return{
            message: `User with id ${id} deleted`,
            deleted: deleteUser[0],
        }
    }

    updateUser(id: string, updatedData: any){
        const index = +id;
        if(index<0 || index > this.users.length){
            return{message: `User with id ${id} not found!`}
        }
        
        const existingUser = this.users[index];
        const updatedUser = {...existingUser,...updatedData};

        this.users[index] = updatedUser;

        return{
            message : `User with id ${id} updated successfully`,
            user : updatedUser,
        }

    }
}
