export enum AppRoutes {
    HOME = '/',
    SELECT = '/select',
    GAME = '/game',
    REGISTER = '/checkout'
}

export enum UserRoles {
    admin = 'admin',
    nonAdmin = 'nonAdmin'
}

export enum AuthRoutes {
    SELECT = '/select',
    GAME = '/game',
    REGISTER = '/checkout'
}

export enum NonAuthRoutes {
    HOME = '/',
}

export const userRoles = {
    admin: [String(UserRoles.admin)],
    all: [String(UserRoles.admin),
          String(UserRoles.nonAdmin)  
    ]
}