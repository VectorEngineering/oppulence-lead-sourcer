import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadMetadataCreateWithoutLeadInputSchema } from './LeadMetadataCreateWithoutLeadInputSchema'
import { LeadMetadataUncheckedCreateWithoutLeadInputSchema } from './LeadMetadataUncheckedCreateWithoutLeadInputSchema'
import { LeadMetadataCreateOrConnectWithoutLeadInputSchema } from './LeadMetadataCreateOrConnectWithoutLeadInputSchema'
import { LeadMetadataUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadMetadataUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadMetadataCreateManyLeadInputEnvelopeSchema } from './LeadMetadataCreateManyLeadInputEnvelopeSchema'
import { LeadMetadataWhereUniqueInputSchema } from './LeadMetadataWhereUniqueInputSchema'
import { LeadMetadataUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadMetadataUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadMetadataUpdateManyWithWhereWithoutLeadInputSchema } from './LeadMetadataUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadMetadataScalarWhereInputSchema } from './LeadMetadataScalarWhereInputSchema'

export const LeadMetadataUncheckedUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadMetadataUncheckedUpdateManyWithoutLeadNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadMetadataCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadMetadataCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadMetadataUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadMetadataUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadMetadataCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadMetadataCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadMetadataUpsertWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadMetadataUpsertWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadMetadataCreateManyLeadInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => LeadMetadataWhereUniqueInputSchema), z.lazy(() => LeadMetadataWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => LeadMetadataWhereUniqueInputSchema), z.lazy(() => LeadMetadataWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => LeadMetadataWhereUniqueInputSchema), z.lazy(() => LeadMetadataWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => LeadMetadataWhereUniqueInputSchema), z.lazy(() => LeadMetadataWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadMetadataUpdateWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadMetadataUpdateWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadMetadataUpdateManyWithWhereWithoutLeadInputSchema),
                    z.lazy(() => LeadMetadataUpdateManyWithWhereWithoutLeadInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => LeadMetadataScalarWhereInputSchema), z.lazy(() => LeadMetadataScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadMetadataUncheckedUpdateManyWithoutLeadNestedInputSchema
