import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<any>;
    login(req: any): {
        user: any;
    };
    getUserData(req: any): any;
    logout(req: any): {
        logout: string;
    };
}
