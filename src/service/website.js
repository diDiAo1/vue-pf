/**
 * Mocking client-server processing
 */

import Vue from 'vue'
import axios from 'axios'

// 连接后台进行查询网站列表
export const searchWebsiteList = (options) => Vue.axios.get(
    '/TonikIntegration/servlet/WebsiteServlet?methodName=QueryList&strEndTime=&strStraTime=', { params: options });

// 进行删除网站
export const delWebsite = (id) => Vue.axios.get('/TonikIntegration/servlet/WebsiteServlet?methodName=del&id=' + id);

// 添加网站
export const addWebsite = (options) => Vue.axios.get(
    '/TonikIntegration/servlet/WebsiteServlet?methodName=add&id=&areaId=&countryId=&score=', { params: options });