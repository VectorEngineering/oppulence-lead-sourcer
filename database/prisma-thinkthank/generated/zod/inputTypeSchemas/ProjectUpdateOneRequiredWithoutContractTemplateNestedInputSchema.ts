import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutContractTemplateInputSchema } from './ProjectCreateWithoutContractTemplateInputSchema';
import { ProjectUncheckedCreateWithoutContractTemplateInputSchema } from './ProjectUncheckedCreateWithoutContractTemplateInputSchema';
import { ProjectCreateOrConnectWithoutContractTemplateInputSchema } from './ProjectCreateOrConnectWithoutContractTemplateInputSchema';
import { ProjectUpsertWithoutContractTemplateInputSchema } from './ProjectUpsertWithoutContractTemplateInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutContractTemplateInputSchema } from './ProjectUpdateToOneWithWhereWithoutContractTemplateInputSchema';
import { ProjectUpdateWithoutContractTemplateInputSchema } from './ProjectUpdateWithoutContractTemplateInputSchema';
import { ProjectUncheckedUpdateWithoutContractTemplateInputSchema } from './ProjectUncheckedUpdateWithoutContractTemplateInputSchema';

export const ProjectUpdateOneRequiredWithoutContractTemplateNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutContractTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutContractTemplateInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutContractTemplateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutContractTemplateInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutContractTemplateInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutContractTemplateInputSchema),z.lazy(() => ProjectUpdateWithoutContractTemplateInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutContractTemplateInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutContractTemplateNestedInputSchema;
