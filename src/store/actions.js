import axios from "axios";
var urlBackEnd = 'https://localhost:25022/api/v1'
import router from '../routes'

export default {
    fetchProducts({ commit }) {
        axios.get(`${urlBackEnd}/Products`)
            .then((res) => {
                commit('setProducts', res.data)
            })

    },
    updateListProduct({ commit }, newList) {
        commit('setProducts', newList)
    },
    showStateDetail({ commit }, oneProduct) {
        const scrollTop = window.pageYOffset
        const scrollLeft = window.pageXOffset
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };

        commit('setProductDetailShow', oneProduct)
        console.log('tag', oneProduct)

        commit('setDetailShow', true)
    },
    hideStateDetail({ commit }) {
        commit('setDetailShow', false)
        window.onscroll = function() {};

    },

    fetchProvince({ commit }) {
        axios.get(`https://provinces.open-api.vn/api/?depth=2`)
            .then((respond) => {
                var objectProvince = respond.data
                var valueProvince = objectProvince.map(obj => obj.name)
                commit('setProvince', valueProvince)
            })
            .catch(() => {
                console.log("fail")
            })
    },
    updateIsSelectionShow({ commit }, stateShow) {
        commit('setIsShowSelection', stateShow)
    },
    updateProvinceSearch({ commit }, provinceSearch) {
        commit('setProvinceSearch', provinceSearch)
        axios.get(`https://provinces.open-api.vn/api/?depth=2`)
            .then((res) => {
                var objectProvinces = res.data
                for (const objectProvince of objectProvinces) {
                    if (objectProvince.name == provinceSearch) {
                        console.log('tag', objectProvince)
                        var lisProvince = objectProvince.districts.map(obj => obj.name)
                        commit('setDistrict', lisProvince)
                    }
                }
            })

    },
    updateDistrictSearch({ commit }, districtSearch) {
        commit('setDistrictSearch', districtSearch)
    },
    updateDistrict({ commit }, district) {
        commit('setDistrict', district)
    },
    login({ commit }, account) {
        var statelogin = 0
        var inputs = document.getElementsByClassName('input')
        for (const input of inputs) {
            if (input.value) {
                input.style.borderColor = 'black'
                input.setAttribute("title", "");
            } else {
                input.style.borderColor = 'red'
                input.setAttribute("title", "Không được để trống");
                statelogin = -1

            }

        }
        if (statelogin == 0) {
            axios.post(`${urlBackEnd}/AdminAccounts/login`, account)
                .then(function(res) {
                    if (res.data[0]) {
                        commit('setLoginError', false)
                        localStorage.setItem("adminLoginState", true)
                        router.push('/admin/products-manager')
                    } else {
                        commit('setLoginError', true)
                        return
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            commit('setLoginState', true)
        } else {
            return
        }
    },
    getListManufacture({ commit }) {
        axios.get(`https://localhost:25022/api/v1/Manufactures`)
            .then((res) => {
                commit('setListManufacture', res.data)
            })
    },
    onLogin({ commit }, account) {
        var statelogin = 0
        var inputs = document.getElementsByClassName('input')
        for (const input of inputs) {
            if (input.value) {
                input.style.borderColor = 'black'
                input.setAttribute("title", "");
            } else {
                input.style.borderColor = 'red'
                input.setAttribute("title", "Không được để trống");
                statelogin = -1

            }

        }
        if (statelogin == 0) {
            console.log(account);
            axios.post(`${urlBackEnd}/Accounts/login`, account)
                .then(function(res) {
                    if (res.data[0]) {
                        commit('setLoginError', false)
                        localStorage.setItem("customerId", res.data[0].customerId)
                        commit('setUserLoginState', true)
                        router.push('/')

                    } else {
                        commit('setLoginError', true)
                        console.log("error");
                        return
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            commit('setLoginState', true)
        } else {
            console.log("stateLogin");
            return
        }
    },
    postToCart({ commit }, itemCart) {
        console.log(itemCart);
        axios.post('https://localhost:25022/api/v1/Bills', itemCart)
            .then(() => {

            })
            .catch((err) => {
                console.log(err);
            })
        commit('setDetailShow', false)
        window.onscroll = function() {};
    },
    userLogOut() {
        localStorage.removeItem("customerId")
        router.push("/user-login")
    },
    updateChangePassword({ commit }, stateChangePass) {
        commit('setIsChangePasswordShow', stateChangePass)
    },
    updateHistoryOrderShow({ commit }, stateHistory) {
        commit('setIsHistoryOrderShow', stateHistory)
        if (stateHistory == false) {
            window.onscroll = function() {};
        }
    }


}