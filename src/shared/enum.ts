export enum Environment {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  DEMO = 'demo',
}

export enum ErrorCodes {
  UNKNOWN = 'UNKNOWN',
  BAD_REQUEST = 'BAD_REQUEST',
  NOT_FOUND = 'NOT_FOUND',
  INVALID_REQUEST = 'INVALID_REQUEST',
  UNAUTHORIZED = 'UNAUTHORIZED',
  UNAUTHORIZED_TOKEN_ERROR = 'UNAUTHORIZED_TOKEN_ERROR',
  FORBIDDEN = 'FORBIDDEN',
  UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY',
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  DOCUMENT_NOT_FOUND = 'DOCUMENT_NOT_FOUND',
  DOCUMENT_ALREADY_EXISTS = 'DOCUMENT_ALREADY_EXISTS',
  DOCUMENT_NOT_VALID = 'DOCUMENT_NOT_VALID',
  FAILED_TO_CREATE_DOCUMENT = 'FAILED_TO_CREATE_DOCUMENT',
  FAILED_TO_UPDATE_DOCUMENT = 'FAILED_TO_UPDATE_DOCUMENT',
  FAILED_TO_FETCH_DATA = 'FAILED_TO_FETCH_DATA',
  FAILED_TO_SHARE_ITEM = 'FAILED_TO_SHARE_ITEM',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  ONLY_ADMIN_CAN_PERFOM_THIS_ACTION = 'ONLY_ADMIN_CAN_PERFOM_THIS_ACTION',
}
