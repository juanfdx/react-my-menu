import './Error.css';


export const Error = () => {
  return (
    <div className='error'>
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Page not found.</p>
        <a href="/" className="home-button">Go Home</a>
      </div>
    </div>
  )
}