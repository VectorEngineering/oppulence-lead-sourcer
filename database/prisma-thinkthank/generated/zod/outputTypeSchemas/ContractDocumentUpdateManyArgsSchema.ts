import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractDocumentUpdateManyMutationInputSchema } from '../inputTypeSchemas/ContractDocumentUpdateManyMutationInputSchema'
import { ContractDocumentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ContractDocumentUncheckedUpdateManyInputSchema'
import { ContractDocumentWhereInputSchema } from '../inputTypeSchemas/ContractDocumentWhereInputSchema'

export const ContractDocumentUpdateManyArgsSchema: z.ZodType<Prisma.ContractDocumentUpdateManyArgs> = z.object({
  data: z.union([ ContractDocumentUpdateManyMutationInputSchema,ContractDocumentUncheckedUpdateManyInputSchema ]),
  where: ContractDocumentWhereInputSchema.optional(),
}).strict() ;

export default ContractDocumentUpdateManyArgsSchema;
