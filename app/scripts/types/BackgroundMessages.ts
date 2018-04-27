export interface IBackgroundMessage {
  type: MessageTypes;
  data: any;
}

export enum MessageTypes {
  ToggleSidebar = "TOGGLE_SIDEBAR",
  SearchWithYesware = "SEARCH_WITH_YESWARE"
}
