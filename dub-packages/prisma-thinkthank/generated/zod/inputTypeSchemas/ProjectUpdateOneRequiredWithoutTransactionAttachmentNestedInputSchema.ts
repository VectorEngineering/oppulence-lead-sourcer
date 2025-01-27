import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutTransactionAttachmentInputSchema } from './ProjectCreateWithoutTransactionAttachmentInputSchema';
import { ProjectUncheckedCreateWithoutTransactionAttachmentInputSchema } from './ProjectUncheckedCreateWithoutTransactionAttachmentInputSchema';
import { ProjectCreateOrConnectWithoutTransactionAttachmentInputSchema } from './ProjectCreateOrConnectWithoutTransactionAttachmentInputSchema';
import { ProjectUpsertWithoutTransactionAttachmentInputSchema } from './ProjectUpsertWithoutTransactionAttachmentInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutTransactionAttachmentInputSchema } from './ProjectUpdateToOneWithWhereWithoutTransactionAttachmentInputSchema';
import { ProjectUpdateWithoutTransactionAttachmentInputSchema } from './ProjectUpdateWithoutTransactionAttachmentInputSchema';
import { ProjectUncheckedUpdateWithoutTransactionAttachmentInputSchema } from './ProjectUncheckedUpdateWithoutTransactionAttachmentInputSchema';

export const ProjectUpdateOneRequiredWithoutTransactionAttachmentNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutTransactionAttachmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTransactionAttachmentInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTransactionAttachmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTransactionAttachmentInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutTransactionAttachmentInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutTransactionAttachmentInputSchema),z.lazy(() => ProjectUpdateWithoutTransactionAttachmentInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTransactionAttachmentInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutTransactionAttachmentNestedInputSchema;
