export interface Profile {
  fullName: string;
  notifications: boolean;
}

export interface Me {
  me: {
    email: string;
    profile: Profile;
  };
}
