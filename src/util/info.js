import {Message} from "element-ui";

export const successInfo = (message) => {
    Message({
        showClose: true,
        message: message,
        type: 'success'
    });
}

export const commonInfo = (message) => {
    Message({
        showClose: true,
        message: message,
        type: 'info'
    });
}

export const errorInfo = (message) => {
    Message({
        showClose: true,
        message: message,
        type: 'error'
    });
}

export const warningInfo = (message) => {
    Message({
        showClose: true,
        message: message,
        type: 'warning'
    });
}