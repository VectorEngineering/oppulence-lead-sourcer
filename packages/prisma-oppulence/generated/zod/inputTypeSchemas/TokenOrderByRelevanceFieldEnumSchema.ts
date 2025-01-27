import { z } from 'zod'

export const TokenOrderByRelevanceFieldEnumSchema = z.enum(['id', 'name', 'hashedKey', 'partialKey', 'userId'])

export default TokenOrderByRelevanceFieldEnumSchema
