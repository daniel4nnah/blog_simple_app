import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private _prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto): Promise<Post | null> {
    return await this._prisma.post.create({
      data: createPostDto
    })
  }

  async findAll(): Promise<Post[] | null> {
    return await this._prisma.post.findMany();
  }

  async findOne(id: number): Promise<Post | null> {
    return await this._prisma.post.findUnique({
      where: { id : id}
    })
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
