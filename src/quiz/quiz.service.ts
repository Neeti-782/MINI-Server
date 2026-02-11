import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuizDto } from './dto/quiz.dto';

@Injectable()
export class QuizService {
    constructor(private prisma: PrismaService) {}

  async create(dto: CreateQuizDto) {
    return await this.prisma.quizAnswer.create({
        data: {
      score: dto.score,
      answer: dto.answers,
    },

    });
  }
}
