"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const chat_service_1 = require("./chat.service");
const create_chat_dto_1 = require("./dto/create-chat.dto");
let ChatGateway = class ChatGateway {
    constructor(chatService) {
        this.chatService = chatService;
    }
    afterInit(server) {
        console.log('WebSocket gateway init');
    }
    async handleConnection(socket) {
        socket.emit('chat_init', await this.chatService.findAll());
    }
    async handleNewMessage(sender, chat) {
        await this.chatService.create(chat);
        const updatedChats = await this.chatService.findAll();
        sender.emit('chat_update', updatedChats);
        sender.broadcast.emit('chat_update', updatedChats);
    }
};
__decorate([
    (0, websockets_1.SubscribeMessage)('new_message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_chat_dto_1.CreateChatDto]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleNewMessage", null);
ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map