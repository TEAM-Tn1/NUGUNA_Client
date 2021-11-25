export interface detailChatResponse {
  message_id: number;
  message: string;
  type: string;
  email: string;
  name: string;
  sent_at: string;
}

export interface socketResponse {
  message_id: number;
  content: string;
  type: string;
  email: string;
  name: string;
  sent_at: string;
}
