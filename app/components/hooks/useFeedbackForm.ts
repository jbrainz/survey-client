"use client";
import { useState } from "react";
import axios from "axios";

export const useFeedbackForm = () => {
  const [formData, setFormData] = useState({
    survey_id: "",
    quality_rating: "",
    professionalism_rating: "",
    satisfaction_rating: "",
    comments: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/survey-responses", formData);
      console.log("Feedback submitted:", response.data);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return { formData, handleInputChange, handleSubmit };
};
