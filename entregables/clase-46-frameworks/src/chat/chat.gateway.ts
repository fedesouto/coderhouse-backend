import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';

@WebSocketGateway()
export class ChatGateway implements NestGateway {
  constructor(private chatService: ChatService) {}

  afterInit(server: any) {
    console.log('WebSocket gateway init');
  }
  async handleConnection(socket: any) {
    socket.emit('chat_init', await this.chatService.findAll());
  }
  @SubscribeMessage('new_message')
  async handleNewMessage(sender: any, chat: CreateChatDto) {
    await this.chatService.create(chat);
    const updatedChats = await this.chatService.findAll();
    sender.emit('chat_update', updatedChats);
    sender.broadcast.emit('chat_update', updatedChats);
  }
}
