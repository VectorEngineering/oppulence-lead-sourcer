import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadExternalSystemCreateWithoutLeadInputSchema } from './LeadExternalSystemCreateWithoutLeadInputSchema'
import { LeadExternalSystemUncheckedCreateWithoutLeadInputSchema } from './LeadExternalSystemUncheckedCreateWithoutLeadInputSchema'
import { LeadExternalSystemCreateOrConnectWithoutLeadInputSchema } from './LeadExternalSystemCreateOrConnectWithoutLeadInputSchema'
import { LeadExternalSystemUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadExternalSystemUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadExternalSystemCreateManyLeadInputEnvelopeSchema } from './LeadExternalSystemCreateManyLeadInputEnvelopeSchema'
import { LeadExternalSystemWhereUniqueInputSchema } from './LeadExternalSystemWhereUniqueInputSchema'
import { LeadExternalSystemUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadExternalSystemUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadExternalSystemUpdateManyWithWhereWithoutLeadInputSchema } from './LeadExternalSystemUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadExternalSystemScalarWhereInputSchema } from './LeadExternalSystemScalarWhereInputSchema'

export const LeadExternalSystemUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadExternalSystemUpdateManyWithoutLeadNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadExternalSystemCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadExternalSystemCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadExternalSystemUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadExternalSystemUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadExternalSystemCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadExternalSystemCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadExternalSystemUpsertWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadExternalSystemUpsertWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadExternalSystemCreateManyLeadInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => LeadExternalSystemWhereUniqueInputSchema),
                    z.lazy(() => LeadExternalSystemWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => LeadExternalSystemWhereUniqueInputSchema),
                    z.lazy(() => LeadExternalSystemWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => LeadExternalSystemWhereUniqueInputSchema),
                    z.lazy(() => LeadExternalSystemWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => LeadExternalSystemWhereUniqueInputSchema),
                    z.lazy(() => LeadExternalSystemWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadExternalSystemUpdateWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadExternalSystemUpdateWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadExternalSystemUpdateManyWithWhereWithoutLeadInputSchema),
                    z.lazy(() => LeadExternalSystemUpdateManyWithWhereWithoutLeadInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => LeadExternalSystemScalarWhereInputSchema),
                    z.lazy(() => LeadExternalSystemScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default LeadExternalSystemUpdateManyWithoutLeadNestedInputSchema
