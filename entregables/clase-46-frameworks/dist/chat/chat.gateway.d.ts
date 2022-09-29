import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
export declare class ChatGateway implements NestGateway {
    private chatService;
    constructor(chatService: ChatService);
    afterInit(server: any): void;
    handleConnection(socket: any): Promise<void>;
    handleNewMessage(sender: any, chat: CreateChatDto): Promise<void>;
}
