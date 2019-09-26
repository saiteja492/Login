import {createStore} from 'redux';
import rootreducer from './reducer/index';
export const store=createStore(rootreducer)