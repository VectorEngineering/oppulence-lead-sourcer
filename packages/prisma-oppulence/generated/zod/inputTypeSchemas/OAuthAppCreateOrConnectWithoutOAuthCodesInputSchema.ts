import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthAppWhereUniqueInputSchema } from './OAuthAppWhereUniqueInputSchema';
import { OAuthAppCreateWithoutOAuthCodesInputSchema } from './OAuthAppCreateWithoutOAuthCodesInputSchema';
import { OAuthAppUncheckedCreateWithoutOAuthCodesInputSchema } from './OAuthAppUncheckedCreateWithoutOAuthCodesInputSchema';

export const OAuthAppCreateOrConnectWithoutOAuthCodesInputSchema: z.ZodType<Prisma.OAuthAppCreateOrConnectWithoutOAuthCodesInput> = z.object({
  where: z.lazy(() => OAuthAppWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OAuthAppCreateWithoutOAuthCodesInputSchema),z.lazy(() => OAuthAppUncheckedCreateWithoutOAuthCodesInputSchema) ]),
}).strict();

export default OAuthAppCreateOrConnectWithoutOAuthCodesInputSchema;
