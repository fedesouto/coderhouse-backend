import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getLogin(res: any): void;
    getSignup(res: any): void;
    createUser(createUserDto: CreateUserDto): Promise<any>;
    login(res: any): void;
    getUserData(req: any): any;
    logout(req: any): any;
}
