import {EnvironmentInterface} from '@core/models/interfaces';
import {DeployTargetEnum} from '@core/models/enums';


const baseURL = 'http://demo.gamify-landing.tabinserver.ir';


export const environment: EnvironmentInterface = {
  production: true,
  deployTarget: DeployTargetEnum.STAGING,
  baseURL,
  apiUrl: baseURL + '/api'
};
