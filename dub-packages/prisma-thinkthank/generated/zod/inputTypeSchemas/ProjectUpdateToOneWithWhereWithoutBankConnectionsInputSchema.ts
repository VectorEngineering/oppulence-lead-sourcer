import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutBankConnectionsInputSchema } from './ProjectUpdateWithoutBankConnectionsInputSchema';
import { ProjectUncheckedUpdateWithoutBankConnectionsInputSchema } from './ProjectUncheckedUpdateWithoutBankConnectionsInputSchema';

export const ProjectUpdateToOneWithWhereWithoutBankConnectionsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutBankConnectionsInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutBankConnectionsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutBankConnectionsInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutBankConnectionsInputSchema;
