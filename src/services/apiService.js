import * as React from "react";
// import { Redirect } from "react-router";
// import { Observable } from "rxjs";
// import { history } from "../_helpers/history";
import { userActions } from "../redux/actions/user.actons";
// import { dispatch } from "rxjs/internal/observable/pairs";
// import { dispatch } from "rxjs/internal/observable/pairs";


const axios = require('axios');

export class ApiService {

    state = {
        redirect: false
    };

    static request(url, type, data, headers = undefined, noStringify = false) {
        let bodyData;
        let service;
        // let header: any;
        let options;
        let httpService;
        bodyData = noStringify ? JSON.stringify(data) : data;

        if (localStorage.getItem("user") == null) {
            headers = undefined;
        }
        // header = new Headers(headers || {
        //     'Content-Type': 'application/json',
        //     'alat-client-apiKey': 'ERTojertoijertoijert',
        //     'Accept': 'application/json',
        // });
        //
        // options = new RequestOptions({ headers: header });
        if (type.toLowerCase() === 'get') {
            // service = httpService.get(url, options);
            if (headers == undefined) {
                if (localStorage.getItem("user") == null && axios.defaults.headers.common["alat-token"]) {
                    delete axios.defaults.headers.common.Authorization;
                    delete axios.defaults.headers.common["alat-token"];
                }
                axios.defaults.headers.common['alat-client-apiKey'] = 'ERTojertoijertoijert';
                axios.defaults.headers.common['Content-Type'] = 'application/json';
                // axios.default.headers.common['content-type'] ='multipart/form-data'

            } else if (headers !== undefined) {
                for (let [key, value] of Object.entries(headers)) {
                    axios.defaults.headers.common[key] = value;
                }
            }
            service = axios.get(url, bodyData);
            return service.then(function (response) {
                return service;
            }).catch(function (error) {
                // console.log(error);
                // return service;
                if (error.response) {
                    //console.log(error.response);
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);  && error.response.statusText.toLowerCase().includes('token not valid')
                    if (error.response.status === 401) {
                        // dispatch(userActions.logout());
                        //history.push('/');
                    } else {
                        return service;
                    }

                }
                return service;
            });

        } else {
            //check for header
            if (headers == undefined) {
                if (localStorage.getItem("user") == null && axios.defaults.headers.common["alat-token"]) {
                    delete axios.defaults.headers.common.Authorization;
                    delete axios.defaults.headers.common["alat-token"];
                }
                axios.defaults.headers.common['alat-client-apiKey'] = 'ERTojertoijertoijert';
                axios.defaults.headers.common['Content-Type'] = 'application/json';
            }
            else if (headers !== undefined) {
                for (let [key, value] of Object.entries(headers)) {
                    axios.defaults.headers.common[key] = value;
                }
            }
            //console.log("after", headers);
            //console.log("after",axios.defaults.headers )
            service = axios.post(url, bodyData);
            return service.then(function (response) {
                // console.log("successful");
                return service;
            }).catch(function (error) {

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                    if (error.response.status === 401 && error.response.statusText.toLowerCase().includes('token not valid')) {
                        // dispatch(userActions.logout());
                        //history.push('/');
                    } else {
                        return service;
                    }
                }
                return service;
            });
        }
    }


    static requests(url, type, data, headers, noStringify = false) {
        let bodyData;
        let service;
        // let query: any;

        bodyData = noStringify ? JSON.stringify(data) : data;


        if (type.toLowerCase() === "get") {
            // console.log("get method");
            // axios.defaults.headers.common['alat-client-apiKey'] = 'ERTojertoijertoijert';
            // axios.defaults.headers.common['Content-Type'] = 'application/json';
            // console.log(headers);
            // if(headers){
            //     for (let [key, value] of Object.entries(headers)) {
            //         axios.defaults.headers.common[key] = value;
            //     }
            // }
            if (headers == undefined) {
                if (localStorage.getItem("user") == null && axios.defaults.headers.common["alat-token"]) {
                    delete axios.defaults.headers.common.Authorization;
                    delete axios.defaults.headers.common["alat-token"];
                }
                axios.defaults.headers.common['alat-client-apiKey'] = 'ERTojertoijertoijert';
                axios.defaults.headers.common['Content-Type'] = 'application/json';
            }

            else if (headers !== undefined) {
                for (let [key, value] of Object.entries(headers)) {
                    axios.defaults.headers.common[key] = value;
                }
            }
            axios.get(url, bodyData).then(function (response) {
                //console.log('dcfv');
                //console.log(response);
                return service.map((res) => {
                    return res._body !== '' ? res.json() : null;
                    // return response;
                });
                // return response;
            }).catch(function (error) {
                if (error.status === 401 && error.statusText.toLowerCase().includes('token not valid')) {
                    // sessionStorage.clear();
                    // return <Redirect to='/login'/>
                    // dispatch(userActions.logout());
                    // this.router.navigate(['/login']); redirect to login
                } else {
                    let requestError = error.status !== 0 ? error._body : '{ \"message\": \"Could not connect to server\" }';
                    try {
                        requestError = JSON.parse(requestError);
                    } catch (e) {
                        requestError = 'Sorry, an error occured';
                    }
                    // return Observable.throw(requestError || 'Server error');
                    // return error._body;
                    // let requestError = error.status !== 0 ? error._body : '{ \"message\": \"Could not connect to server\" }';
                    // try {
                    //     requestError = JSON.parse(requestError);
                    // } catch (e) {
                    //     requestError = 'Sorry, an error occured';
                    // }
                    // throw(requestError || 'Server error');
                }
            });
        }
        else {
            //console.log("post method");
            // axios.defaults.headers.common['alat-client-apiKey'] = 'ERTojertoijertoijert';
            // axios.defaults.headers.common['Content-Type'] = 'application/json';
            // console.log(headers);
            // if(headers){
            //     for (let [key, value] of Object.entries(headers)) {
            //         axios.defaults.headers.common[key] = value;
            //     }
            // }
            if (headers == undefined) {
                if (localStorage.getItem("user") == null && axios.defaults.headers.common["alat-token"]) {
                    delete axios.defaults.headers.common.Authorization;
                    delete axios.defaults.headers.common["alat-token"];
                }
                axios.defaults.headers.common['alat-client-apiKey'] = 'ERTojertoijertoijert';
                axios.defaults.headers.common['Content-Type'] = 'application/json';
            }

            else if (headers !== undefined) {
                for (let [key, value] of Object.entries(headers)) {
                    axios.defaults.headers.common[key] = value;
                }
            }
            return axios.post(url, bodyData).then(function (response) {
                // console.log('dcfv');
                // console.log(response);
                // console.log(service);
                return service.map((res) => {
                    //console.log(response);
                    return response;
                    // return res._body !== '' ? res.json() : null;
                    // return response;
                }).catch(function (error) {
                    // console.log(error);
                    if (error.status === 401 && error.statusText.toLowerCase().includes('token not valid')) {
                        // sessionStorage.clear();
                        // return <Redirect to='/login'/>
                        // dispatch(userActions.logout());
                        // this.router.navigate(['/login']); redirect to login
                    } else {
                        let requestError = error.status !== 0 ? error._body : '{ \"message\": \"Could not connect to server\" }';
                        // console.log(requestError);
                        try {
                            requestError = JSON.parse(requestError);
                        } catch (e) {
                            requestError = 'Sorry, an error occured';
                        }
                        // return Observable.throw(requestError || 'Server error');
                        // let requestError = error.status !== 0 ? error._body : '{ \"message\": \"Could not connect to server\" }';
                        // try {
                        //     requestError = JSON.parse(requestError);
                        // } catch (e) {
                        //     requestError = 'Sorry, an error occured';
                        // }
                        // throw(requestError || 'Server error');
                    }
                });
            });
        }
    }
}