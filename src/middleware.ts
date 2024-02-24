import { Middleware, MiddlewareAPI, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { isEntityError } from "./lib/helpers";

function isPayloadErrorMessage(payload: unknown): payload is {
    data: {
        error: string
    }
    status: number
} {
    return typeof payload === 'object' && payload !== null && 'data' in payload && typeof (payload as any).data?.error === 'string'
}

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next: any) => (action: any) => {
    if (isRejected(action)) {
        if (action.error.name === 'CustomErros') {
            toast.warning(action.payload.message)
        }
    }
    if (isRejectedWithValue(action)) {
        if (isPayloadErrorMessage(action.payload)) {
            toast.warn(action.payload.data.error)
        }
    }
    return next(action)
}