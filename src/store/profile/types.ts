export interface ProfileState {
    me: Me
}

export interface Profile {
        fullName: string,
        notifications: boolean
}

export interface Me {
        email: string,
        profile: Profile
}