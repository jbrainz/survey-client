"use client";
import { useCreateSurveyForm } from "./hooks/useCreateSurveyForm";

export const CreateSurveyForm = () => {
  const { handleAddQuestion, surveyData, handleInputChange, handleSubmit } =
    useCreateSurveyForm();
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border border-gray-300 rounded-md p-2"
        value={surveyData.title}
        onChange={handleInputChange}
      />
      <br />
      <input
        className="border border-gray-300 rounded-md p-2 w-full"
        placeholder="Description"
        name="description"
        value={surveyData.description}
        onChange={handleInputChange}
      />
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddQuestion}
      >
        Add Question
      </button>
      <br />
      <input
        className="border border-gray-300 rounded-md p-2 w-full"
        name="questions"
        value={surveyData.questions}
        onChange={handleInputChange}
        required
      />
      <br />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Survey
      </button>
    </form>
  );
};
