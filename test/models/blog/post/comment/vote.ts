
import { attr, belongsTo, hasMany, Model, ModelOrPromise, Schema, Serializers } from '../../../../../src';
import { Comment, User } from '../../../../models';

export class Vote extends Model {

    public static modelName: string = 'comment/vote';
    public static modelPath: string = 'comment/votes';
    public static pathPrefixGroup: string = 'post';

    public schema: Schema = {

        score: attr(Serializers.Number),

        comment: belongsTo(Comment, { inverse: 'votes' }),
        user: belongsTo(User),
    };

    public score: Number = 0;
    public comment: ModelOrPromise<Comment> | null = null;
    public user: ModelOrPromise<User> | null = null;

}

