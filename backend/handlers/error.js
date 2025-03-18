const errorHandler = (error, request, response, next) => {
  console.log(`errorHandler on the server side: ${JSON.stringify(error)}`);
  console.error(`\n\nrequest = `);
  console.log(request);
  return response.status(error.status || 500).json({
    error: {
      message:
        error.message || "Oops! Something went wrong on the server side.",
    },
  });
};

export default errorHandler;
