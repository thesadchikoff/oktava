export class CreateCorrectAnswerDto {
    correct_answer: string
    question_id: string
}

interface IAnswerFromClient {
    ans: string
    question_id: string
}

export class checkCorrectAnswersDto {
    user_id: string
    answers: IAnswerFromClient[]
}