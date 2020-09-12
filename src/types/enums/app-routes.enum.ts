// export enum AppRoutes {
//     HOME = '/',
//     SELECT = '/select',
//     GAME = '/game',
//     REGISTER = '/checkout',
//     CONFIRMATION = '/confirmation' 
// }

export enum UserRoles {
    admin = 'admin',
    nonAdmin = 'nonAdmin'
}

export enum AuthRoutes {
    SELECT = '/select',
    GAME = '/game',
    REGISTER = '/checkout',
    CONFIRMATION = '/confirmation' 
}

export enum NonAuthRoutes {
    HOME = '/',
    INFO = '/information'
}

export const userRoles = {
    admin: [String(UserRoles.admin)],
    all: [String(UserRoles.admin),
          String(UserRoles.nonAdmin)  
    ]
}