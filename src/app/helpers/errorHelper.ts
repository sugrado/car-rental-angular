import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHelper {
  static getMessage(responseError: HttpErrorResponse): string {
    if (responseError.status === 401) {
      return 'You are not authorized for this transaction.';
    }

    // Bad Request
    if(responseError.error.message!==undefined){
      return responseError.error.message;
    }
    
    // Validation Error Debug
    if (responseError.error.Errors !== null) {
      let validationErrors = responseError.error.Errors;
      let errorMessages: string = '';
      for (let i = 0; i < validationErrors.length; i++) {
        const error = validationErrors[i];
        errorMessages += error.ErrorMessage;
      }
      return errorMessages;
    } else {
      return responseError.error.Message;
    }
  }
}