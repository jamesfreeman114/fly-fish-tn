export const getAllReports = () => {
    return fetch (`http://localhost:8088/reports`).then(res => res.json())
}