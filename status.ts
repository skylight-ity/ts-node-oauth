export enum StatusCode {
  OK = 1,

  GENERIC_USER_ACCOUNT_ERROR = 102,
  ACCESS_DENIED = 106,
  NOT_LOGGED_IN = 108,
  NEEDS_TWOFACTOR = 112,
  TWOFACTOR_INCORRECT = 122,
  USERNAME_TAKEN = 124,
  UNACCEPTABLE_USERNAME = 126,

  GENERIC_INTERNAL_ERROR = 202,
  DATABASE_ERROR = 204,
  NOT_FOUND = 206,
  BAD_STATE = 208,
  NO_MATCHING_ITEMS_FOUND = 210,
  CANNOT_CREATE_DIRECTORY = 216,
  FILE_UPLOAD_ERROR = 218,
  FILE_UPLOAD_ALREADY_EXISTS = 220,
  CANNOT_DELETE_FILE = 222,
  ALREADY_IN_THAT_STATE = 226,
  LOCKED = 228,
  DISABLED = 234,
  MALFORMED_RESPONSE = 236,
  EXPIRED = 238,
  EMPTY_DATA = 240,
  ITEM_NEEDS_REPAIR = 246,
  ITEM_NOT_IN_INVENTORY = 248,

  BAD_INPUT = 302,
  UNACCEPTABLE_ITEM = 304,
  DUPLICATE_ITEM = 306,
  BAD_REQUEST = 312,
  CAPTCHA_INVALID = 316,
  RATE_LIMIT_EXCEEDED = 318,
  MISSING_DEPENDENCY = 326,
  REQUEST_OR_FILE_TOO_LARGE = 330,
  UNACCEPTABLE_FILE_TYPE = 332,

  THIRD_PARTY_UNAVAILABLE = 408
}