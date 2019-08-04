import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** MongoId custom scalar type */
  MongoId: any,
  Upload: any,
};


export type AddVoteInput = {
  questionOptionId?: Maybe<Scalars['MongoId']>,
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'],
  newPassword: Scalars['String'],
};

export type Config = {
  __typename?: 'Config',
  countries?: Maybe<Array<Maybe<Country>>>,
};

export type Contact = {
  __typename?: 'Contact',
  _id?: Maybe<Scalars['MongoId']>,
  friendTo?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  emails?: Maybe<Array<Maybe<Scalars['String']>>>,
  phones?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ContactInput = {
  emails?: Maybe<Array<Maybe<Scalars['String']>>>,
  phones?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type Country = {
  __typename?: 'Country',
  _id?: Maybe<Scalars['MongoId']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
  currency?: Maybe<Scalars['String']>,
  code?: Maybe<Scalars['String']>,
  flag?: Maybe<Scalars['String']>,
};

export type CreateFollowRequestInput = {
  toUserId?: Maybe<Scalars['String']>,
};

export type CreateQuestionInput = {
  title?: Maybe<Scalars['String']>,
  titleColor?: Maybe<Scalars['String']>,
  expiredTime?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['Upload']>,
  type?: Maybe<QuestionType>,
  memberIds?: Maybe<Array<Maybe<Scalars['MongoId']>>>,
  questionOptions?: Maybe<Array<Maybe<CreateQuestionOptionInput>>>,
};

export type CreateQuestionOptionInput = {
  text: Scalars['String'],
};

export type FcmTokenInput = {
  token?: Maybe<Scalars['String']>,
};

export type FollowRequest = {
  __typename?: 'FollowRequest',
  _id?: Maybe<Scalars['MongoId']>,
  fromUserId?: Maybe<Scalars['MongoId']>,
  toUserId?: Maybe<Scalars['MongoId']>,
  status?: Maybe<FollowRequestStatus>,
  fromUser?: Maybe<User>,
  toUser?: Maybe<User>,
};

export type FollowRequestNotification = {
  __typename?: 'FollowRequestNotification',
  _id?: Maybe<Scalars['MongoId']>,
  followRequestId?: Maybe<Scalars['MongoId']>,
  followRequest?: Maybe<FollowRequest>,
  forUserId?: Maybe<Scalars['MongoId']>,
  createdAt?: Maybe<Scalars['String']>,
};

export enum FollowRequestStatus {
  Pending = 'PENDING',
  Declined = 'DECLINED',
  Accepted = 'ACCEPTED'
}

export enum FriendStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Invited = 'INVITED',
  Registered = 'REGISTERED'
}

export type LoginInput = {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
};

export type LogOutInput = {
  FCMToken?: Maybe<Scalars['String']>,
};

export type Media = {
  __typename?: 'Media',
  _id?: Maybe<Scalars['MongoId']>,
  dir?: Maybe<Scalars['String']>,
  filename?: Maybe<Scalars['String']>,
  mimetype?: Maybe<Scalars['String']>,
};


export type Mutation = {
  __typename?: 'Mutation',
  login?: Maybe<User>,
  logout?: Maybe<Scalars['Boolean']>,
  registration?: Maybe<User>,
  changePassword?: Maybe<User>,
  resetPassword?: Maybe<Scalars['Boolean']>,
  resetPasswordConfirmCode?: Maybe<Scalars['Boolean']>,
  resetPasswordConfirm?: Maybe<Scalars['Boolean']>,
  importContacts?: Maybe<Array<Maybe<User>>>,
  sendFCMToken?: Maybe<Scalars['Boolean']>,
  createFollowRequest?: Maybe<FollowRequest>,
  updateFollowRequest?: Maybe<FollowRequest>,
  createQuestion?: Maybe<Question>,
  deleteQuestion?: Maybe<Question>,
  reportContent?: Maybe<Scalars['Boolean']>,
  reportUser?: Maybe<Scalars['Boolean']>,
  updateMe?: Maybe<User>,
  addVote?: Maybe<Question>,
};


export type MutationLoginArgs = {
  input?: Maybe<LoginInput>
};


export type MutationLogoutArgs = {
  input?: Maybe<LogOutInput>
};


export type MutationRegistrationArgs = {
  input?: Maybe<UserInput>
};


export type MutationChangePasswordArgs = {
  input?: Maybe<ChangePasswordInput>
};


export type MutationResetPasswordArgs = {
  email?: Maybe<Scalars['String']>
};


export type MutationResetPasswordConfirmCodeArgs = {
  resetPasswordCode?: Maybe<Scalars['String']>
};


export type MutationResetPasswordConfirmArgs = {
  input?: Maybe<ResetPasswordConfirmInput>
};


export type MutationImportContactsArgs = {
  input?: Maybe<Array<Maybe<ContactInput>>>
};


export type MutationSendFcmTokenArgs = {
  input?: Maybe<FcmTokenInput>
};


export type MutationCreateFollowRequestArgs = {
  input?: Maybe<CreateFollowRequestInput>
};


export type MutationUpdateFollowRequestArgs = {
  input?: Maybe<UpdateFollowRequestInput>
};


export type MutationCreateQuestionArgs = {
  input?: Maybe<CreateQuestionInput>
};


export type MutationDeleteQuestionArgs = {
  input?: Maybe<Scalars['String']>
};


export type MutationReportContentArgs = {
  input?: Maybe<ReportContentInput>
};


export type MutationReportUserArgs = {
  input?: Maybe<ReportUserInput>
};


export type MutationUpdateMeArgs = {
  input?: Maybe<UpdateUserInput>
};


export type MutationAddVoteArgs = {
  input?: Maybe<AddVoteInput>
};

export type Notification = {
  __typename?: 'Notification',
  followRequest?: Maybe<Array<Maybe<FollowRequestNotification>>>,
  userFromContacts?: Maybe<Array<Maybe<UserFromContactsNotification>>>,
  question?: Maybe<Array<Maybe<QuestionNotification>>>,
};

export type PagedQuestion = {
  __typename?: 'PagedQuestion',
  results?: Maybe<Array<Maybe<Question>>>,
  next?: Maybe<Scalars['String']>,
  hasNext?: Maybe<Scalars['Boolean']>,
  previous?: Maybe<Scalars['String']>,
  hasPrevious?: Maybe<Scalars['Boolean']>,
};

export type PagedUsers = {
  __typename?: 'PagedUsers',
  results?: Maybe<Array<Maybe<User>>>,
  next?: Maybe<Scalars['String']>,
  hasNext?: Maybe<Scalars['Boolean']>,
  previous?: Maybe<Scalars['String']>,
  hasPrevious?: Maybe<Scalars['Boolean']>,
};

export type PersonProfile = {
  __typename?: 'PersonProfile',
  _id: Scalars['MongoId'],
  fullName?: Maybe<Scalars['String']>,
  avatarId?: Maybe<Scalars['MongoId']>,
  avatar?: Maybe<Media>,
  avatarThumbId?: Maybe<Scalars['MongoId']>,
  avatarThumb?: Maybe<Media>,
  friendsCount?: Maybe<Scalars['Int']>,
  rewalsCount?: Maybe<Scalars['Int']>,
};

export type Profile = {
  __typename?: 'Profile',
  _id: Scalars['MongoId'],
  fullName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  countryCode?: Maybe<Scalars['String']>,
  notifications?: Maybe<Scalars['Boolean']>,
  avatarId?: Maybe<Scalars['MongoId']>,
  avatar?: Maybe<Media>,
  avatarThumbId?: Maybe<Scalars['MongoId']>,
  avatarThumb?: Maybe<Media>,
  friendsCount?: Maybe<Scalars['Int']>,
  rewalsCount?: Maybe<Scalars['Int']>,
};

export type ProfileInput = {
  fullName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  countryCode?: Maybe<Scalars['String']>,
  notifications?: Maybe<Scalars['Boolean']>,
  avatar?: Maybe<Scalars['Upload']>,
};

export type Query = {
  __typename?: 'Query',
  config?: Maybe<Config>,
  myFollowRequests?: Maybe<Array<Maybe<FollowRequest>>>,
  myUnseenNotifications?: Maybe<Notification>,
  confirmViewingAllNotifications?: Maybe<Scalars['Boolean']>,
  profiles?: Maybe<Array<Maybe<PersonProfile>>>,
  personProfile?: Maybe<PersonProfile>,
  question?: Maybe<Question>,
  questionCount?: Maybe<Scalars['Int']>,
  friendsQuestions?: Maybe<PagedQuestion>,
  myQuestions?: Maybe<PagedQuestion>,
  feedQuestions?: Maybe<PagedQuestion>,
  personQuestions?: Maybe<PagedQuestion>,
  questionOption?: Maybe<QuestionOption>,
  userStatusIn?: Maybe<Array<Maybe<UserStatus>>>,
  users?: Maybe<Array<Maybe<User>>>,
  search?: Maybe<PagedUsers>,
  user?: Maybe<User>,
  userFriends?: Maybe<PagedUsers>,
  allUserFriends?: Maybe<Array<Maybe<User>>>,
  me?: Maybe<User>,
  temp__?: Maybe<Scalars['Boolean']>,
};


export type QueryPersonProfileArgs = {
  id: Scalars['String']
};


export type QueryQuestionArgs = {
  id?: Maybe<Scalars['String']>
};


export type QueryFriendsQuestionsArgs = {
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMyQuestionsArgs = {
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryFeedQuestionsArgs = {
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryPersonQuestionsArgs = {
  id?: Maybe<Scalars['String']>,
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryQuestionOptionArgs = {
  id?: Maybe<Scalars['String']>
};


export type QuerySearchArgs = {
  fullName?: Maybe<Scalars['String']>,
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  id: Scalars['String']
};


export type QueryUserFriendsArgs = {
  userId?: Maybe<Scalars['String']>,
  fullName?: Maybe<Scalars['String']>,
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryAllUserFriendsArgs = {
  userId?: Maybe<Scalars['String']>
};

export type Question = {
  __typename?: 'Question',
  _id: Scalars['MongoId'],
  title?: Maybe<Scalars['String']>,
  titleColor?: Maybe<Scalars['String']>,
  expiredTime?: Maybe<Scalars['String']>,
  img?: Maybe<Scalars['String']>,
  type?: Maybe<QuestionType>,
  backgroundId?: Maybe<Scalars['MongoId']>,
  background?: Maybe<Media>,
  memberIds?: Maybe<Array<Maybe<Scalars['MongoId']>>>,
  ownerId?: Maybe<Scalars['MongoId']>,
  owner?: Maybe<User>,
  questionOptions?: Maybe<Array<Maybe<QuestionOption>>>,
  createdAt?: Maybe<Scalars['String']>,
  isFinished?: Maybe<Scalars['Boolean']>,
  userVote?: Maybe<Vote>,
  totalVotes?: Maybe<Scalars['Int']>,
};

export type QuestionNotification = {
  __typename?: 'QuestionNotification',
  _id?: Maybe<Scalars['MongoId']>,
  questionId?: Maybe<Scalars['MongoId']>,
  question?: Maybe<Question>,
  type?: Maybe<QuestionNotificationType>,
  forUsersIds?: Maybe<Array<Maybe<Scalars['MongoId']>>>,
  createdAt?: Maybe<Scalars['String']>,
};

export enum QuestionNotificationType {
  New = 'NEW',
  SoonExpired = 'SOON_EXPIRED',
  Expired = 'EXPIRED'
}

export type QuestionOption = {
  __typename?: 'QuestionOption',
  _id?: Maybe<Scalars['MongoId']>,
  text?: Maybe<Scalars['String']>,
  questionId?: Maybe<Scalars['MongoId']>,
  votes?: Maybe<Scalars['Int']>,
};

export enum QuestionType {
  Text = 'TEXT'
}

export type ReportContentInput = {
  complaint?: Maybe<Scalars['String']>,
  toQuestionId?: Maybe<Scalars['MongoId']>,
};

export type ReportUserInput = {
  complaint?: Maybe<Scalars['String']>,
  toUserId?: Maybe<Scalars['MongoId']>,
};

export type ResetPasswordConfirmCodeInput = {
  resetPasswordCode: Scalars['String'],
};

export type ResetPasswordConfirmInput = {
  resetPasswordCode: Scalars['String'],
  password: Scalars['String'],
};

export type Roles = {
  __typename?: 'Roles',
  admin?: Maybe<Scalars['Boolean']>,
  regular?: Maybe<Scalars['Boolean']>,
};

export type Subscription = {
  __typename?: 'Subscription',
  invitedToFriends?: Maybe<FollowRequestNotification>,
  userFromContactsJoinedRewala?: Maybe<UserFromContactsNotification>,
  addedQuestion?: Maybe<QuestionNotification>,
  expiredQuestion?: Maybe<QuestionNotification>,
  soonExpiredQuestion?: Maybe<QuestionNotification>,
};


export type SubscriptionInvitedToFriendsArgs = {
  repoFullName: Scalars['String']
};


export type SubscriptionUserFromContactsJoinedRewalaArgs = {
  repoFullName: Scalars['String']
};


export type SubscriptionAddedQuestionArgs = {
  repoFullName: Scalars['String']
};


export type SubscriptionExpiredQuestionArgs = {
  repoFullName: Scalars['String']
};


export type SubscriptionSoonExpiredQuestionArgs = {
  repoFullName: Scalars['String']
};

export type UpdateFollowRequestInput = {
  _id?: Maybe<Scalars['String']>,
  status?: Maybe<FollowRequestStatus>,
};

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>,
  profileInput?: Maybe<ProfileInput>,
};


export type User = {
  __typename?: 'User',
  _id?: Maybe<Scalars['MongoId']>,
  email?: Maybe<Scalars['String']>,
  profile?: Maybe<Profile>,
  authToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Roles>,
  status?: Maybe<UserStatus>,
  statusIn?: Maybe<Array<Maybe<UserStatus>>>,
  followRequestWithMe?: Maybe<FollowRequest>,
  rewalsCount?: Maybe<Scalars['Int']>,
};

export type UserFromContactsNotification = {
  __typename?: 'UserFromContactsNotification',
  _id?: Maybe<Scalars['MongoId']>,
  userId?: Maybe<Scalars['MongoId']>,
  user?: Maybe<User>,
  forUsersIds?: Maybe<Array<Maybe<Scalars['MongoId']>>>,
  createdAt?: Maybe<Scalars['String']>,
};

export type UserInput = {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  isAgreeWithPrivacyPolicyAndTermOfUse?: Maybe<Scalars['Boolean']>,
  profileInput: ProfileInput,
};

export enum UserStatus {
  Deleted = 'DELETED',
  Inactive = 'INACTIVE',
  Active = 'ACTIVE'
}

export type Vote = {
  __typename?: 'Vote',
  _id: Scalars['MongoId'],
  user?: Maybe<User>,
  questionOption?: Maybe<QuestionOption>,
};
