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

    async getAllUsers(): Promise<Users[] | null>{
        return await this._prismaService.user.findMany({})
    }

    async logInUser(email: string, pass: string): Promise<any>{
        return await this._prismaService.user.findUnique({
            where: {email: email, password: pass}
        })
    }

}
