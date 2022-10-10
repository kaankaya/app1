import axios from "axios";

async function getUser(user_id){
    const {data:user } = await axios('https://jsonplaceholder.typicode.com/users/'+user_id);
    const {data:postuser} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    console.log(user,"Postları",postuser);
}
export default getUser;