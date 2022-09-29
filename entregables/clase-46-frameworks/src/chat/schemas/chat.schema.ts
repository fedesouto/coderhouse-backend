import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
    @Prop({required: true})
    message: string
    @Prop({required: true})
    sender: string
    @Prop({default: new Date().toLocaleString()})
    date: string
}

export const ChatSchema = SchemaFactory.createForClass(Chat)