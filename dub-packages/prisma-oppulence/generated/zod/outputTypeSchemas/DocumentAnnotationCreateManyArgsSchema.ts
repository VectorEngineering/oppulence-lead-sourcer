import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentAnnotationCreateManyInputSchema } from '../inputTypeSchemas/DocumentAnnotationCreateManyInputSchema'

export const DocumentAnnotationCreateManyArgsSchema: z.ZodType<Prisma.DocumentAnnotationCreateManyArgs> = z.object({
  data: z.union([ DocumentAnnotationCreateManyInputSchema,DocumentAnnotationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DocumentAnnotationCreateManyArgsSchema;
