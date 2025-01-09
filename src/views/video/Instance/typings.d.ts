import { MetadataItem } from "../Product/typings";

export type VideoDeviceInstance = {
  id: string;
  name: string;
  describe: string;
  access_token: string;
  creatorId: string;
  creatorName: string;
  createTime: number;
  orgId: string;
  photoUrl: string;
};

type Unit = {
  id: string;
  name: string;
  symbol: string;
  text: string;
  type: string;
  value: string;
  description: string;
};

type PropertyData = {
  data: {
    value?:
      | {
          formatValue: string;
          property: string;
          value: any;
        }
      | any;
    timeString: string;
    timestamp: number;
    formatValue: string;
    property: string;
  };
};

type InstanceModel = {
  current: Partial<DeviceInstance>;
  detail: Partial<DeviceInstance>;
  config: any;
  metadataItem: MetadataItem;
  params: Set<string>; // 处理无限循环Card
  active?: string; // 当前编辑的Card
  selectedRows: Map<string, any>;
}

export interface ActionsType {
  key: string;
  text?: string;
  disabled?: boolean;
  permission?: boolean;
  onClick?: (data: any) => void;
  style?: CSSProperties;
  tooltip?: TooltipProps;
  popConfirm?: PopconfirmProps;
  icon?: string;
  children?: ActionsType[];
}