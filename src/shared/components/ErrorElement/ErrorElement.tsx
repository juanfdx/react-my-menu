import './ErrorElement.css';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';


export const ErrorElement = () => {
  
  const error = useRouteError();
  const navigate = useNavigate();


  let status = 500;
  let title = "Unexpected Error";
  let message = "Something went wrong.";

  if (isRouteErrorResponse(error)) {
    status = error.status;
    title = error.statusText || "Error";
    message = error.data || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="error-element">
      <div className="error-element__box">
        <h1 className="error-element__status">{status}</h1>
        <h2 className="error-title">{title}</h2>
        <p className="error-message">{message}</p>

        <button className="go-back-button" onClick={() => navigate(-1)}>
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
}