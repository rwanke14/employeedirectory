import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getEmployees: function() {
    //return axios.get("https://randomuser.me/api/?results=100");
    return axios.get("https://randomuser.me/api/?results=20&inc=gender,name,location,dob,phone,cell,picture&nat=us");
  },

};