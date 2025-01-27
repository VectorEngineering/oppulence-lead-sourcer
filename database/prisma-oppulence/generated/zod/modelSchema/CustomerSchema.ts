import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// CUSTOMER SCHEMA
/////////////////////////////////////////

export const CustomerSchema = z.object({
    id: z.string().cuid(),
    name: z.string().nullish(),
    email: z.string().nullish(),
    avatar: z.string().nullish(),
    externalId: z.string().nullish(),
    stripeCustomerId: z.string().nullish(),
    linkId: z.string().nullish(),
    clickId: z.string().nullish(),
    clickedAt: z.coerce.date().nullish(),
    country: z.string().nullish(),
    projectId: z.string(),
    projectConnectId: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    addressLine1: z.string().nullish(),
    addressLine2: z.string().nullish(),
    city: z.string().nullish(),
    contact: z.string().nullish(),
    countryCode: z.string().nullish(),
    state: z.string().nullish(),
    zip: z.string().nullish(),
    note: z.string().nullish(),
    phone: z.string().nullish(),
    token: z.string().nullish(),
    vatNumber: z.string().nullish(),
    website: z.string().nullish(),
    companyName: z.string().nullish(),
    tradingName: z.string().nullish(),
    registrationNumber: z.string().nullish(),
    isVendor: z.boolean(),
    alternativePhone: z.string().nullish(),
    fax: z.string().nullish(),
    contactTitle: z.string().nullish(),
    contactEmail: z.string().nullish(),
    contactPhone: z.string().nullish(),
    billingAddressLine1: z.string().nullish(),
    billingAddressLine2: z.string().nullish(),
    billingCity: z.string().nullish(),
    billingState: z.string().nullish(),
    billingZip: z.string().nullish(),
    billingCountryCode: z.string().nullish(),
    billingEmail: z.string().nullish(),
    taxId: z.string().nullish(),
    taxExempt: z.boolean(),
    taxExemptionNumber: z.string().nullish(),
    currency: z.string(),
    preferredPaymentMethod: z.string().nullish(),
    paymentTerms: z.string().nullish(),
    creditLimit: z
        .instanceof(Prisma.Decimal, { message: "Field 'creditLimit' must be a Decimal. Location: ['Models', 'Customer']" })
        .nullish(),
    bankName: z.string().nullish(),
    bankAccountName: z.string().nullish(),
    bankAccountNumber: z.string().nullish(),
    bankRoutingNumber: z.string().nullish(),
    bankSwiftCode: z.string().nullish(),
    bankIban: z.string().nullish(),
    industry: z.string().nullish(),
    customerType: z.string().nullish(),
    customerStatus: z.string().nullish(),
    customerRating: z.number().int().nullish(),
    discountTerms: z.string().nullish(),
    latePaymentPenalty: z
        .instanceof(Prisma.Decimal, { message: "Field 'latePaymentPenalty' must be a Decimal. Location: ['Models', 'Customer']" })
        .nullish(),
    creditScore: z.number().int().nullish(),
    customFields: JsonValueSchema.nullable(),
    lastOrderDate: z.coerce.date().nullish(),
    accountManager: z.string().nullish(),
    shippingAddresses: z.string().nullish(),
    billingAddresses: z.string().nullish(),
    warehouseAddresses: z.string().nullish(),
    billingCurrency: z.string(),
    billingCycle: z.string().nullish(),
    invoiceDeliveryMethod: z.string().nullish(),
    invoiceFormat: z.string().nullish(),
    purchaseOrderRequired: z.boolean(),
    autoInvoice: z.boolean(),
    taxExemptionExpiry: z.coerce.date().nullish(),
    taxJurisdiction: z.string().nullish(),
    taxClassification: z.string().nullish(),
    withholdingTaxRate: z
        .instanceof(Prisma.Decimal, { message: "Field 'withholdingTaxRate' must be a Decimal. Location: ['Models', 'Customer']" })
        .nullish(),
    taxDocuments: JsonValueSchema.nullable(),
    availableCredit: z
        .instanceof(Prisma.Decimal, { message: "Field 'availableCredit' must be a Decimal. Location: ['Models', 'Customer']" })
        .nullish(),
    riskRating: z.string().nullish(),
    insurancePolicy: z.string().nullish(),
    insuranceExpiry: z.coerce.date().nullish(),
    insuranceCoverage: z
        .instanceof(Prisma.Decimal, { message: "Field 'insuranceCoverage' must be a Decimal. Location: ['Models', 'Customer']" })
        .nullish(),
    earlyPaymentDiscount: z
        .instanceof(Prisma.Decimal, { message: "Field 'earlyPaymentDiscount' must be a Decimal. Location: ['Models', 'Customer']" })
        .nullish(),
    minimumOrderValue: z
        .instanceof(Prisma.Decimal, { message: "Field 'minimumOrderValue' must be a Decimal. Location: ['Models', 'Customer']" })
        .nullish(),
    maximumOrderValue: z
        .instanceof(Prisma.Decimal, { message: "Field 'maximumOrderValue' must be a Decimal. Location: ['Models', 'Customer']" })
        .nullish(),
    averagePaymentDays: z.number().int().nullish(),
    paymentFrequency: z.string().nullish(),
    bankAccounts: JsonValueSchema.nullable(),
    contractStartDate: z.coerce.date().nullish(),
    contractEndDate: z.coerce.date().nullish(),
    contractRenewalDate: z.coerce.date().nullish(),
    contractStatus: z.string().nullish(),
    legalStatus: z.string().nullish(),
    complianceStatus: z.string().nullish(),
    certifications: JsonValueSchema.nullable(),
    licenses: JsonValueSchema.nullable(),
    ndaStatus: z.boolean(),
    ndaExpiryDate: z.coerce.date().nullish(),
    customerSegment: z.string().nullish(),
    accountTier: z.string().nullish(),
    leadSource: z.string().nullish(),
    marketingCampaigns: JsonValueSchema.nullable(),
    preferredLanguage: z.string().nullish(),
    communicationPreferences: JsonValueSchema.nullable(),
    subscriptionStatus: z.string().nullish(),
    loyaltyPoints: z.number().int(),
    referralSource: z.string().nullish(),
    referralCode: z.string().nullish(),
    lifetimeValue: z
        .instanceof(Prisma.Decimal, { message: "Field 'lifetimeValue' must be a Decimal. Location: ['Models', 'Customer']" })
        .nullish(),
    acquisitionCost: z
        .instanceof(Prisma.Decimal, { message: "Field 'acquisitionCost' must be a Decimal. Location: ['Models', 'Customer']" })
        .nullish(),
    retentionRate: z
        .instanceof(Prisma.Decimal, { message: "Field 'retentionRate' must be a Decimal. Location: ['Models', 'Customer']" })
        .nullish(),
    satisfactionScore: z.number().int().nullish(),
    lastReviewDate: z.coerce.date().nullish(),
    nextReviewDate: z.coerce.date().nullish(),
    erpId: z.string().nullish(),
    crmId: z.string().nullish(),
    accountingId: z.string().nullish(),
    lastLoginDate: z.coerce.date().nullish(),
    lastInteractionDate: z.coerce.date().nullish(),
    totalOrders: z.number().int(),
    totalReturns: z.number().int(),
    activeSubscriptions: z.number().int(),
    metadata: JsonValueSchema.nullable(),
    notes: JsonValueSchema.nullable()
})

export type Customer = z.infer<typeof CustomerSchema>

/////////////////////////////////////////
// CUSTOMER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CustomerOptionalDefaultsSchema = CustomerSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        isVendor: z.boolean().optional(),
        taxExempt: z.boolean().optional(),
        currency: z.string().optional(),
        billingCurrency: z.string().optional(),
        purchaseOrderRequired: z.boolean().optional(),
        autoInvoice: z.boolean().optional(),
        ndaStatus: z.boolean().optional(),
        loyaltyPoints: z.number().int().optional(),
        totalOrders: z.number().int().optional(),
        totalReturns: z.number().int().optional(),
        activeSubscriptions: z.number().int().optional()
    })
)

export type CustomerOptionalDefaults = z.infer<typeof CustomerOptionalDefaultsSchema>

export default CustomerSchema
