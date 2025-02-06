import { createSearchParamsCache, parseAsString, parseAsStringLiteral } from 'nuqs/server'

export const searchParamsCache = createSearchParamsCache({
    q: parseAsString,
    invoiceId: parseAsString,
    type: parseAsStringLiteral(['details', 'edit'] as const)
})
