export interface detailChatResponse {
  message_id: number;
  message: string;
  type: string;
  email: string;
  name: string;
  sent_at: string;
}

export interface infoResponse {
  room_number: string;
  account_number: string;
}
