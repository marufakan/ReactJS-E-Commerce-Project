import axios from "axios"
import { IUserAuth } from "./models/IUserAuth"
import { ICustomerRegister } from "./models/ICustomerRegister"


const baseURL = 'http://localhost:8083/'
const config = axios.create({
    baseURL: baseURL,
    params: {
    }
})

//admin login
//customer login
export const userLogin = (email: string, password: string) => {
    const sendParams = {
        username: email,
        password: password,
    }
    // body json object send service
    return config.post<IUserAuth>('auth', sendParams )//
}

//customer register
export const customerRegister = (firstName: string, lastName: string, phone: string, email: string, password: string) => {
    const sendParams = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        password: password,
        "enabled" : true,
        "tokenExpired" : true,
        "roles":{"id":2,"name":"ROLE_customer"}
    }
    // body json object send service
    return config.post<ICustomerRegister>('customerRegister', sendParams )//
}
////////
/*export const save = ( subject: string, content: string  ) => {
    const sendItem = {
        subject: subject,
        content: content
    }
    return config.post('save', sendItem )
}

export const list = () => {
    return config.get("list")
}

export const read = ( id: number ) => {
    return config.get("read/"+id)
}*/