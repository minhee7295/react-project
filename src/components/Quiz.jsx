import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from '../components/Question';
import questions from "../data/questions";

function Quiz() {
    const [randomQuiz, setRendomQuiz] = useState([]); //랜덤 문제
    const [quizIndex, setQuizIndex] = useState(0); // 현재 문제 번호
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    //문제 랜덤 돌리기
    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5).slice(0, 10);
    };

    useEffect(() => {
        const shuffled = shuffle(questions);
        setRendomQuiz(shuffled);
    }, []);

    //정답 출력
    const handlerAnswer = (selected) => {
        const isCorrect = selected === randomQuiz[quizIndex].answer;
        const nextScore = isCorrect ? score + 1 : score;

        if (quizIndex + 1 < randomQuiz.length) {
            setScore(nextScore);
            setQuizIndex(quizIndex + 1);
        } else {
            navigate('/result', { state: { score: nextScore, total: randomQuiz.length } });
        }
    };

    if (randomQuiz.length === 0 || !randomQuiz[quizIndex]) {
        return <div>문제를 불러오는 중입니다...</div>;
    }

    return (
        <div>
            <h2>문제 {quizIndex + 1} / {randomQuiz.length}</h2>
            <Question question={randomQuiz[quizIndex]} onAnswer={handlerAnswer}/>
        </div>
    )
}
export default Quiz