const baseUrl = "arosenvinge.dk/devops-start/api/"
export function loginURL(){
    //must be used for login function/component
    return baseUrl + "login";
}
export function adminInfo(){
    //used after login to show info for admin user
    return baseUrl + "info/admin";
}
export function basicLogin(){
    //used after login to show info for basic user
    return baseUrl + "info/user"
}

