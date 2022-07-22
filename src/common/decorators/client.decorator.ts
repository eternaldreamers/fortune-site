import { TYPES } from '@common/constants/types';
import { inject } from 'inversify';

export const Environment = inject(TYPES.Environment);
export const HttpClient = inject(TYPES.HttpClient);