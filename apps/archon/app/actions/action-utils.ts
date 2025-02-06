'use client'

/**
 * Base error class for action-related errors
 */
export class ActionError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'ActionError'
    }
}

/**
 * Type definition for action error response
 */
export interface ActionErrorResponse {
    serverError?: string
    validationErrors?: {
        _errors?: string[]
        id?: {
            _errors?: string[]
        }
    }
    bindArgsValidationErrors?: readonly string[]
    fetchError?: string
}

/**
 * Parses the action error object and returns a formatted error message.
 * This utility is safe to use in client components.
 */
export function parseActionError(error: ActionErrorResponse): string {
    if (error.serverError) {
        return error.serverError
    }

    if (error.validationErrors?._errors?.[0]) {
        return error.validationErrors._errors[0]
    }

    if (error.validationErrors?.id?._errors?.[0]) {
        return error.validationErrors.id._errors[0]
    }

    if (error.fetchError) {
        return error.fetchError
    }

    return 'An unexpected error occurred'
}
