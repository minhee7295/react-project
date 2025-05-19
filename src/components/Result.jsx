import { useLocation, useNavigate } from "react-router-dom"

function Result() {
    const location = useLocation();
    const navigate = useNavigate();
    const {score, total} = location.state || {score:0, total:0};

    const handleRestart = () => {
        navigate("/");
    }

    return (
        <div>
            <h2>퀴즈 결과</h2>
            <p>총 {total}문제 중 {score}문제를 맞추셨습니다.</p>

            <p>점수: {Math.round((score / total) * 100)}점</p>

            <button onClick={handleRestart}>다시 하기</button>
        </div>
    );
}
export default Result