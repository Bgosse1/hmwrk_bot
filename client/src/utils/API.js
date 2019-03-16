import axios from "axios";

export default {
  getAssignments: function() {
    return axios.get("/api/assignments");
  },
  deleteAssignment: function(id) {
    return axios.delete("/api/assignments/" + id);
  },
  saveAssignment: function(assignmentData) {
    return axios.post("/api/assignments", assignmentData);
  },
  updateAssignment: function(assignmentData) {
    return axios.put("/api/assignments/" + assignmentData.id, assignmentData);
  },
  Authenticated: () => {
    console.log("in authenticated");
    return axios.get("/api/authenticate");
  }

};
