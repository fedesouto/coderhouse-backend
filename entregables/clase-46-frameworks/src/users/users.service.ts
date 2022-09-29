import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username: username }).exec();
  }
  async create(createUserDto: CreateUserDto): Promise<any> {
    createUserDto.password = bcrypt.hashSync(
      createUserDto.password,
      bcrypt.genSaltSync(10),
    );
    const exists = await this.findOne(createUserDto.username);
    if (exists?.username) {
      throw new NotAcceptableException('Username already exists');
    } else {
      const createdUser = new this.userModel(createUserDto);
      return createdUser.save();
    }
  }
}
