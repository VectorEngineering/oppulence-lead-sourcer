import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { InstalledIntegrationUpdateOneRequiredWithoutRefreshTokensNestedInputSchema } from './InstalledIntegrationUpdateOneRequiredWithoutRefreshTokensNestedInputSchema'

export const OAuthRefreshTokenUpdateWithoutAccessTokenInputSchema: z.ZodType<Prisma.OAuthRefreshTokenUpdateWithoutAccessTokenInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        hashedRefreshToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        installedIntegration: z.lazy(() => InstalledIntegrationUpdateOneRequiredWithoutRefreshTokensNestedInputSchema).optional()
    })
    .strict()

export default OAuthRefreshTokenUpdateWithoutAccessTokenInputSchema
