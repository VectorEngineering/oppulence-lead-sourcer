import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutContractTemplateInputSchema } from './ProjectCreateWithoutContractTemplateInputSchema';
import { ProjectUncheckedCreateWithoutContractTemplateInputSchema } from './ProjectUncheckedCreateWithoutContractTemplateInputSchema';

export const ProjectCreateOrConnectWithoutContractTemplateInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutContractTemplateInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutContractTemplateInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutContractTemplateInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutContractTemplateInputSchema;
