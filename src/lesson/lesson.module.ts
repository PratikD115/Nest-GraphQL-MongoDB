import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { Lesson, LessonSchema } from './lesson.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonsService } from './lesson.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonSchema }]),
  ],
  providers: [LessonResolver, LessonsService],
})
export class LessonModule {}
