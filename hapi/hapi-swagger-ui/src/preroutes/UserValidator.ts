import Hapi from '@hapi/hapi';
import Joi from '@hapi/joi';
import Boom from '@hapi/boom';


/**
 * User Schema
 */
export const USER_NAME_SCHEMA = Joi.string().min(2).max(100)
  .error(new Error('사용자 이름 속성값이 유효하지 않습니다.'));


/**
 * User Properties Validate Function
 */
export const checkUserPropertiesFromBody = {
  assign: 'checkUserPropertiesFromBody',
  method: async (request:Hapi.Request) => {
    try {
      const { username } 
        = (request.payload) as any;
      const validationSchema = Joi.object().keys({
        username: USER_NAME_SCHEMA.required(),
      });
      await Joi.validate(
        { username },
        validationSchema
        );
      return { username };
    } catch(e) {
      return Boom.badRequest(e.message);
    }
  }
};
