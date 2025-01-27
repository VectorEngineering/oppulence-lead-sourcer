import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema';
import { OAuthCodeUpdateWithoutOAuthAppInputSchema } from './OAuthCodeUpdateWithoutOAuthAppInputSchema';
import { OAuthCodeUncheckedUpdateWithoutOAuthAppInputSchema } from './OAuthCodeUncheckedUpdateWithoutOAuthAppInputSchema';
import { OAuthCodeCreateWithoutOAuthAppInputSchema } from './OAuthCodeCreateWithoutOAuthAppInputSchema';
import { OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema } from './OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema';

export const OAuthCodeUpsertWithWhereUniqueWithoutOAuthAppInputSchema: z.ZodType<Prisma.OAuthCodeUpsertWithWhereUniqueWithoutOAuthAppInput> = z.object({
  where: z.lazy(() => OAuthCodeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OAuthCodeUpdateWithoutOAuthAppInputSchema),z.lazy(() => OAuthCodeUncheckedUpdateWithoutOAuthAppInputSchema) ]),
  create: z.union([ z.lazy(() => OAuthCodeCreateWithoutOAuthAppInputSchema),z.lazy(() => OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema) ]),
}).strict();

export default OAuthCodeUpsertWithWhereUniqueWithoutOAuthAppInputSchema;
