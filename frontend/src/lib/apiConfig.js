// Accept either the backend origin or an existing /api URL without doubling /api.
export const API_ORIGIN = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://ronohs-decor-backend-hr4r.onrender.com').replace(/\/+$/, '').replace(/\/api$/, '');
