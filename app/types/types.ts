export interface UserItem {
  id: number;
  name: string;
  role: string;
  ctime: number;
}

export interface UsersState {
  total: number;
  per_page: number;
  page: number;
  limit: number;
  offset: number;
  items: UserItem[];
  loading: string;
  error?: string;
}

export interface WebSocketState {
  messages: string[];
}

export interface WsMessage {
  ctime: number;
  event: string;
}
