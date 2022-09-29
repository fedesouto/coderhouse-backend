import { Model } from 'mongoose';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat, ChatDocument } from './schemas/chat.schema';
export declare class ChatService {
    private chatModel;
    constructor(chatModel: Model<ChatDocument>);
    create(createChatDto: CreateChatDto): Promise<Chat>;
    findAll(): Promise<Chat[]>;
}
