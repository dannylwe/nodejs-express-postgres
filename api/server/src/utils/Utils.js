export default class Util {
    constructor() {
        this.statusCode = null;
        this.data = null;
        this.message = null;
        this.type = null;
    }

    setSuccess(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message =  message;
        this.data = data;
        this.type = 'success';
    }

    setError(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message =  message;
        this.data = data;
        this.type = 'error';
    }

    send(response) {
        const result = {
            status: this.type,
            message: this.message,
            data: this.data,
        };

        if(this.type === 'success') {
            return response.status(this.statusCode).json(result);
        }
        return response.status(this.statusCode).json({
            status: this.type,
            message: this.message
        });
    }
}
