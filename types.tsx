export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ChatRoom : undefined;
  Contacts : undefined;

};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};
// export type ChatRoom = {
//   ChatRoomScreen = undefined;

// };

export type TabOneParamList = {
  ChatListScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type User ={
  id: String,
  name : String,
  imageUri : String

}
export type Message ={
  id : String,
  content : String,
  createdAt : String,
  user : User

}
export type ChatRoom = {
  id: String,
  users : [User],
  lastMessage : Message

}
