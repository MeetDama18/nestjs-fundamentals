import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty({message: 'Name is required'})
    name: string;

    @IsEmail({}, {message: 'Email must be valid'})
    email: string;

    @IsNotEmpty({message: 'Role is required'})
    role: string;


    @MinLength(6, {message: 'Password must be of atleast 6 chars long'})
    password: string;
}