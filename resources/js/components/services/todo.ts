import axios from "axios";

const env = "http://127.0.0.1:8000/api/v1"
const check = "activities/check";

export const getDataAxios = async() => {
    const url = env + "/activities/";
    return axios.get(url)
        .then((response) => {
            const allActivities = response.data.data;
            console.log("Retrieved activities from database successfully!");
            return allActivities;
        })
        .catch(() => {
            console.log("Couldn't fetch data")
        })
}

export const postDataAxios = async(inputText) => {
    const url = env + `/activities/`;
    return axios.post( url,
        {activity_name: inputText}
    )
        .then(() => {
            getDataAxios()
        })
        .catch(() => {
            console.log("Oops, request failed!")
        })
}

export const editDataAxios = async(inputText, id) => {
    const url = `${env}/activities/${id}`;
    return axios.patch(url,
        {activity_name: inputText})
        .then((response) => {
            console.log(response.data);
            getDataAxios()
        })
        .catch(() => {
            console.log("Oops, edit failed!")
        })
}

export const destroyDataAxios = async(id) => {
    const url = `${env}/activities/${id}`;
    return axios.delete(url);
}

export const checkDataAxios = async(id, value) => {
    const url = `${env}/${check}/${id}`;

    return axios.patch(url,
        { checked: value })
        .then(() => {
            getDataAxios()
        })
        .catch(() => {
            console.log("Oops, check failed!")
        })
}
