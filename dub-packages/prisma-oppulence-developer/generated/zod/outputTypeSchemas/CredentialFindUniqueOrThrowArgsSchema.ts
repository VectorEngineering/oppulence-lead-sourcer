import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CredentialWhereUniqueInputSchema } from '../inputTypeSchemas/CredentialWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CredentialSelectSchema: z.ZodType<Prisma.CredentialSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  name: z.boolean().optional(),
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const CredentialFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CredentialFindUniqueOrThrowArgs> = z.object({
  select: CredentialSelectSchema.optional(),
  where: CredentialWhereUniqueInputSchema,
}).strict() ;

export default CredentialFindUniqueOrThrowArgsSchema;
