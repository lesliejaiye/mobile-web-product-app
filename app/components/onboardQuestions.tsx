export default function OnboardQuestions({ questions }: { questions: string[] }) {
    const answers = [
            {0: 'oily', 1: 'dry', 2: 'combination', 3: 'sensitive', 4: 'normal'},
            {0: 'acne', 1: 'aging', 2: 'hyperpigmentation', 3: 'dryness', 4: 'sensitivity', 5: 'redness'},  
    ];
    // TODO: Add a loop to handle multiple questions
    // TODO: Add a click handler to navigate to next question
    return (
        <div className="w-86 h-86 rounded-full bg-green-400 flex items-center justify-center p-4">
            <div className="flex flex-col gap-2">
                <div className="text-center text-md text-white gap-6">{questions.map((question, index) => {
                    return (
                        index === 0 ? (
                        <div key={index}>
                            <p>{question}</p>
                            {index === 0 && (
                                <div className="flex flex-col gap-2">
                                    {Object.values(answers[index]).map((a: string) => (
                                        <label key={a} className="flex items-center gap-2 text-white rounded-full px-4 py-2 bg-white/20">
                                            <input type="radio" name="answer" value={a} />
                                            {a}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : null
                );
                })}</div>
            </div>
        </div>
    );
}