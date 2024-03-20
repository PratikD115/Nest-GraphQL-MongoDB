import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson } from './lesson.schema';

@Injectable()
export class LessonsService {
  constructor(@InjectModel(Lesson.name) private LessonModel: Model<Lesson>) {} 
  
    async createLesson(name : string, startDate: string, endDate: string): Promise<Lesson> {
        const lesson = await  this.LessonModel.create({
            name,
            startDate,
            endDate
        });

        return lesson;

    }
}
