import axios from "axios";
const BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';
const COURSES_URL = `${BASE}/api/courses`;
export const findAssignmentsForCourse = async (courseId) => {
    const response = await axios
        .get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
};