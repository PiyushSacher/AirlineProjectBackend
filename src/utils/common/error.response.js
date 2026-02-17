function errorResponse(message, error) {
    return {
        success: false,
        message: message || "Something went wrong",
        data: {},
        error: {
            message: error.message,
            explanation: error.explanation || [],
            stack: error.stack
        }
    };
}

module.exports = errorResponse;
