export const getAllReports = () => {
    return fetch (`http://localhost:8088/reports`).then(res => res.json())
}

export const getReportById = (id) => {
    return fetch (`http://localhost:8088/reports/${id}?_expand=user&_expand=location`).then(res => res.json())
}

export const createReport = (newReport) => {

  return fetch("http://localhost:8088/reports", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newReport),
  }).then((res) => res.json())
}
