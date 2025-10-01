import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Users } from 'src/common/dto/users/users';

@Injectable()
export class UsersService {

    constructor(private _prismaService: PrismaService) {}

    async getUsers(id: number): Promise<Users | null>{
        return await this._prismaService.user.findUnique({
            where: {id: id}
        })
    }
}
