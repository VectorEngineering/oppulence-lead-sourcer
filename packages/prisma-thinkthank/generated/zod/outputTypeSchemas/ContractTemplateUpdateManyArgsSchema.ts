import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractTemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/ContractTemplateUpdateManyMutationInputSchema'
import { ContractTemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ContractTemplateUncheckedUpdateManyInputSchema'
import { ContractTemplateWhereInputSchema } from '../inputTypeSchemas/ContractTemplateWhereInputSchema'

export const ContractTemplateUpdateManyArgsSchema: z.ZodType<Prisma.ContractTemplateUpdateManyArgs> = z.object({
  data: z.union([ ContractTemplateUpdateManyMutationInputSchema,ContractTemplateUncheckedUpdateManyInputSchema ]),
  where: ContractTemplateWhereInputSchema.optional(),
}).strict() ;

export default ContractTemplateUpdateManyArgsSchema;
