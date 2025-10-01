import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { PublicAuth } from 'src/decorators/public-auth.decorator';

@Controller('auth')
export class AuthController {
    constructor( private _authService: AuthService ){}

    @PublicAuth()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() body: {email: string, password: string}){
        return this._authService.signIn(body.email, body.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }
}
