interface IAnswer {
    answer_name: string
}


export class CreateQuestionDto {
    question_name: string
    correct_answer: string
    answers: IAnswer[]
    photo_answers: IAnswer[]
}
