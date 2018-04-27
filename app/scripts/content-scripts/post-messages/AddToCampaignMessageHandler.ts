import {TouchpointsManager} from '../touchpoints/TouchpointsManager';

export class AddToCampaignMessageHandler {
  static invoke(data: any): void {
    TouchpointsManager.show();
  }
}
