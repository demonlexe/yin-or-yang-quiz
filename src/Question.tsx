import Form from 'react-bootstrap/Form';
import { QuestionInfo } from "./questions/questions"
import { useState } from 'react';

type QuestionProps = {
    questionInfo: QuestionInfo,
    questionIndex: number,
    setScoreArray: React.Dispatch<React.SetStateAction<Array<number>>>
}

export default function Question(props: QuestionProps) {
    const { questionInfo, questionIndex, setScoreArray } = props;
    const [value, setValue] = useState<number>();
    return <div>
        <h1>{questionInfo.q}</h1>
        <div>
            {questionInfo.a.map((ansChoice, index) =>
                <Form.Check label={ansChoice.text} id={`question-${questionIndex}-${index}`} checked={index === value} onClick={() => {
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