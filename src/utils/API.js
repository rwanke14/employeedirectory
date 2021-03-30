import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/?results=100&inc=gender,name,location,dob,phone,cell,picture");
  },

};