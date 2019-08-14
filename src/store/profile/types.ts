import { Me } from '../../shared/types/profile';

export interface ProfileState {
  data: Me | null;
  errors: any;
}
