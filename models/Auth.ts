import authMongoose, { Schema, Model, Document } from 'mongoose';

type AuthDocument = Document & {
    subject: string, permission: Number, status: String
};

type AuthInput = { subject: AuthDocument['subject'], permission: AuthDocument['permission'], status: AuthDocument['status'] }

const AuthSchema = new Schema({
    subject: { type: String }, permission: { type: Number }, status: { type: String }
});

const Auth: Model<AuthDocument> = authMongoose.model<AuthDocument>('Auth', AuthSchema)

export { Auth, AuthDocument, AuthInput }