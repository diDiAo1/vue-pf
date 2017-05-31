/**
 * Created by  on 2017/5/16.
 *  @author liqiuling
 */
import * as website from "./website";
import * as login from "./login";
import * as department from "./sys/department";

export default {
    // 登录操作
    basicPlatform_login: login.basicPlatform_login,
    basicPlatform_logout: login.basicPlatform_logout,
    basicPlatform_updatePwd: login.basicPlatform_updatePwd,

    website_getSearchWebsiteList: website.searchWebsiteList,
    website_delWebsiteById: website.delWebsite,
    website_addWeb: website.addWebsite,

    //部门操作
    dep_getDepartmentTree: department.getDepartmentTreeData
}