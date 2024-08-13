export type Advantage = {
    image: string,
    advantage: string,
    description: string
}

export type Navbar = {
    title: string,
    url: string
}

export type Survey = {
    id: number,
    title: string,
    image: string,
    description: string,
    creator: string,
    openTimestamp: number,
    closeTimestamp: number,
    currentParticipant: number,
    targetParticipant: number,
    totalReward: number,
    rewardPerParticipant: number,
    questionList: string[],
    state: number
}

export type Answer = {
    id: number,
    user: string,
    surveyId: number,
    timestamp: number,
    answerList: string[]
}

export type SurveyCardProps = {
    survey: Survey,
    type: string
}

export type SurveySectionProps = {
    data: Survey[],
    type: string
}

export type SearchBarProps = {
    query: string,
    handleSearch: React.ChangeEventHandler<HTMLInputElement>,
    message: string
}

export type SurveyHeroSectionProps = {
    data: Survey,
    type: string
}

export type QuestionSectionProps = {
    data: Survey
}

export type RespondentSectionProps = {
    data: Answer[],
    targetParticipant: number
}

export type RespondentCardProps = {
    answer: Answer
}

export type AnswerDetailSectionProps = {
    answer: Answer,
    survey: Survey
}