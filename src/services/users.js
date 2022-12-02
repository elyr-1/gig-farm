import http from "./http";

export function getAllUsers() {
  return http.get("/auth/all");
}

export function updateUserById(id, updatedUserDetails) {
  return http.patch(`/auth/update/${id}`);
}

export function deleteUserById(id) {
  return http.delete(`/auth/delete/${id}`);
}
