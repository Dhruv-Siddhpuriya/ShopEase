export const getImageUrl = (imagePath) => {
    if (!imagePath) return 'https://placehold.co/400x400?text=No+Image';
    if (imagePath.startsWith('/uploads')) {
        const baseUrl = import.meta.env.VITE_BASE_URL ? import.meta.env.VITE_BASE_URL.replace('/api', '') : 'http://localhost:5000';
        return `${baseUrl}${imagePath}`;
    }
    return imagePath;
};
