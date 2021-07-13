import { API_URL} from "../utils/constants";

export async function registerApi(formData){
    try {
        const url = "http://192.168.1.156/prueba-react/prueba.php?email=" + formData.email + "&user=" + formData.username + "&password=" + formData.password;
        // const params =  {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     body: JSON.stringify(formData),
        // };
        const response = await fetch(url);
        const result = response.toString();
        console.log(url);
        return result;
    } catch (error) {
        console.log("Hay error" + error);
        return null;
    }

}

export async function loginApi(formData){
    try {
        const url = "http://192.168.1.156/prueba-react/lista.php?&user=" + formData.identifier + "&password=" + formData.password;
        console.log(url);
        // const params = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formData),
        // };
        const response = await fetch(url);
        console.log(response);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getMeApi(token){
    try {
        const url=`${API_URL}/users/me`;
        const params ={
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`,
            },

        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

    
    
    
    
    
    
    