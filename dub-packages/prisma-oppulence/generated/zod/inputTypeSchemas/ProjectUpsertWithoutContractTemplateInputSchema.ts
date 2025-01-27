import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutContractTemplateInputSchema } from './ProjectUpdateWithoutContractTemplateInputSchema';
import { ProjectUncheckedUpdateWithoutContractTemplateInputSchema } from './ProjectUncheckedUpdateWithoutContractTemplateInputSchema';
import { ProjectCreateWithoutContractTemplateInputSchema } from './ProjectCreateWithoutContractTemplateInputSchema';
import { ProjectUncheckedCreateWithoutContractTemplateInputSchema } from './ProjectUncheckedCreateWithoutContractTemplateInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutContractTemplateInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutContractTemplateInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutContractTemplateInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutContractTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutContractTemplateInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutContractTemplateInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutContractTemplateInputSchema;
