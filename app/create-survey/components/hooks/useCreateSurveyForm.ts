"use client";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

interface SurveyData {
  title: string;
  description: string;
  questions: string;
}

export const useCreateSurveyForm = () => {
  const [surveyData, setSurveyData] = useState<SurveyData>({
    title: "",
    description: "",
    questions: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSurveyData({ ...surveyData, [name]: value });
  };

  const handleAddQuestion = () => {
    setSurveyData({
      ...surveyData,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      title: surveyData.title,
      description: surveyData.description,
      questions: [surveyData.questions],
    };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/surveys`,
        payload
      );
      console.log("Survey created:", response.data);
    } catch (error) {
      console.error("Error creating survey:", error);
    }
  };

  //   const handleQuestionChange = (
  //     index: number,
  //     e: ChangeEvent<HTMLInputElement>
  //   ) => {
  //     const { value } = e.target;
  //     const updatedQuestions = surveyData.questions.map((question, i) =>
  //       i === index ? value : question
  //     );
  //     setSurveyData({ ...surveyData, questions: updatedQuestions });
  //   };

  return {
    surveyData,
    handleInputChange,
    handleAddQuestion,
    handleSubmit,
  };
};
