export const errorHandler = (StatusCode,message) => {  
  const error = new Error(message);
  error.statusCode = StatusCode;
  error.message = message;
    return error;
};