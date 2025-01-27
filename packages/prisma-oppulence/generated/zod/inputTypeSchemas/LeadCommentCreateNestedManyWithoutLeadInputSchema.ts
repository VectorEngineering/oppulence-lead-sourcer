import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCommentCreateWithoutLeadInputSchema } from './LeadCommentCreateWithoutLeadInputSchema'
import { LeadCommentUncheckedCreateWithoutLeadInputSchema } from './LeadCommentUncheckedCreateWithoutLeadInputSchema'
import { LeadCommentCreateOrConnectWithoutLeadInputSchema } from './LeadCommentCreateOrConnectWithoutLeadInputSchema'
import { LeadCommentCreateManyLeadInputEnvelopeSchema } from './LeadCommentCreateManyLeadInputEnvelopeSchema'
import { LeadCommentWhereUniqueInputSchema } from './LeadCommentWhereUniqueInputSchema'

export const LeadCommentCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadCommentCreateNestedManyWithoutLeadInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCommentCreateWithoutLeadInputSchema),
                z.lazy(() => LeadCommentCreateWithoutLeadInputSchema).array(),
                z.lazy(() => LeadCommentUncheckedCreateWithoutLeadInputSchema),
                z.lazy(() => LeadCommentUncheckedCreateWithoutLeadInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadCommentCreateOrConnectWithoutLeadInputSchema),
                z.lazy(() => LeadCommentCreateOrConnectWithoutLeadInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadCommentCreateManyLeadInputEnvelopeSchema).optional(),
        connect: z
            .union([z.lazy(() => LeadCommentWhereUniqueInputSchema), z.lazy(() => LeadCommentWhereUniqueInputSchema).array()])
            .optional()
    })
    .strict()

export default LeadCommentCreateNestedManyWithoutLeadInputSchema
