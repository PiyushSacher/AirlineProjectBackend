function successResponse(data, message = "Success") {
    return {
        success: true,
        message,
        data,
        error: {}
    };
}

module.exports = successResponse;
