import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadMetadataCreateManyInputSchema } from '../inputTypeSchemas/LeadMetadataCreateManyInputSchema'

export const LeadMetadataCreateManyArgsSchema: z.ZodType<Prisma.LeadMetadataCreateManyArgs> = z.object({
  data: z.union([ LeadMetadataCreateManyInputSchema,LeadMetadataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadMetadataCreateManyArgsSchema;
