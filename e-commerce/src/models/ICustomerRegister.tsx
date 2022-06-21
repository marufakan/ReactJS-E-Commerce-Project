export interface ICustomerRegister {
    status: boolean;
    result?: Result;
}

export interface Result {
    createdBy?:        string;
    lastModifiedBy?:   string;
    createdDate?:      number;
    lastModifiedDate?: number;
    id?:               number;
    firstName?:        string;
    lastName?:         string;
    email?:            string;
    password?:         string;
    enabled?:          boolean;
    tokenExpired?:     boolean;
    phone?:            string;
    roles?:            Roles;
}

export interface Roles {
    id?:   number;
    name?: string;
}