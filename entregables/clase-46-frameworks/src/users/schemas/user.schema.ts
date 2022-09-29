import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({required: true})
    username: string;
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    password: string;
    @Prop({default: 'https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg'})
    avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User)