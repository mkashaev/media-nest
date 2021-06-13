import { UesrEntity } from 'src/user/user.entity';

export type UserType = Omit<UesrEntity, 'hashPassword'>;
