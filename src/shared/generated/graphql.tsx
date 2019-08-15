export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** MongoId custom scalar type */
  MongoId: any,
  Upload: any,
}

export interface AddVoteInput {
  questionOptionId?: Maybe<Scalars['MongoId']>,
}

export interface ChangePasswordInput {
  oldPassword: Scalars['String'],
  newPassword: Scalars['String'],
}

export interface Config {
  __typename?: 'Config',
}

export interface Contact {
  __typename?: 'Contact',
  _id?: Maybe<Scalars['MongoId']>,
  friendTo?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  emails?: Maybe<Array<Maybe<Scalars['String']>>>,
  phones?: Maybe<Array<Maybe<Scalars['String']>>>,
}

export interface ContactInput {
  emails?: Maybe<Array<Maybe<Scalars['String']>>>,
  phones?: Maybe<Array<Maybe<Scalars['String']>>>,
}

export interface Country {
  __typename?: 'Country',
  _id?: Maybe<Scalars['MongoId']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
  currency?: Maybe<Scalars['String']>,
  code?: Maybe<Scalars['String']>,
  flag?: Maybe<Scalars['String']>,
}

export interface CreateFollowRequestInput {
  toUserId?: Maybe<Scalars['String']>,
}

export interface CreateQuestionInput {
  title?: Maybe<Scalars['String']>,
  titleColor?: Maybe<Scalars['String']>,
  expiredTime?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['Upload']>,
  type?: Maybe<QuestionType>,
  memberIds?: Maybe<Array<Maybe<Scalars['MongoId']>>>,
  questionOptions?: Maybe<Array<Maybe<CreateQuestionOptionInput>>>,
}

export interface CreateQuestionOptionInput {
  text: Scalars['String'],
}

export interface FcmTokenInput {
  token?: Maybe<Scalars['String']>,
}

export interface FollowRequest {
  __typename?: 'FollowRequest',
  _id?: Maybe<Scalars['MongoId']>,
  fromUserId?: Maybe<Scalars['MongoId']>,
  toUserId?: Maybe<Scalars['MongoId']>,
  status?: Maybe<FollowRequestStatus>,
  fromUser?: Maybe<User>,
  toUser?: Maybe<User>,
}

export interface FollowRequestNotification {
  __typename?: 'FollowRequestNotification',
  _id?: Maybe<Scalars['MongoId']>,
  followRequestId?: Maybe<Scalars['MongoId']>,
  followRequest?: Maybe<FollowRequest>,
  forUserId?: Maybe<Scalars['MongoId']>,
  createdAt?: Maybe<Scalars['String']>,
}

export enum FollowRequestStatus {
  Pending = 'PENDING',
  Declined = 'DECLINED',
  Accepted = 'ACCEPTED',
}

export enum FriendStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Invited = 'INVITED',
  Registered = 'REGISTERED',
}

export interface LoginInput {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
}

export interface LogOutInput {
  FCMToken?: Maybe<Scalars['String']>,
}

export interface Media {
  __typename?: 'Media',
  _id?: Maybe<Scalars['MongoId']>,
  dir?: Maybe<Scalars['String']>,
  filename?: Maybe<Scalars['String']>,
  mimetype?: Maybe<Scalars['String']>,
}

export interface Mutation {
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
}

export interface MutationLoginArgs {
  input?: Maybe<LoginInput>
}

export interface MutationLogoutArgs {
  input?: Maybe<LogOutInput>
}

export interface MutationRegistrationArgs {
  input?: Maybe<UserInput>
}

export interface MutationChangePasswordArgs {
  input?: Maybe<ChangePasswordInput>
}

export interface MutationResetPasswordArgs {
  email?: Maybe<Scalars['String']>
}

export interface MutationResetPasswordConfirmCodeArgs {
  resetPasswordCode?: Maybe<Scalars['String']>
}

export interface MutationResetPasswordConfirmArgs {
  input?: Maybe<ResetPasswordConfirmInput>
}

export interface MutationImportContactsArgs {
  input?: Maybe<Array<Maybe<ContactInput>>>
}

export interface MutationSendFcmTokenArgs {
  input?: Maybe<FcmTokenInput>
}

export interface MutationCreateFollowRequestArgs {
  input?: Maybe<CreateFollowRequestInput>
}

export interface MutationUpdateFollowRequestArgs {
  input?: Maybe<UpdateFollowRequestInput>
}

export interface MutationCreateQuestionArgs {
  input?: Maybe<CreateQuestionInput>
}

export interface MutationDeleteQuestionArgs {
  input?: Maybe<Scalars['String']>
}

export interface MutationReportContentArgs {
  input?: Maybe<ReportContentInput>
}

export interface MutationReportUserArgs {
  input?: Maybe<ReportUserInput>
}

export interface MutationUpdateMeArgs {
  input?: Maybe<UpdateUserInput>
}

export interface MutationAddVoteArgs {
  input?: Maybe<AddVoteInput>
}

export interface Notification {
  __typename?: 'Notification',
  followRequest?: Maybe<Array<Maybe<FollowRequestNotification>>>,
  userFromContacts?: Maybe<Array<Maybe<UserFromContactsNotification>>>,
  question?: Maybe<Array<Maybe<QuestionNotification>>>,
}

export interface PagedQuestion {
  __typename?: 'PagedQuestion',
  results?: Maybe<Array<Maybe<Question>>>,
  next?: Maybe<Scalars['String']>,
  hasNext?: Maybe<Scalars['Boolean']>,
  previous?: Maybe<Scalars['String']>,
  hasPrevious?: Maybe<Scalars['Boolean']>,
}

