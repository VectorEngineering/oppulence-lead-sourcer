import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutTransactionAttachmentInputSchema } from './ProjectUpdateWithoutTransactionAttachmentInputSchema';
import { ProjectUncheckedUpdateWithoutTransactionAttachmentInputSchema } from './ProjectUncheckedUpdateWithoutTransactionAttachmentInputSchema';
import { ProjectCreateWithoutTransactionAttachmentInputSchema } from './ProjectCreateWithoutTransactionAttachmentInputSchema';
import { ProjectUncheckedCreateWithoutTransactionAttachmentInputSchema } from './ProjectUncheckedCreateWithoutTransactionAttachmentInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutTransactionAttachmentInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutTransactionAttachmentInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutTransactionAttachmentInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTransactionAttachmentInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutTransactionAttachmentInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTransactionAttachmentInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutTransactionAttachmentInputSchema;
