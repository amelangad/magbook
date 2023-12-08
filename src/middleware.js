export { default } from 'next-auth/middleware';

export const config = {
    matcher: ["/profile/:path*", "/editUser/:path*", "/settings/:path*", "/posts/:path*"]
};
