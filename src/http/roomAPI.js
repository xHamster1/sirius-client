import { $authHost, $host } from "./index"

export const createType = async (type) => {
    const {data} = await $authHost.post('type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('type')
    return data
} 

export const createAddress = async (address) => {
    const {data} = await $authHost.post('address', address)
    return data
}

export const fetchAddress = async () => {
    const {data} = await $host.get('address')
    return data
} 

export const createRoom = async (room) => {
    const {data} = await $authHost.post('room', room)
    return data
}

export const fetchRoom = async (typeId, addressId, page, limit = 1) => {
    const {data} = await $host.get('room', {params: {
        typeId, addressId, page, limit 
    }})
    return data
} 

export const fetchOneRoom = async (id) => {
    const {data} = await $host.get('room/' + id)
    return data
} 