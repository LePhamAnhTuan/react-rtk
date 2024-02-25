import { isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
import { toaster } from './components/custom/CustomToast';
function isPayloadErrorMessage(payload: unknown): payload is {
    code: number
    message: string
    errors: any[]
    status: number
} {
    return typeof payload === 'object' && payload !== null && 'message' in payload && typeof (payload as any).message === 'string'
}

export const rtkQueryErrorLogger = () => (next: any) => (action: any) => {

    if (isRejected(action)) {
        if (action.error.message === "Rejected") {
            toaster.warn
                (
                    {
                        title: action.payload.data.title,
                        text: action.payload.data.message,
                    }

                );
        }
    }
    if (isRejectedWithValue(action)) {
        if (isPayloadErrorMessage(action.payload)) {
            toast.warn(action.payload.data.message)
        }
    }
    return next(action)
}