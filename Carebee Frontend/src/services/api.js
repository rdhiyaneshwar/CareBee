import axios from "axios";


const token=localStorage.getItem('Token')
const authHeader = `Bearer ${token}`;

const headers = {
  'Authorization': authHeader,
  'Content-Type': 'application/json',
};

const URI = 'http://localhost:8181'


const getProduct = () => axios.get(`${URI}/`,{headers})
const getProductbyId = (id) => axios.get(`${URI}/user/${id}`, { headers })
const addProduct = (product) => axios.post(`${URI}/post`, product, { headers })
const editProduct = (id, product) => axios.put(`${URI}/put/${id}`, product, { headers })
const deleteProduct = (id) => axios.delete(`${URI}/delete/${id}`, { headers })

const getUser = () => axios.get(`${URI}/user/get`, { headers })
const getUserbyId = (id) => axios.get(`${URI}/user/find/${id}`, { headers })
const editUser = (id, product) => axios.put(`${URI}/user/edit/${id}`, product, { headers })
const deleteUser = (id) => axios.delete(`${URI}/user/delete/${id}`, { headers })

const userLogin = (signin) => axios.post(`${URI}/api/v1/auth/login`, signin)
const userRegister = (register) => axios.post(`${URI}/api/v1/auth/register`, register)
const adminLogin = (signin) => axios.post(`${URI}/admin/login`, signin, { headers })




export {getUser, getUserbyId, editUser, deleteUser,  adminLogin,userLogin,userRegister ,addProduct,deleteProduct,getProductbyId,getProduct,editProduct}