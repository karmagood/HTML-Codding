import {getTemplate} from "./halpers";
import user from "./user";


export default Promise.all ([
    getTemplate("templates/navigation.handlebars"),
    user
])
    .then ( ([navigation, user]) => (data) => {
        return  user(data) + navigation(data);
    })



