interface Answer {
    question_id: string
    answer: string
}

export class CreateAnswerDto {
    answers: Answer[]
}

export class CreateCorrectAnswerDto {
    correct_answer: string
    question_id: string
}


export class CreatePhotoAnswerDto {
    answers: Answer[]
}
