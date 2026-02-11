import { Body, Controller, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/quiz.dto';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {} 

    @Post("submit")
    create(@Body() createQuizDto: CreateQuizDto){
      return this.quizService.create(createQuizDto);
    }
}
