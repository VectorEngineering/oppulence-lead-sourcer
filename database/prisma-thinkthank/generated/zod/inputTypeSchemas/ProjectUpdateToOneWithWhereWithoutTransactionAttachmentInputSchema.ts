import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutTransactionAttachmentInputSchema } from './ProjectUpdateWithoutTransactionAttachmentInputSchema';
import { ProjectUncheckedUpdateWithoutTransactionAttachmentInputSchema } from './ProjectUncheckedUpdateWithoutTransactionAttachmentInputSchema';

export const ProjectUpdateToOneWithWhereWithoutTransactionAttachmentInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutTransactionAttachmentInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutTransactionAttachmentInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTransactionAttachmentInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutTransactionAttachmentInputSchema;
