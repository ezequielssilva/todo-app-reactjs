import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Button from "./Button";
import "./TaskDetail.css";

const TaskDetail = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          fugiat magnam nihil tenetur quos fuga tempore rerum accusamus
          provident deserunt maiores perferendis cumque, necessitatibus placeat
          consequatur architecto iste reiciendis vitae!
        </p>
      </div>
    </>
  );
};

export default TaskDetail;
