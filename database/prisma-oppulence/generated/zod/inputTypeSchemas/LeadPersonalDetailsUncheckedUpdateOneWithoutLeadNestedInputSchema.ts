import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadPersonalDetailsCreateWithoutLeadInputSchema } from './LeadPersonalDetailsCreateWithoutLeadInputSchema'
import { LeadPersonalDetailsUncheckedCreateWithoutLeadInputSchema } from './LeadPersonalDetailsUncheckedCreateWithoutLeadInputSchema'
import { LeadPersonalDetailsCreateOrConnectWithoutLeadInputSchema } from './LeadPersonalDetailsCreateOrConnectWithoutLeadInputSchema'
import { LeadPersonalDetailsUpsertWithoutLeadInputSchema } from './LeadPersonalDetailsUpsertWithoutLeadInputSchema'
import { LeadPersonalDetailsWhereInputSchema } from './LeadPersonalDetailsWhereInputSchema'
import { LeadPersonalDetailsWhereUniqueInputSchema } from './LeadPersonalDetailsWhereUniqueInputSchema'
import { LeadPersonalDetailsUpdateToOneWithWhereWithoutLeadInputSchema } from './LeadPersonalDetailsUpdateToOneWithWhereWithoutLeadInputSchema'
import { LeadPersonalDetailsUpdateWithoutLeadInputSchema } from './LeadPersonalDetailsUpdateWithoutLeadInputSchema'
import { LeadPersonalDetailsUncheckedUpdateWithoutLeadInputSchema } from './LeadPersonalDetailsUncheckedUpdateWithoutLeadInputSchema'

export const LeadPersonalDetailsUncheckedUpdateOneWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadPersonalDetailsUncheckedUpdateOneWithoutLeadNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadPersonalDetailsCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadPersonalDetailsUncheckedCreateWithoutLeadInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadPersonalDetailsCreateOrConnectWithoutLeadInputSchema).optional(),
            upsert: z.lazy(() => LeadPersonalDetailsUpsertWithoutLeadInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => LeadPersonalDetailsWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => LeadPersonalDetailsWhereInputSchema)]).optional(),
            connect: z.lazy(() => LeadPersonalDetailsWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => LeadPersonalDetailsUpdateToOneWithWhereWithoutLeadInputSchema),
                    z.lazy(() => LeadPersonalDetailsUpdateWithoutLeadInputSchema),
                    z.lazy(() => LeadPersonalDetailsUncheckedUpdateWithoutLeadInputSchema)
                ])
                .optional()
        })
        .strict()

export default LeadPersonalDetailsUncheckedUpdateOneWithoutLeadNestedInputSchema
