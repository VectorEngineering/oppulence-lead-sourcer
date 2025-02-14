export interface RouteDefinition {
    path: string
    description: string
    shouldCache?: boolean
    method: 'delete' | 'get' | 'post' | 'put' | 'patch'
    operationId: string
    summary: string
    tags: string[]
    authenticationRequired: boolean
}

export const Routes = {
    Institutions: {
        base: {
            path: '/v1/api.institutions',
            description: 'Get information about financial institutions',
            shouldCache: false,
            method: 'get',
            operationId: 'get.institutions',
            summary: 'List all financial institutions',
            tags: ['Institutions']
        },
        getById: {
            path: '/v1/api.institutions/{id}',
            description: 'Get information about a specific financial institution',
            shouldCache: true,
            method: 'get',
            operationId: 'get.institutions.by.id',
            summary: 'Get a specific financial institution',
            tags: ['Institutions']
        },
        updateUsage: {
            path: '/v1/api.institutions/{id}/usage',
            description: 'Update the usage of a financial institution',
            method: 'put',
            operationId: 'update.institutions.usage',
            summary: 'Update the usage of a financial institution',
            tags: ['Institutions']
        }
    },
    FinancialAccounts: {
        base: {
            path: '/v1/api.financial.accounts',
            description: 'Get financial accounts information',
            shouldCache: true,
            method: 'get',
            operationId: 'get.financial.accounts',
            summary: 'List all financial accounts',
            tags: ['Financial-Accounts']
        },
        getById: {
            path: '/v1/api.financial.accounts/{id}',
            description: 'Get information about a specific financial account',
            shouldCache: true,
            method: 'get',
            operationId: 'get.financial.accounts.by.id',
            summary: 'Get a specific financial account',
            tags: ['Financial Accounts']
        },
        create: {
            path: '/v1/api.financial.accounts',
            description: 'Create a new financial account',
            method: 'post',
            operationId: 'create.financial.accounts',
            summary: 'Create a new financial account',
            tags: ['Financial Accounts'],
            authenticationRequired: true
        },
        update: {
            path: '/v1/api.financial.accounts/{id}',
            description: 'Update a financial account',
            method: 'put',
            operationId: 'update.financial.accounts',
            summary: 'Update a financial account',
            tags: ['Financial Accounts'],
            authenticationRequired: true
        },
        delete: {
            path: '/v1/api.financial.accounts/{id}',
            description: 'Delete a financial account',
            method: 'delete',
            operationId: 'delete.financial.accounts',
            summary: 'Delete a financial account',
            tags: ['Financial-Accounts'],
            authenticationRequired: true
        }
    },
    AccountBalance: {
        base: {
            path: '/v1/api.financial.accounts/balance',
            description: 'Get account balance information',
            shouldCache: true,
            method: 'get',
            operationId: 'get.account.balances',
            summary: 'List all account balances',
            tags: ['Account Balance']
        },
        // NOTE: NOT YET SUPPORTED
        getById: {
            path: '/v1/api.financial.accounts/{id}/balance',
            description: 'Get balance for a specific account',
            shouldCache: true,
            method: 'get',
            operationId: 'get.account.balance.by.id',
            summary: 'Get balance for a specific account',
            tags: ['Account Balance']
        }
    },
    Rates: {
        base: {
            path: '/v1/api.rates',
            description: 'Get various financial rates',
            shouldCache: true,
            method: 'get',
            operationId: 'get.rates',
            summary: 'List all financial rates',
            tags: ['Rates']
        },
        getByType: {
            path: '/v1/api.rates/:type',
            description: 'Get rates for a specific type',
            shouldCache: true,
            method: 'get',
            operationId: 'get.rates.by.type',
            summary: 'Get rates for a specific type',
            tags: ['Rates']
        }
    },
    ApiKeys: {
        base: {
            path: '/v1/api.apikeys',
            description: 'Manage API keys',
            shouldCache: true,
            method: 'get',
            operationId: 'get.api.keys',
            summary: 'List all API keys',
            tags: ['API Keys'],
            authenticationRequired: true
        },
        create: {
            path: '/v1/api.apikeys',
            description: 'Create a new API key',
            method: 'post',
            operationId: 'create.api.key',
            summary: 'Create a new API key',
            tags: ['API Keys'],
            authenticationRequired: true
        },
        revoke: {
            path: '/v1/api.apikeys/{id}',
            description: 'Revoke an API key',
            method: 'delete',
            operationId: 'delete.api.key',
            summary: 'Revoke an API key',
            tags: ['API Keys'],
            authenticationRequired: true
        }
    },
    Auth: {
        plaidLink: {
            path: '/v1/api.plaid/link',
            description: 'Create a Plaid link token for user authentication',
            method: 'post',
            operationId: 'post.plaid.link',
            summary: 'Auth Link (Plaid)',
            tags: ['auth', 'plaid']
        },
        plaidExchange: {
            path: '/v1/api.plaid/exchange',
            description: 'Exchange a Plaid public token for an access token',
            method: 'post',
            operationId: 'post.plaid.exchange',
            summary: 'Exchange token (Plaid)',
            tags: ['auth', 'plaid']
        },
        gocardlessLink: {
            path: '/v1/api.gocardless/link',
            description: 'Create a GoCardless link for user authentication',
            method: 'post',
            operationId: 'post.gocardless.link',
            summary: 'Auth link (GoCardLess)',
            tags: ['auth', 'gocardless']
        },
        gocardlessExchange: {
            path: '/v1/api.gocardless/exchange',
            description: 'Exchange GoCardless tokens',
            method: 'post',
            operationId: 'post.gocardless.exchange',
            summary: 'Exchange token (GoCardLess)',
            tags: ['auth', 'gocardless']
        },
        gocardlessAgreement: {
            path: '/v1/api.gocardless/agreement',
            description: 'Create a GoCardLess agreement',
            method: 'post',
            operationId: 'post.gocardless.agreement',
            summary: 'Agreement (GoCardLess)',
            tags: ['auth', 'gocardless']
        }
    },
    Health: {
        check: {
            path: '/v1/api.health',
            description: 'Check the health status of the API',
            method: 'get',
            operationId: 'get.health',
            summary: 'Health Check',
            tags: ['health']
        }
    },
    Statements: {
        list: {
            path: '/v1/api.statements',
            description: 'Get statements for a specific account',
            method: 'get',
            operationId: 'get.statements',
            summary: 'Get Statements',
            tags: ['statements'],
            shouldCache: true
        },
        getPdf: {
            path: '/v1/api.statements/pdf',
            description: 'Get a specific statement in PDF format',
            method: 'get',
            operationId: 'get.statements.pdf',
            summary: 'Get Statement PDF',
            tags: ['statements'],
            shouldCache: true
        }
    },
    Transactions: {
        list: {
            path: '/v1/api.transactions',
            description: 'Get transactions for a specific account',
            method: 'get',
            operationId: 'get.transactions',
            summary: 'Get transactions',
            tags: ['transactions'],
            shouldCache: false
        },
        recurring: {
            path: '/v1/api.transactions/recurring',
            description: 'Get recurring transactions for a specific account',
            method: 'get',
            operationId: 'get.transactions.recurring',
            summary: 'Get recurring transactions',
            tags: ['transactions'],
            shouldCache: false
        }
    },
    Users: {
        create: {
            path: '/v1/api.users',
            description: 'Create a new user',
            method: 'post',
            operationId: 'post.users',
            summary: 'Create User',
            tags: ['users'],
            authenticationRequired: false
        },
        get: {
            path: '/v1/api.users/{id}',
            description: 'Get a user by ID',
            method: 'get',
            operationId: 'get.users',
            summary: 'Get User',
            tags: ['users'],
            shouldCache: true,
            authenticationRequired: true
        },
        update: {
            path: '/v1/api.users/{id}',
            description: 'Update a user',
            method: 'put',
            operationId: 'put.users',
            summary: 'Update User',
            tags: ['users'],
            authenticationRequired: true
        },
        delete: {
            path: '/v1/api.users/{id}',
            description: 'Delete a user',
            method: 'delete',
            operationId: 'delete.users',
            summary: 'Delete User',
            tags: ['users'],
            authenticationRequired: true
        }
    }
} as const

export const AllRoutes: RouteDefinition[] = Object.values(Routes).flatMap((routeGroup) => Object.values(routeGroup))

export const CachedRoutes: RouteDefinition[] = AllRoutes.filter((route) => route.shouldCache === true)

export const AuthenticationRequiredRoutes: RouteDefinition[] = AllRoutes.filter((route) => route.authenticationRequired === true)
