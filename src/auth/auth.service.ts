import { Injectable, Param, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private _userService: UsersService, private _jwtService: JwtService){}

    async signIn(@Param('email') email: string, @Param('password') pass: string ): Promise<any>{
        console.log(email, pass);
        const user = await this._userService.logInUser(email, pass);

        if (user?.password !== pass){
            throw new UnauthorizedException();
        } else {
            const payload = { sub: user.id, email: user.email };
            return {
                access_token: await this._jwtService.signAsync(payload),
            } 
        }
    }
}
