/**
 * Parameters for calculating an account balance in the base currency
 */
type GetAccountBalanceParams = {
    /** The currency code of the account (e.g., "USD", "EUR") */
    currency: string
    /** The current balance in the account's currency */
    balance: number
    /** The base currency code to convert to */
    baseCurrency: string
    /** The exchange rate from account currency to base currency. Null if rates unavailable */
    rate: number | null
}

/**
 * Converts an account balance from its native currency to the base currency
 *
 * @param params - The parameters for the conversion
 * @param params.currency - The currency code of the account (e.g., "USD", "EUR")
 * @param params.balance - The current balance in the account's currency
 * @param params.baseCurrency - The base currency code to convert to
 * @param params.rate - The exchange rate from account currency to base currency
 * @returns The account balance converted to the base currency, rounded to 2 decimal places.
 *          Returns the original balance if the currency matches the base currency.
 *          Uses rate of 1 if no rate is provided (null).
 *
 * @example
 * ```ts
 * const balanceInBaseCurrency = getAccountBalance({
 *   currency: "EUR",
 *   balance: 100,
 *   baseCurrency: "USD",
 *   rate: 1.1
 * }); // Returns 110.00
 * ```
 */
export function getAccountBalance({ currency, balance, baseCurrency, rate }: GetAccountBalanceParams) {
    if (currency === baseCurrency) {
        return balance
    }

    return +(balance * (rate ?? 1)).toFixed(2)
}

/**
 * Parameters for converting a transaction amount to the base currency
 */
type GetTransactionAmountParams = {
    /** The transaction amount in its original currency */
    amount: number
    /** The currency code of the transaction (e.g., "USD", "EUR") */
    currency: string
    /** The base currency code to convert to */
    baseCurrency: string
    /** The exchange rate from transaction currency to base currency. Null if rates unavailable */
    rate: number | null
}

/**
 * Converts a transaction amount from its original currency to the base currency
 *
 * @param params - The parameters for the conversion
 * @param params.amount - The transaction amount in its original currency
 * @param params.currency - The currency code of the transaction
 * @param params.baseCurrency - The base currency code to convert to
 * @param params.rate - The exchange rate from transaction currency to base currency
 * @returns The transaction amount converted to the base currency, rounded to 2 decimal places.
 *          Returns the original amount if the currency matches the base currency.
 *          Uses rate of 1 if no rate is provided (null).
 *
 * @example
 * ```ts
 * const amountInBaseCurrency = getTransactionAmount({
 *   amount: 50,
 *   currency: "GBP",
 *   baseCurrency: "USD",
 *   rate: 1.25
 * }); // Returns 62.50
 * ```
 */
export function getTransactionAmount({ amount, currency, baseCurrency, rate }: GetTransactionAmountParams) {
    if (currency === baseCurrency) {
        return amount
    }

    return +(amount * (rate ?? 1)).toFixed(2)
}
