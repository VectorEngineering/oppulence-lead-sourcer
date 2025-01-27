import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSocialProfileCreateWithoutLeadInputSchema } from './LeadSocialProfileCreateWithoutLeadInputSchema'
import { LeadSocialProfileUncheckedCreateWithoutLeadInputSchema } from './LeadSocialProfileUncheckedCreateWithoutLeadInputSchema'
import { LeadSocialProfileCreateOrConnectWithoutLeadInputSchema } from './LeadSocialProfileCreateOrConnectWithoutLeadInputSchema'
import { LeadSocialProfileUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadSocialProfileUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadSocialProfileCreateManyLeadInputEnvelopeSchema } from './LeadSocialProfileCreateManyLeadInputEnvelopeSchema'
import { LeadSocialProfileWhereUniqueInputSchema } from './LeadSocialProfileWhereUniqueInputSchema'
import { LeadSocialProfileUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadSocialProfileUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadSocialProfileUpdateManyWithWhereWithoutLeadInputSchema } from './LeadSocialProfileUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadSocialProfileScalarWhereInputSchema } from './LeadSocialProfileScalarWhereInputSchema'

export const LeadSocialProfileUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadSocialProfileUpdateManyWithoutLeadNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadSocialProfileCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadSocialProfileCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadSocialProfileUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadSocialProfileUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadSocialProfileCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadSocialProfileCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadSocialProfileUpsertWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadSocialProfileUpsertWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadSocialProfileCreateManyLeadInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => LeadSocialProfileWhereUniqueInputSchema),
                    z.lazy(() => LeadSocialProfileWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => LeadSocialProfileWhereUniqueInputSchema),
                    z.lazy(() => LeadSocialProfileWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => LeadSocialProfileWhereUniqueInputSchema),
                    z.lazy(() => LeadSocialProfileWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => LeadSocialProfileWhereUniqueInputSchema),
                    z.lazy(() => LeadSocialProfileWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadSocialProfileUpdateWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadSocialProfileUpdateWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadSocialProfileUpdateManyWithWhereWithoutLeadInputSchema),
                    z.lazy(() => LeadSocialProfileUpdateManyWithWhereWithoutLeadInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => LeadSocialProfileScalarWhereInputSchema),
                    z.lazy(() => LeadSocialProfileScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default LeadSocialProfileUpdateManyWithoutLeadNestedInputSchema
