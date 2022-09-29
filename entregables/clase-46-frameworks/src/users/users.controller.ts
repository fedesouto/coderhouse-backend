import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Post('/signup')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto) 
    }
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Request() req) {
        return {
            user: req.user
        }
    }
    @UseGuards(AuthenticatedGuard)
    @Get('/data')
    getUserData(@Request() req) {
        return req.user
    }
    @Get('/logout')
    logout(@Request() req) {
        req.session.destroy()
        return {
            logout: 'success'
        }
    }
}
