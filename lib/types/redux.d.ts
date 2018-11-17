import * as Redux from 'redux';
import { ThunkAction } from 'redux-thunk';

declare module 'redux' {
  export interface Dispatch {
    (action: ThunkAction<any, any, any, any>): Promise<void>;
  }
}
