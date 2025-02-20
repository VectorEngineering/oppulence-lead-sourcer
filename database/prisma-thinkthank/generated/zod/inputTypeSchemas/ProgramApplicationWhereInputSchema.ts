import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { PartnerNullableRelationFilterSchema } from './PartnerNullableRelationFilterSchema'
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema'
import { ProgramRelationFilterSchema } from './ProgramRelationFilterSchema'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'
import { ProgramEnrollmentNullableRelationFilterSchema } from './ProgramEnrollmentNullableRelationFilterSchema'
import { ProgramEnrollmentWhereInputSchema } from './ProgramEnrollmentWhereInputSchema'

export const ProgramApplicationWhereInputSchema: z.ZodType<Prisma.ProgramApplicationWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => ProgramApplicationWhereInputSchema), z.lazy(() => ProgramApplicationWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => ProgramApplicationWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => ProgramApplicationWhereInputSchema), z.lazy(() => ProgramApplicationWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        programId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        partnerId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        proposal: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        website: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        comments: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        partner: z
            .union([z.lazy(() => PartnerNullableRelationFilterSchema), z.lazy(() => PartnerWhereInputSchema)])
            .optional()
            .nullable(),
        program: z.union([z.lazy(() => ProgramRelationFilterSchema), z.lazy(() => ProgramWhereInputSchema)]).optional(),
        enrollment: z
            .union([z.lazy(() => ProgramEnrollmentNullableRelationFilterSchema), z.lazy(() => ProgramEnrollmentWhereInputSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default ProgramApplicationWhereInputSchema
