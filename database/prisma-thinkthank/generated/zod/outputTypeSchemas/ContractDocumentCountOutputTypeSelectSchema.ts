import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ContractDocumentCountOutputTypeSelectSchema: z.ZodType<Prisma.ContractDocumentCountOutputTypeSelect> = z.object({
  documentComments: z.boolean().optional(),
  documentAnnotations: z.boolean().optional(),
}).strict();

export default ContractDocumentCountOutputTypeSelectSchema;
