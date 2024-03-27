import axios from "axios";

export const getUser = () => 
localStorage.getItem('user')
? JSON.parse(localStorage.getItem('user'))
: null;