import { ExpressRequestInterface } from '@app/types/expressRequest.interface';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const req = ctx.switchToHttp().getRequest<ExpressRequestInterface>();

    if (req.user) {
      return true;
    }

    throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
  }
}
