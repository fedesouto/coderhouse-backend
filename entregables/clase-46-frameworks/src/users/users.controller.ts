import { Body, Controller, Get, Post, Request, Response, UseGuards } from '@nestjs/common';
import { join } from 'path';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get('/login')
    getLogin(@Response() res){
        res.sendFile(join(process.cwd(), 'client', 'pages', 'login.html'))
    }
    @Get('/signup')
    getSignup(@Response() res){
        res.sendFile(join(process.cwd(), 'client', 'pages', 'signup.html'))
    }
    @Post('/signup')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto) 
    }
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Response() res) {
        res.redirect('/')
    }
    @UseGuards(AuthenticatedGuard)
    @Get('/data')
    getUserData(@Request() req) {
        return req.user
    }
    @Get('/logout')
    logout(@Request() req) {
        req.session.destroy()
        return req.user.name
    }
}
