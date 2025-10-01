import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private _usersService: UsersService) {}

    @Get('/:id')
    async getUser(@Param('id') id: string){
        return this._usersService.getUsers(Number(id));
    }
}
