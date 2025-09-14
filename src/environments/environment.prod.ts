import {EnvironmentInterface} from '@core/models/interfaces';
import {DeployTargetEnum} from '@core/models/enums';


const baseURL = '';

export const environment: EnvironmentInterface = {
  production: true,
  deployTarget: DeployTargetEnum.LOCAL,
  apiUrl: baseURL + '/api'
};
