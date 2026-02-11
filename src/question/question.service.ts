import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestionService {
    constructor(private prisma: PrismaService) {} 
    
    async getQuestions(){
        return await this.prisma.questions.findMany({
            orderBy: {id: "asc"}
        })
    }
}
