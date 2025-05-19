function Question({ question, onAnswer }) {
    return (
        <div>
            <div>
                <img src={question.imagePath} alt="문제 이미지" style={{ width: '300px' }} />
            </div>
            {question.options.map((opt, index) => (
                <button key={index} onClick={() => onAnswer(opt)}>
                    {opt}
                </button>
            ))}
        </div>
    );
}

export default Question