export interface PagedUsers {
  __typename?: 'PagedUsers',
  results?: Maybe<Array<Maybe<User>>>,
  next?: Maybe<Scalars['String']>,
  hasNext?: Maybe<Scalars['Boolean']>,
  previous?: Maybe<Scalars['String']>,
  hasPrevious?: Maybe<Scalars['Boolean']>,
}

export interface PersonProfile {
  __typename?: 'PersonProfile',
  _id: Scalars['MongoId'],
  fullName?: Maybe<Scalars['String']>,
  avatarId?: Maybe<Scalars['MongoId']>,
  avatar?: Maybe<Media>,
  avatarThumbId?: Maybe<Scalars['MongoId']>,
  avatarThumb?: Maybe<Media>,
  friendsCount?: Maybe<Scalars['Int']>,
  rewalsCount?: Maybe<Scalars['Int']>,
}

export interface Profile {
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
}

export interface ProfileInput {
  fullName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  countryCode?: Maybe<Scalars['String']>,
  notifications?: Maybe<Scalars['Boolean']>,
  avatar?: Maybe<Scalars['Upload']>,
}

export interface Query {
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
}

export interface QueryPersonProfileArgs {
  id: Scalars['String']
}

export interface QueryQuestionArgs {
  id?: Maybe<Scalars['String']>
}

export interface QueryFriendsQuestionsArgs {
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
}

export interface QueryMyQuestionsArgs {
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
}

export interface QueryFeedQuestionsArgs {
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
}

export interface QueryPersonQuestionsArgs {
  id?: Maybe<Scalars['String']>,
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
}

export interface QueryQuestionOptionArgs {
  id?: Maybe<Scalars['String']>
}

export interface QuerySearchArgs {
  fullName?: Maybe<Scalars['String']>,
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
}

export interface QueryUserArgs {
  id: Scalars['String']
}

export interface QueryUserFriendsArgs {
  userId?: Maybe<Scalars['String']>,
  fullName?: Maybe<Scalars['String']>,
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
}

export interface QueryAllUserFriendsArgs {
  userId?: Maybe<Scalars['String']>
}

export interface Question {
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
}

export interface QuestionNotification {
  __typename?: 'QuestionNotification',
  _id?: Maybe<Scalars['MongoId']>,
  questionId?: Maybe<Scalars['MongoId']>,
  question?: Maybe<Question>,
  type?: Maybe<QuestionNotificationType>,
  forUsersIds?: Maybe<Array<Maybe<Scalars['MongoId']>>>,
  createdAt?: Maybe<Scalars['String']>,
}

export enum QuestionNotificationType {
  New = 'NEW',
  SoonExpired = 'SOON_EXPIRED',
  Expired = 'EXPIRED',
}

export interface QuestionOption {
  __typename?: 'QuestionOption',
  _id?: Maybe<Scalars['MongoId']>,
  text?: Maybe<Scalars['String']>,
  questionId?: Maybe<Scalars['MongoId']>,
  votes?: Maybe<Scalars['Int']>,
}

export enum QuestionType {
  Text = 'TEXT',
}

export interface ReportContentInput {
  complaint?: Maybe<Scalars['String']>,
  toQuestionId?: Maybe<Scalars['MongoId']>,
}

export interface ReportUserInput {
  complaint?: Maybe<Scalars['String']>,
  toUserId?: Maybe<Scalars['MongoId']>,
}

export interface ResetPasswordConfirmCodeInput {
  resetPasswordCode: Scalars['String'],
}

export interface ResetPasswordConfirmInput {
  resetPasswordCode: Scalars['String'],
  password: Scalars['String'],
}

export interface Roles {
  __typename?: 'Roles',
  admin?: Maybe<Scalars['Boolean']>,
  regular?: Maybe<Scalars['Boolean']>,
}

export interface Subscription {
  __typename?: 'Subscription',
  invitedToFriends?: Maybe<FollowRequestNotification>,
  userFromContactsJoinedRewala?: Maybe<UserFromContactsNotification>,
  addedQuestion?: Maybe<QuestionNotification>,
  expiredQuestion?: Maybe<QuestionNotification>,
  soonExpiredQuestion?: Maybe<QuestionNotification>,
}

export interface SubscriptionInvitedToFriendsArgs {
  repoFullName: Scalars['String']
}

export interface SubscriptionUserFromContactsJoinedRewalaArgs {
  repoFullName: Scalars['String']
}

export interface SubscriptionAddedQuestionArgs {
  repoFullName: Scalars['String']
}

export interface SubscriptionExpiredQuestionArgs {
  repoFullName: Scalars['String']
}

export interface SubscriptionSoonExpiredQuestionArgs {
  repoFullName: Scalars['String']
}

export interface UpdateFollowRequestInput {
  _id?: Maybe<Scalars['String']>,
  status?: Maybe<FollowRequestStatus>,
}

export interface UpdateUserInput {
  email?: Maybe<Scalars['String']>,
  profileInput?: Maybe<ProfileInput>,
}

export interface User {
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
}

export interface UserFromContactsNotification {
  __typename?: 'UserFromContactsNotification',
  _id?: Maybe<Scalars['MongoId']>,
  userId?: Maybe<Scalars['MongoId']>,
  user?: Maybe<User>,
  forUsersIds?: Maybe<Array<Maybe<Scalars['MongoId']>>>,
  createdAt?: Maybe<Scalars['String']>,
}

export interface UserInput {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  isAgreeWithPrivacyPolicyAndTermOfUse?: Maybe<Scalars['Boolean']>,
  profileInput: ProfileInput,
}

export enum UserStatus {
  Deleted = 'DELETED',
  Inactive = 'INACTIVE',
  Active = 'ACTIVE',
}

export interface Vote {
  __typename?: 'Vote',
  _id: Scalars['MongoId'],
  user?: Maybe<User>,
  questionOption?: Maybe<QuestionOption>,
}
