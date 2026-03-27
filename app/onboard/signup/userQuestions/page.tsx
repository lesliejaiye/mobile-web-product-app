import OnboardQuestions from "@/app/components/onboardQuestions";

export default function UserQuestions() {
    const questions = ['What is your skin type?', 'What are your skin concerns?'];
    
    // TODO: Add a loop to handle multiple questions
    return (
        <OnboardQuestions questions={questions} />
    );
}