import { z } from 'zod';

export const LeadProductFitScalarFieldEnumSchema = z.enum(['id','leadId','technicalFit','businessFit','culturalFit','budgetFit','overallFit','strengthsWeaknesses','customizationNeeds','implementationComplexity','requiredFeatures','optionalFeatures','dealBreakers','integrationComplexity','integrationRisks','integrationCosts','implementationTimeline','trainingNeeds','createdAt','updatedAt']);

export default LeadProductFitScalarFieldEnumSchema;
