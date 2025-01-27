import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentCommentCreateManyInputSchema } from '../inputTypeSchemas/DocumentCommentCreateManyInputSchema'

export const DocumentCommentCreateManyArgsSchema: z.ZodType<Prisma.DocumentCommentCreateManyArgs> = z.object({
  data: z.union([ DocumentCommentCreateManyInputSchema,DocumentCommentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DocumentCommentCreateManyArgsSchema;
