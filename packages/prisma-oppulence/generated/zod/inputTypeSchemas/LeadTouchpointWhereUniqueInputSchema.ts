import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTouchpointWhereInputSchema } from './LeadTouchpointWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { CampaignListRelationFilterSchema } from './CampaignListRelationFilterSchema'

export const LeadTouchpointWhereUniqueInputSchema: z.ZodType<Prisma.LeadTouchpointWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z
                    .union([z.lazy(() => LeadTouchpointWhereInputSchema), z.lazy(() => LeadTouchpointWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => LeadTouchpointWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => LeadTouchpointWhereInputSchema), z.lazy(() => LeadTouchpointWhereInputSchema).array()])
                    .optional(),
                leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                channel: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                campaign: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                content: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                interaction: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                timestamp: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                isFirstTouch: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                isLastTouch: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                lead: z.union([z.lazy(() => LeadRelationFilterSchema), z.lazy(() => LeadWhereInputSchema)]).optional(),
                Campaign: z.lazy(() => CampaignListRelationFilterSchema).optional()
            })
            .strict()
    )

export default LeadTouchpointWhereUniqueInputSchema
