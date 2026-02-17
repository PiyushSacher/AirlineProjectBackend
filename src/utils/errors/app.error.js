function createAppError(message, statusCode, explanation = []) {
    const error = new Error(message);

    console.log("got error", error);

    error.statusCode = statusCode;
    error.explanation = explanation;
    error.isOperational = true;

    return error;
}

module.exports = createAppError;
