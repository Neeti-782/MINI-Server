import { IsInt, IsObject } from 'class-validator';

export class CreateQuizDto {
  @IsInt()
  score: number;

  @IsObject()
  answers: Record<string, any>;
}
