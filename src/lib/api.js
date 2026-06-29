const TOKEN_KEY = "cf_admin_token";

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (t) => localStorage.setItem(TOKEN_KEY, t);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

const authHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

async function request(path, options = {}) {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json", ...authHeaders() },
    ...options,
  });

  // 401 on any request = session expired, clear token
  if (res.status === 401) {
    clearToken();
    window.location.href = "/login";
    return;
  }

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || `Request failed: ${res.status}`);
  }

  return data;
}

export const api = {
  get:    (path)        => request(path),
  post:   (path, body)  => request(path, { method: "POST",  body: JSON.stringify(body) }),
  patch:  (path, body)  => request(path, { method: "PATCH", body: JSON.stringify(body) }),
  delete: (path)        => request(path, { method: "DELETE" }),
};
