import type { LibProperties } from './libProperties';
import { exposeLib } from 'hel-lib-proxy';
import { LIB_NAME } from '../configs/subApp';

export default exposeLib<LibProperties>(LIB_NAME);

export type Lib = LibProperties;
