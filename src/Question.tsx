import Form from 'react-bootstrap/Form';
import { QuestionInfo } from "./questions/questions"

type QuestionProps = {
    questionInfo: QuestionInfo,
    questionId: number
}

export default function Question(props: QuestionProps) {
    const { questionInfo, questionId } = props;
    return <div>
        <h1>{questionInfo.q}</h1>
        <div>
            {questionInfo.a.map((ansChoice, index) => <Form.Check label={ansChoice.text} id={`question-${questionId}-${index}`} />)}
        </div>
    </div>
}