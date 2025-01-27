import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineAccessRuleUpdateManyMutationInputSchema } from '../inputTypeSchemas/PipelineAccessRuleUpdateManyMutationInputSchema'
import { PipelineAccessRuleUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PipelineAccessRuleUncheckedUpdateManyInputSchema'
import { PipelineAccessRuleWhereInputSchema } from '../inputTypeSchemas/PipelineAccessRuleWhereInputSchema'

export const PipelineAccessRuleUpdateManyArgsSchema: z.ZodType<Prisma.PipelineAccessRuleUpdateManyArgs> = z.object({
  data: z.union([ PipelineAccessRuleUpdateManyMutationInputSchema,PipelineAccessRuleUncheckedUpdateManyInputSchema ]),
  where: PipelineAccessRuleWhereInputSchema.optional(),
}).strict() ;

export default PipelineAccessRuleUpdateManyArgsSchema;
