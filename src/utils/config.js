const PROJECT_ID = "f104bi07c490";

export function getHeaderWithProjectId() {
  return {
    headers: { projectId: PROJECT_ID },
  };
}
