"use client";
import { useFeedbackForm } from "./hooks/useFeedbackForm";

export const FeedbackForm = () => {
  const { formData, handleInputChange, handleSubmit } = useFeedbackForm();

  return (
    <form onSubmit={handleSubmit}>
      <input
        className=""
        type="text"
        placeholder="Survey ID"
        name="survey_id"
        value={formData.survey_id}
        onChange={handleInputChange}
        required
      />
      <br />
      <input
        className="w-full"
        type="number"
        placeholder="Quality of consultation (1-5)"
        name="quality_rating"
        value={formData.quality_rating}
        onChange={handleInputChange}
        required
      />
      <br />
      <input
        className="w-full"
        type="number"
        placeholder="Professionalism of psychologist (1-5)"
        name="professionalism_rating"
        value={formData.professionalism_rating}
        onChange={handleInputChange}
        required
      />
      <br />
      <input
        className="w-full"
        type="number"
        placeholder="Overall satisfaction (1-5)"
        name="satisfaction_rating"
        value={formData.satisfaction_rating}
        onChange={handleInputChange}
        required
      />
      <br />
      <input
        className="w-full"
        placeholder="Comments"
        name="comments"
        value={formData.comments}
        onChange={handleInputChange}
      />
      <br />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Feedback
      </button>
    </form>
  );
};
