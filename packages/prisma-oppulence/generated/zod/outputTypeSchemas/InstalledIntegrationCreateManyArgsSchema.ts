import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InstalledIntegrationCreateManyInputSchema } from '../inputTypeSchemas/InstalledIntegrationCreateManyInputSchema'

export const InstalledIntegrationCreateManyArgsSchema: z.ZodType<Prisma.InstalledIntegrationCreateManyArgs> = z.object({
  data: z.union([ InstalledIntegrationCreateManyInputSchema,InstalledIntegrationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default InstalledIntegrationCreateManyArgsSchema;
