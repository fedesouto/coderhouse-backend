import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findOne(username: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<any>;
}
