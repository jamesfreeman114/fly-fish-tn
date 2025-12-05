export const getAllReports = () => {
    return fetch (`http://localhost:8088/reports`).then(res => res.json())
}

export const getReportById = (id) => {
    return fetch (`http://localhost:8088/reports/${id}?_expand=user&_expand=location`).then(res => res.json())
}