import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new NotAcceptableException('Username or password not valid.');
    } else {
      const validPass = bcrypt.compareSync(password, user.password);
      if (validPass) {
        return {
          username: user.username,
          name: user.name,
          avatar: user.avatar,
        };
      }
    }
  }
}
