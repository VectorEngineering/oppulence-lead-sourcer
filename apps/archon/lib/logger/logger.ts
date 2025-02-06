/**
 * Log levels available in the application
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

/**
 * Interface for structured log parameters
 */
export interface LogParams {
    /** Any additional context or data to be logged */
    context?: Record<string, unknown>
    /** Error object if logging an error */
    error?: Error
    /** Component or module where the log originated */
    source?: string
    /** Unique identifier for tracking related logs */
    traceId?: string
}

/**
 * Configuration for the logger
 */
interface LoggerConfig {
    /** Minimum log level to output */
    minLevel: LogLevel
    /** Whether to include timestamps in logs */
    timestamp: boolean
}

const LOG_LEVELS: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
}

const config: LoggerConfig = {
    minLevel: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    timestamp: true
}

/**
 * Normalizes various parameter types into LogParams format
 * @param params - The parameters to normalize
 * @returns Normalized LogParams object
 */
const normalizeParams = (params?: LogParams | Record<string, unknown> | Error): LogParams => {
    if (!params) return {}

    // If it's an Error object
    if (params instanceof Error) {
        return { error: params }
    }

    // If it's already in LogParams format and has known LogParams keys
    if (typeof params === 'object' && ('context' in params || 'error' in params || 'source' in params || 'traceId' in params)) {
        return params as LogParams
    }

    // If it's a general object, treat it as context
    return { context: params as Record<string, unknown> }
}

/**
 * Formats the log message with additional context
 * @param level - The log level
 * @param message - The main log message
 * @param params - Additional parameters for the log
 * @returns Formatted log message and data
 */
const formatLog = (level: LogLevel, message: string, params?: LogParams | Record<string, unknown> | Error) => {
    const normalizedParams = normalizeParams(params)
    const timestamp = config.timestamp ? new Date().toISOString() : ''
    const source = normalizedParams?.source ? `[${normalizedParams.source}]` : ''
    const traceId = normalizedParams?.traceId ? `(trace: ${normalizedParams.traceId})` : ''

    return {
        message: `${timestamp} ${level.toUpperCase()} ${source} ${message} ${traceId}`.trim(),
        data: {
            ...(normalizedParams?.context || {}),
            ...(normalizedParams?.error
                ? {
                      error: {
                          message: normalizedParams.error.message,
                          name: normalizedParams.error.name,
                          stack: normalizedParams.error.stack
                      }
                  }
                : {})
        }
    }
}

/**
 * Main logger function that handles all logging operations
 * @param level - The severity level of the log
 * @param message - The main message to log
 * @param params - Additional parameters and context for the log
 */
const logWithLevel = (level: LogLevel, message: string, params?: LogParams | Record<string, unknown> | Error) => {
    if (LOG_LEVELS[level] < LOG_LEVELS[config.minLevel]) return

    const { message: formattedMessage, data } = formatLog(level, message, params)

    switch (level) {
        case 'debug':
            console.debug(formattedMessage, Object.keys(data).length ? data : '')
            break
        case 'info':
            console.log(formattedMessage, Object.keys(data).length ? data : '')
            break
        case 'warn':
            console.warn(formattedMessage, Object.keys(data).length ? data : '')
            break
        case 'error':
            console.error(formattedMessage, Object.keys(data).length ? data : '')
            break
    }
}

/**
 * Logger utility for consistent logging across the application
 */
export const logger = {
    /**
     * Log debug level message
     * @param message - Debug message to log
     * @param params - Additional parameters and context. Can be:
     * - A LogParams object with structured fields
     * - A general object that will be treated as context
     * - An Error object
     * @example
     * ```ts
     * // With LogParams
     * logger.debug('Processing request', { context: { requestId: '123' } });
     *
     * // With general object
     * logger.debug('Processing request', { requestId: '123', status: 'pending' });
     *
     * // With Error object
     * logger.debug('Operation result', new Error('Something went wrong'));
     * ```
     */
    debug: (message: string, params?: LogParams | Record<string, unknown> | Error) => logWithLevel('debug', message, params),

    /**
     * Log info level message
     * @param message - Info message to log
     * @param params - Additional parameters and context. Can be:
     * - A LogParams object with structured fields
     * - A general object that will be treated as context
     * - An Error object
     * @example
     * ```ts
     * // With LogParams
     * logger.info('User logged in', { context: { userId: '456' } });
     *
     * // With general object
     * logger.info('User logged in', { userId: '456', loginMethod: 'oauth' });
     *
     * // With Error object
     * logger.info('Login attempt', new Error('Invalid credentials'));
     * ```
     */
    info: (message: string, params?: LogParams | Record<string, unknown> | Error) => logWithLevel('info', message, params),

    /**
     * Log warning level message
     * @param message - Warning message to log
     * @param params - Additional parameters and context. Can be:
     * - A LogParams object with structured fields
     * - A general object that will be treated as context
     * - An Error object
     * @example
     * ```ts
     * // With LogParams
     * logger.warn('Rate limit approaching', { context: { currentRate: 95 } });
     *
     * // With general object
     * logger.warn('Rate limit approaching', { currentRate: 95, limit: 100 });
     *
     * // With Error object
     * logger.warn('Rate limit warning', new Error('Near threshold'));
     * ```
     */
    warn: (message: string, params?: LogParams | Record<string, unknown> | Error) => logWithLevel('warn', message, params),

    /**
     * Log error level message
     * @param message - Error message to log
     * @param params - Additional parameters and context. Can be:
     * - A LogParams object with structured fields
     * - A general object that will be treated as context
     * - An Error object
     * @example
     * ```ts
     * // With LogParams
     * logger.error('Failed to process payment', {
     *   error: new Error('Payment declined'),
     *   context: { orderId: '789' }
     * });
     *
     * // With general object
     * logger.error('Payment failed', { orderId: '789', amount: 99.99 });
     *
     * // With Error object
     * logger.error('Payment processing error', new Error('Insufficient funds'));
     * ```
     */
    error: (message: string, params?: LogParams | Record<string, unknown> | Error) => logWithLevel('error', message, params)
}
