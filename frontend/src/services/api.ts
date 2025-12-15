import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api"
});

// Interceptor pour ajouter token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const sendContact = (data: { nom: string; email: string; message: string }) => API.post("/contact", data);
export const getProjets = () => API.get("/projets");
export const createProjet = (data: any) => API.post("/projets", data);
export const updateProjet = (id: string, data: any) => API.put(`/projets/${id}`, data);
export const deleteProjet = (id: string) => API.delete(`/projets/${id}`);
