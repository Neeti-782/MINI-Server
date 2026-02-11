import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { PrismaModule } from './prisma/prisma.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [QuizModule, PrismaModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
