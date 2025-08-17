import './ModalError.css';
import { useNavigate } from 'react-router';



const ERROR_TYPES = {
  400: {
    title: 'Bad Request',
    message: 'The request was invalid. Please try again.',
  },
  403: {
    title: 'Access Denied',
    message: 'You do not have permission to view this resource.',
  },
  404: {
    title: 'Not Found',
    message: 'Oops! We couldn’t find what you were looking for.',
  },
  500: {
    title: 'Server Error',
    message: 'Something went wrong on our end. Please try again later.',
  },
  default: {
    title: 'Unexpected Error',
    message: 'An unknown error occurred. Please try again.',
  },
};

const getErrorDetails = (status: number) => {

  if (status === 403) return ERROR_TYPES[403];
  if (status === 404) return ERROR_TYPES[404];
  if (status === 500) return ERROR_TYPES[500];
  if (status >= 400 && status < 500) return ERROR_TYPES[400];

  return ERROR_TYPES.default;
}


type ModalErrorProps = {
  status: number;
};


export const ModalError = ({status}: ModalErrorProps) => {

  const error = getErrorDetails(status);
  const navigate = useNavigate();
  console.error('Error: ', status, error.title);

  
  return (
    <div className="modal-error">
      <div className="modal-error__box">
        <h1 className="modal-error__status">{status}</h1>
        <h2 className="modal-error__title">{error.title}</h2>
        <p className="modal-error__message">{error.message}</p>

        <button className="modal-error__back-button" onClick={() => navigate(-1)}>
          ⬅ Go Back
        </button>
      </div>
    </div>
  )
}