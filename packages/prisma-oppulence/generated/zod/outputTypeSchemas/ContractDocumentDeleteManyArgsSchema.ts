import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractDocumentWhereInputSchema } from '../inputTypeSchemas/ContractDocumentWhereInputSchema'

export const ContractDocumentDeleteManyArgsSchema: z.ZodType<Prisma.ContractDocumentDeleteManyArgs> = z.object({
  where: ContractDocumentWhereInputSchema.optional(),
}).strict() ;

export default ContractDocumentDeleteManyArgsSchema;
