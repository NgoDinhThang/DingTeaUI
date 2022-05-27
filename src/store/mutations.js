export default {
    setDetailShow(state, DetailMilkTeaShow) {
        state.DetailMilkTeaShow = DetailMilkTeaShow
    },
    setProvince(state, province) {
        state.province = province
    },
    setIsShowSelection(state, isSelectionShow) {
        // console.log(100);
        state.isSelectionShow = isSelectionShow
    },
    setProvinceSearch(state, provinceSearch) {
        state.provinceSearch = provinceSearch
    },
    setDistrictSearch(state, districtSearch) {
        state.districtSearch = districtSearch
    },
    setDistrict(state, district) {
        state.district = district
    },
    setProducts(state, products) {
        state.products = products
    },
    setLoginState(state, loginState) {
        state.loginState = loginState
    },
    setLoginError(state, loginError) {
        state.loginError = loginError
    },
    setListManufacture(state, listManufacture) {
        state.listManufacture = listManufacture
    },
    setProductDetailShow(state, productDetailShow) {
        state.productDetailShow = productDetailShow
    },
    setCustomerId(state, customerId) {
        state.customerId = customerId
    },
    setUserLoginState(state, userLoginState) {
        state.userLoginState = userLoginState
    },
    setAdminLoginState(state, adminLoginState) {
        state.adminLoginState = adminLoginState
    },
    setIsChangePasswordShow(state, isChangePasswordShow) {
        state.isChangePasswordShow = isChangePasswordShow
    },
    setIsHistoryOrderShow(state, isHistoryOrderShow) {
        state.isHistoryOrderShow = isHistoryOrderShow
    },

}