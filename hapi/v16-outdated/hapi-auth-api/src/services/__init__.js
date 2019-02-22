import JWTService from './JWTService';

export default function(config) {
    return {
        JWT: JWTService(config.jwtConfig),
    };
}