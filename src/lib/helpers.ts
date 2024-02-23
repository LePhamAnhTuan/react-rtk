import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface ErrorFormObject {
    [key: string | number]: string | ErrorFormObject | ErrorFormObject[]
}

interface EntityError {
    status: 401,
    data: {
        error: ErrorFormObject
    }
}
export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
    return typeof error === 'object' && error !== null && 'status' in error
}

export function isErrorWithMessage(error: unknown): error is { message: string } {
    return typeof error === 'object' && error !== null && 'message' in error && typeof (error as { message: string }).message === 'string'
}

export function isEntityError(error: unknown): error is EntityError {
    return isFetchBaseQueryError(error) && error.status === 401 && typeof error.data === 'object' && error.data !== null && error.data instanceof Array
}

export class CustomErros extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'CustomErros'
    }
}