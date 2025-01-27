import { z } from 'zod';

export const ProjectOrderByRelevanceFieldEnumSchema = z.enum(['id','name','slug','logo','inviteCode','plan','stripeId','stripeConnectId','payoutMethodId','shopifyStoreId','invoicePrefix','reason','referralLinkId']);

export default ProjectOrderByRelevanceFieldEnumSchema;
