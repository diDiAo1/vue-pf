/**
 * Created by  on 2017/5/16.
 *  @author liqiuling
 */
import * as website from './website'
import * as login from './login'
import * as department from './sys/department'

export default {
    // 登录操作
  basicPlatform_login: login.basicPlatformLogin,
  basicPlatform_logout: login.basicPlatformLogout,
  basicPlatform_updatePwd: login.updatePwd,

  website_getSearchWebsiteList: website.searchWebsiteList,
  website_delWebsiteById: website.delWebsite,
  website_addWeb: website.addWebsite,

    // 部门操作
  dep_getDepartmentTree: department.getDepartmentTreeData
}
