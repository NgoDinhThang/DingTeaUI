export default {
    DetailMilkTeaShow: state => state.DetailMilkTeaShow,
    provinceSearch: state => state.provinceSearch,
    districtSearch: state => state.districtSearch,
    district: state => state.district,
    province: state => state.province,
    isSelectionShow: state => state.isSelectionShow,
    products: state => state.products,
    loginState: state => state.loginState,
    loginError: state => state.loginError,
    listManufacture: state => state.listManufacture,
    productDetailShow: state => state.productDetailShow,
    customerId: () => localStorage.getItem("customerId"),
    userLoginState: state => state.userLoginState,
    adminLoginState: state => state.adminLoginState,
    isChangePasswordShow: state => state.isChangePasswordShow,
    isHistoryOrderShow: state => state.isHistoryOrderShow

}