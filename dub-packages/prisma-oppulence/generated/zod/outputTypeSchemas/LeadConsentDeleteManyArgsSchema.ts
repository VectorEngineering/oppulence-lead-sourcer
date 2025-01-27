import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadConsentWhereInputSchema } from '../inputTypeSchemas/LeadConsentWhereInputSchema'

export const LeadConsentDeleteManyArgsSchema: z.ZodType<Prisma.LeadConsentDeleteManyArgs> = z.object({
  where: LeadConsentWhereInputSchema.optional(),
}).strict() ;

export default LeadConsentDeleteManyArgsSchema;
