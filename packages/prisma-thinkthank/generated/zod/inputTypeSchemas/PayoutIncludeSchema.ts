import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramArgsSchema } from '../outputTypeSchemas/ProgramArgsSchema'
import { PartnerArgsSchema } from '../outputTypeSchemas/PartnerArgsSchema'
import { InvoiceArgsSchema } from '../outputTypeSchemas/InvoiceArgsSchema'
import { SaleFindManyArgsSchema } from '../outputTypeSchemas/SaleFindManyArgsSchema'
import { PayoutCountOutputTypeArgsSchema } from '../outputTypeSchemas/PayoutCountOutputTypeArgsSchema'

export const PayoutIncludeSchema: z.ZodType<Prisma.PayoutInclude> = z
    .object({
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional(),
        partner: z.union([z.boolean(), z.lazy(() => PartnerArgsSchema)]).optional(),
        invoice: z.union([z.boolean(), z.lazy(() => InvoiceArgsSchema)]).optional(),
        sales: z.union([z.boolean(), z.lazy(() => SaleFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => PayoutCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default PayoutIncludeSchema
