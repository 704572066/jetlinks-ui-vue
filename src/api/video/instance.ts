import { LocalStore } from '@/utils/comm'
import server from '@/utils/request'
import { BASE_API_PATH, TOKEN_KEY } from '@/utils/variable'
import { DeviceInstance } from '@/views/device/Instance/typings'
import { VideoDeviceInstance } from '@/views/video/Instance/typings'
import { DeviceMetadata, UnitType } from '@/views/device/Product/typings';

/**
 * 根据设备ID获取设备详情
 * @param id 设备ID
 * @returns 设备详情
 */
export const detail = (id: string, _hideError?: any) => server.get<VideoDeviceInstance>(`/video-device-instance/${id}/detail`, {}, {} , _hideError)

/**
 * 查询数据
 * @param data 分页搜索数据
 * @returns
 */
export const query = (data?: Record<string, any>) => server.post('/video-device-instance/_query', data)

/**
 * 不分页查询设备
 * @param data
 * @returns
 */
export const queryNoPagingPost = (data?: Record<string, any>) => server.post('/video-device-instance/_query/no-paging?paging=false', data)

/**
 * 删除设备
 * @param id 设备ID
 * @returns
 */
export const _delete = (id: string) => server.remove(`/video-device-instance/${id}`)

/**
 * 启用设备
 * @param id 设备ID
 * @param data
 * @returns
 */
export const _deploy = (id: string) => server.post(`/device-instance/${id}/deploy`)

/**
 * 禁用设备
 * @param id 设备ID
 * @param data
 * @returns
 */
export const _undeploy = (id: string) => server.post(`/device-instance/${id}/undeploy`)


/**
 * 批量激活设备
 * @param data 设备id数组
 * @returns
 */
export const batchDeployDevice = (data: string[]) => server.put(`/device-instance/batch/_deploy`, data)

/**
 * 批量注销设备
 * @param data 设备id数组
 * @returns
 */
export const batchUndeployDevice = (data: string[]) => server.put(`/device-instance/batch/_unDeploy`, data)

/**
 * 批量删除
 * @param data 设备id数组
 * @returns
 */
export const batchDeleteDevice = (data: string[]) => server.put(`/video-device-instance/batch/_delete`, data)

/**
 * 验证设备ID是否重复
 * @param id 设备id
 * @returns
 */
export const isExists = (id: string) => server.get(`/video-device-instance/${id}/exists`)

/**
 * 修改设备信息
 * @param data 设备信息
 * @returns
 */
export const update = (data: Partial<VideoDeviceInstance>) => data.id ? server.patch(`/video-device-instance`, data) : server.post(`/video-device-instance`, data)

/**
 * 修改设备信息
 * @param id 设备id
 * @param data 设备信息
 * @returns
 */
export const modify = (id: string, data: Partial<VideoDeviceInstance>) => server.put(`/video-device-instance/${id}`, data)

/**
 * 查询用户列表
 * @returns
 */
export const queryUserListNoPaging = () => server.post(`/user/_query/no-paging`, {
  paging: false,
  sorts: [{ name: 'name', order: "asc" }]
})


/**
 * 修改标签
 * @param id 设备id
 * @param data
 * @returns
 */
export const saveTags = (id: string, data: Record<string, any>) => server.patch(`/device/instance/${id}/tag`, data)

/**
 * 删除标签
 * @param deviceId 设备id
 * @param id 标签id
 * @returns
 */
export const delTags = (deviceId: string, id: string) => server.remove(`/device/instance/${deviceId}/tag/${id}`)

/**
 * 获取产品列表
 * @param data
 */
export const getProductListNoPage = (data: any) => server.post('/device/product/_query/no-paging?paging=false', data)

/**
 * 修改设备
 */
export const editDevice = (params: any) => server.patch('/video-device-instance', params)

/**
 * 新增设备
 */
export const addDevice = (params: any) => server.post("/video-device-instance", params)

/**
 * 产品状态
 * @param id 产品id
 * @returns
 */
export const queryProductState = (id: string) => server.get(`/device/product/${id}`)

/**
 * 产品配置
 * @param id 产品id
 * @returns
 */
export const queryProductConfig = (id: string) => server.get(`/device/product/${id}/config-metadata`)

/**
 * 设备配置
 * @param id 设备id
 * @returns
 */
export const queryDeviceConfig = (id: string) => server.get(`/device-instance/${id}/config-metadata`)


