import http from './http';

export function getAllComplaints() {
  return http.get('complaint/all');
}
export function deleteComplaintById(id) {
  return http.delete(`complaint/${id}`);
}
