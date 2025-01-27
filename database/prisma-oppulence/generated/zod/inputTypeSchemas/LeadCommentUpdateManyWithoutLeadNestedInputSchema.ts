import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCommentCreateWithoutLeadInputSchema } from './LeadCommentCreateWithoutLeadInputSchema'
import { LeadCommentUncheckedCreateWithoutLeadInputSchema } from './LeadCommentUncheckedCreateWithoutLeadInputSchema'
import { LeadCommentCreateOrConnectWithoutLeadInputSchema } from './LeadCommentCreateOrConnectWithoutLeadInputSchema'
import { LeadCommentUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadCommentUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadCommentCreateManyLeadInputEnvelopeSchema } from './LeadCommentCreateManyLeadInputEnvelopeSchema'
import { LeadCommentWhereUniqueInputSchema } from './LeadCommentWhereUniqueInputSchema'
import { LeadCommentUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadCommentUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadCommentUpdateManyWithWhereWithoutLeadInputSchema } from './LeadCommentUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadCommentScalarWhereInputSchema } from './LeadCommentScalarWhereInputSchema'

export const LeadCommentUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadCommentUpdateManyWithoutLeadNestedInput> = z
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
        upsert: z
            .union([
                z.lazy(() => LeadCommentUpsertWithWhereUniqueWithoutLeadInputSchema),
                z.lazy(() => LeadCommentUpsertWithWhereUniqueWithoutLeadInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadCommentCreateManyLeadInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => LeadCommentWhereUniqueInputSchema), z.lazy(() => LeadCommentWhereUniqueInputSchema).array()]).optional(),
        disconnect: z
            .union([z.lazy(() => LeadCommentWhereUniqueInputSchema), z.lazy(() => LeadCommentWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => LeadCommentWhereUniqueInputSchema), z.lazy(() => LeadCommentWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => LeadCommentWhereUniqueInputSchema), z.lazy(() => LeadCommentWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => LeadCommentUpdateWithWhereUniqueWithoutLeadInputSchema),
                z.lazy(() => LeadCommentUpdateWithWhereUniqueWithoutLeadInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LeadCommentUpdateManyWithWhereWithoutLeadInputSchema),
                z.lazy(() => LeadCommentUpdateManyWithWhereWithoutLeadInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => LeadCommentScalarWhereInputSchema), z.lazy(() => LeadCommentScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default LeadCommentUpdateManyWithoutLeadNestedInputSchema
