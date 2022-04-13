import { Module } from '@nestjs/common';
import PostsController from './posts.controller';
import PostsService from './posts.service';
import PostEntity from './entity/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from '../users/entity/user.entity'
 
@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, UserEntity])],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}