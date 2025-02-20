import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { SaleIncludeSchema } from '../inputTypeSchemas/SaleIncludeSchema'
import { SaleWhereUniqueInputSchema } from '../inputTypeSchemas/SaleWhereUniqueInputSchema'
import { SaleCreateInputSchema } from '../inputTypeSchemas/SaleCreateInputSchema'
import { SaleUncheckedCreateInputSchema } from '../inputTypeSchemas/SaleUncheckedCreateInputSchema'
import { SaleUpdateInputSchema } from '../inputTypeSchemas/SaleUpdateInputSchema'
import { SaleUncheckedUpdateInputSchema } from '../inputTypeSchemas/SaleUncheckedUpdateInputSchema'
import { ProgramArgsSchema } from '../outputTypeSchemas/ProgramArgsSchema'
import { PartnerArgsSchema } from '../outputTypeSchemas/PartnerArgsSchema'
import { PayoutArgsSchema } from '../outputTypeSchemas/PayoutArgsSchema'
import { CustomerArgsSchema } from '../outputTypeSchemas/CustomerArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SaleSelectSchema: z.ZodType<Prisma.SaleSelect> = z
    .object({
        id: z.boolean().optional(),
        programId: z.boolean().optional(),
        partnerId: z.boolean().optional(),
        payoutId: z.boolean().optional(),
        customerId: z.boolean().optional(),
        linkId: z.boolean().optional(),
        clickId: z.boolean().optional(),
        invoiceId: z.boolean().optional(),
        eventId: z.boolean().optional(),
        amount: z.boolean().optional(),
        currency: z.boolean().optional(),
        paymentProcessor: z.boolean().optional(),
        earnings: z.boolean().optional(),
        status: z.boolean().optional(),
        metadata: z.boolean().optional(),
        commissionAmount: z.boolean().optional(),
        commissionType: z.boolean().optional(),
        recurringCommission: z.boolean().optional(),
        recurringInterval: z.boolean().optional(),
        recurringDuration: z.boolean().optional(),
        isLifetimeRecurring: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional(),
        partner: z.union([z.boolean(), z.lazy(() => PartnerArgsSchema)]).optional(),
        payout: z.union([z.boolean(), z.lazy(() => PayoutArgsSchema)]).optional(),
        customer: z.union([z.boolean(), z.lazy(() => CustomerArgsSchema)]).optional()
    })
    .strict()

export const SaleUpsertArgsSchema: z.ZodType<Prisma.SaleUpsertArgs> = z
    .object({
        select: SaleSelectSchema.optional(),
        include: SaleIncludeSchema.optional(),
        where: SaleWhereUniqueInputSchema,
        create: z.union([SaleCreateInputSchema, SaleUncheckedCreateInputSchema]),
        update: z.union([SaleUpdateInputSchema, SaleUncheckedUpdateInputSchema])
    })
    .strict()

export default SaleUpsertArgsSchema
