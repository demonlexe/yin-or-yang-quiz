import Form from 'react-bootstrap/Form';
import { QuestionInfo } from "./questions/questions"
import { useMemo, useState } from 'react';
import shuffle from './utils/shuffle';

type QuestionProps = {
    questionInfo: QuestionInfo,
    questionIndex: number,
    setScoreArray: React.Dispatch<React.SetStateAction<Array<number>>>
    id: string
}

export default function Question(props: QuestionProps) {
    const { questionInfo, questionIndex, setScoreArray, id } = props;
    const [value, setValue] = useState<number>();
    const answerChoices = useMemo(() => shuffle(questionInfo.a), [questionInfo.a])

    return <div>
        <h1>{questionInfo.q}</h1>
        <div>
            {answerChoices.map((ansChoice, index) =>
                <Form.Check label={ansChoice.text} id={`question-${id}-${questionIndex}-${index}`} checked={index === value} onClick={() => {
                    setValue((prevValue) => {
                        if (prevValue !== index) {
                            // if selected value changed, update score array
                            setScoreArray((prevScoreArray) => {
                                const newScoreArray = [...prevScoreArray];
                                newScoreArray[questionIndex] = ansChoice.pointValue
                                return newScoreArray;
                            })
                        }
                        return index;
                    })
                }} />)}
        </div>
    </div>
}