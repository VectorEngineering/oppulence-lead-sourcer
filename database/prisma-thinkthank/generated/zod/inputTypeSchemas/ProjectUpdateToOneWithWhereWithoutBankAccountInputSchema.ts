import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutBankAccountInputSchema } from './ProjectUpdateWithoutBankAccountInputSchema';
import { ProjectUncheckedUpdateWithoutBankAccountInputSchema } from './ProjectUncheckedUpdateWithoutBankAccountInputSchema';

export const ProjectUpdateToOneWithWhereWithoutBankAccountInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutBankAccountInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutBankAccountInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutBankAccountInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutBankAccountInputSchema;
