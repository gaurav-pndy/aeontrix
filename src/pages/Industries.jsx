import React from "react";
import { useParams } from "react-router-dom";

const Industries = () => {
  const { industryId } = useParams();
  return (
    <div className="min-h-screen relative pt-6 z-10 text-seasalt">
      {industryId}
    </div>
  );
};

export default Industries;
