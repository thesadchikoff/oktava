import {Answer, Category, PhotoAnswer, Question} from "@prisma/client";

// interface Question {
//     question_name: string
//     question_description: string
//     test_id: string
//     answer: Answer[]
//     type: string,
//     photo_answer: PhotoAnswer
// }

export class CreateTestDto {
    test_name: string
    category_id: string
}
