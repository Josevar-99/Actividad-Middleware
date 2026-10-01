import {Injectable, CanActivate, ExecutionContext, UnauthorizedException} from '@nestjs/common';
import {Observable} from 'rxjs';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.query['x-api-key'];

    if (apiKey !== 'restaurant-secret') {
      throw new UnauthorizedException('Invalid API key');
    }
    return true;
  }
}