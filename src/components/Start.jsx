import { useNavigate } from "react-router-dom"

function Start() {
    const navigate = useNavigate(); //url이동으로 씀

    const startQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div>
            <h1>캐릭터 맞추기</h1>
            <button onClick={startQuiz}>퀴즈 풀기</button>
        </div>
    )
}
export default Start